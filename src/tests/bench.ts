import autocannon from "autocannon";
import { faker } from "@faker-js/faker/locale/pt_BR";
import fs from "node:fs";

const BASE_URL = "http://localhost:3000"; // Porta padrão, ajuste se necessário
const DURATIONS = [30, 60];
const CONNECTIONS = [50, 100, 250];
const TEST_KEYS = ["bruno"];

const IMPLEMENTATIONS = [
  { name: "Express", route: "/api/express" },
  { name: "Fastify", route: "/api/fastify" },
];

type BenchmarkResult = {
  implementation: string;
  route: string;
  method: string;
  key: string;
  connections: number;
  duration: number;
  requestsPerSecond: number;
  latencyAvg: number;
  latencyP99: number;
  errors: number;
  timeouts: number;
};

async function runBenchmark(
  implementation: string,
  route: string,
  method: "GET" | "POST",
  connections: number,
  duration: number,
  key: string,
  bodyData: object | null = null
): Promise<BenchmarkResult> {
  const url = method === "GET" ? `${BASE_URL}${route}?${key}` : `${BASE_URL}${route}`;
  const result = await autocannon({
    url,
    connections,
    duration,
    method,
    ...(bodyData
      ? {
        body: JSON.stringify(bodyData),
        headers: { "Content-Type": "application/json" },
      }
      : {}),
  });

  return {
    implementation,
    route,
    method,
    key,
    connections,
    duration,
    requestsPerSecond: result.requests.average,
    latencyAvg: result.latency.average,
    latencyP99: result.latency.p99,
    errors: result.errors,
    timeouts: result.timeouts,
  };
}

function analyzeResults(results: BenchmarkResult[]): string {
  const grouped = results.reduce((acc, curr) => {
    if (!acc[curr.implementation]) acc[curr.implementation] = [];
    acc[curr.implementation].push(curr);
    return acc;
  }, {} as Record<string, BenchmarkResult[]>);

  let bestThroughput = { implementation: "", reqPerSec: 0 };
  let bestLatency = { implementation: "", avgLatency: Infinity };

  for (const [impl, tests] of Object.entries(grouped)) {
    const avgReq = tests.reduce((acc, r) => acc + r.requestsPerSecond, 0) / tests.length;
    const avgLat = tests.reduce((acc, r) => acc + r.latencyAvg, 0) / tests.length;
    if (avgReq > bestThroughput.reqPerSec) bestThroughput = { implementation: impl, reqPerSec: avgReq };
    if (avgLat < bestLatency.avgLatency) bestLatency = { implementation: impl, avgLatency: avgLat };
  }

  const fastest = bestThroughput.reqPerSec;
  const comparison = Object.entries(grouped)
    .map(([impl, tests]) => {
      const avg = tests.reduce((acc, r) => acc + r.requestsPerSecond, 0) / tests.length;
      const diff = ((fastest - avg) / avg) * 100;
      if (diff === 0) return null;
      return `- **${impl}**: ${diff.toFixed(2)}% mais lento`;
    })
    .filter(Boolean)
    .join("\n");

  return `
## 🏁 Análise Final

- **Maior Throughput**: ${bestThroughput.implementation} (${bestThroughput.reqPerSec.toFixed(2)} req/s)
- **Menor Latência Média**: ${bestLatency.implementation} (${bestLatency.avgLatency.toFixed(2)} ms)

${comparison}
`;
}

(async () => {
  console.log("🚀 Iniciando benchmark...");

  const benchmarkResults: BenchmarkResult[] = [];

  for (const impl of IMPLEMENTATIONS) {
    for (const key of TEST_KEYS) {
      const postBody = {
        key,
        value: {
          name: key.charAt(0).toUpperCase() + key.slice(1),
          lastName: faker.person.lastName(),
          age: Math.floor(Math.random() * 40) + 20,
        },
      };

      for (const connections of CONNECTIONS) {
        for (const duration of DURATIONS) {
          console.log(`POST ${impl.name} - ${connections} conexões - ${duration}s`);
          const post = await runBenchmark(impl.name, impl.route, "POST", connections, duration, key, postBody);
          benchmarkResults.push(post);

          console.log(`GET ${impl.name} - ${connections} conexões - ${duration}s`);
          const get = await runBenchmark(impl.name, impl.route, "GET", connections, duration, key);
          benchmarkResults.push(get);
        }
      }
    }
  }

  const summary = analyzeResults(benchmarkResults);
  const markdownContent = `# 🧪 Benchmark: Fastify vs Express

| Framework | Método | Rota | Chave | Conexões | Duração | Req/s | Latência Média | p99 | Erros | Timeouts |
|-----------|--------|------|-------|----------|---------|-------|----------------|-----|--------|----------|
${benchmarkResults
      .map(
        (r) =>
          `| ${r.implementation} | ${r.method} | ${r.route} | ${r.key} | ${r.connections} | ${r.duration}s | ${r.requestsPerSecond.toFixed(
            2
          )} | ${r.latencyAvg.toFixed(2)}ms | ${r.latencyP99.toFixed(2)}ms | ${r.errors} | ${r.timeouts} |`
      )
      .join("\n")}

${summary}

_Gerado em ${new Date().toLocaleString()}_
`;

  fs.writeFileSync(`benchmark-fastify-vs-express-${Date.now()}.md`, markdownContent);
  console.log("✅ Benchmark finalizado. Resultados salvos.");
})();
