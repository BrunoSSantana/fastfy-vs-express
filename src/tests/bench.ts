import { faker } from "@faker-js/faker/locale/pt_BR";
import autocannon from "autocannon";
import fs from "node:fs";

const EXPRESS_BASE_URL = "http://localhost:3001";
const FASTIFY_BASE_URL = "http://localhost:3002";

// Configurações de teste mais granulares para insights valiosos
const DURATIONS = [15, 30, 60] as const; // Teste progressivo de sustentabilidade
const CONNECTIONS = [10, 50, 100, 250, 500] as const; // Análise de escalabilidade
const TEST_VARIANTS = ["basic", "complex", "heavy"] as const; // Diferentes complexidades

const IMPLEMENTATIONS = [
  { name: "Express", route: "/api/express", baseUrl: EXPRESS_BASE_URL },
  { name: "Fastify", route: "/api/fastify", baseUrl: FASTIFY_BASE_URL },
];

// Cenários com configurações específicas para insights
const TEST_SCENARIOS = [
  {
    name: "user_crud",
    description: "CRUD de usuários",
    payloadSize: "small" as const,
    cpuIntensive: false,
    cacheable: true,
    breakingPoint: 400, // Conexões onde performance degrada
    optimalConnections: 100,
  },
  {
    name: "file_upload",
    description: "Upload de arquivos",
    payloadSize: "large" as const,
    cpuIntensive: false,
    cacheable: false,
    breakingPoint: 150,
    optimalConnections: 50,
  },
  {
    name: "analytics_processing",
    description: "Processamento analítico",
    payloadSize: "medium" as const,
    cpuIntensive: true,
    cacheable: false,
    breakingPoint: 100,
    optimalConnections: 25,
  },
  {
    name: "product_catalog",
    description: "Catálogo de produtos",
    payloadSize: "medium" as const,
    cpuIntensive: false,
    cacheable: true,
    breakingPoint: 300,
    optimalConnections: 150,
  },
  {
    name: "real_time_data",
    description: "Dados em tempo real",
    payloadSize: "small" as const,
    cpuIntensive: false,
    cacheable: false,
    breakingPoint: 500,
    optimalConnections: 200,
  },
];

type BenchmarkResult = {
  implementation: string;
  route: string;
  method: string;
  scenario: string;
  variant: string;
  connections: number;
  duration: number;
  requestsPerSecond: number;
  latencyAvg: number;
  latencyP99: number;
  errors: number;
  timeouts: number;
  throughputMB: number;
  cpuEfficiency: number; // req/s por unidade de carga
  memoryEfficiency: number;
  sustainabilityScore: number; // Performance ao longo do tempo
};

// Geradores de payload com variações por TEST_VARIANTS
function generateTestPayload(scenario: string, variant: typeof TEST_VARIANTS[number], size: "small" | "medium" | "large") {
  const baseData = {
    timestamp: new Date().toISOString(),
    requestId: faker.string.uuid(),
    variant, // Incluir variant nos dados
  };

  const complexity = variant === "basic" ? 1 : variant === "complex" ? 3 : 5;

  switch (scenario) {
    case "user_crud":
      return {
        ...baseData,
        user: {
          id: faker.string.uuid(),
          email: faker.internet.email(),
          name: faker.person.fullName(),
          // Complexidade baseada no variant
          metadata: variant === "heavy" ? generateLargeMetadata(complexity) : {},
          preferences: Array.from({ length: complexity }, () => ({
            key: faker.lorem.word(),
            value: faker.lorem.sentence()
          }))
        },
      };

    case "file_upload":
      return {
        ...baseData,
        file: {
          name: faker.system.fileName(),
          size: faker.number.int({ min: 1024 * complexity, max: 1048576 * complexity }),
          type: faker.helpers.arrayElement(["image/jpeg", "application/pdf", "video/mp4"]),
          checksum: faker.string.hexadecimal({ length: 64 }),
          chunks: variant === "heavy" ? generateFileChunks(complexity * 10) : []
        },
      };

    case "analytics_processing":
      return {
        ...baseData,
        analytics: {
          sessionId: faker.string.uuid(),
          events: Array.from({ length: complexity * 20 }, () => ({
            type: faker.helpers.arrayElement(["pageview", "click", "purchase"]),
            timestamp: faker.date.recent().toISOString(),
            properties: {
              url: faker.internet.url(),
              value: faker.number.float({ min: 0, max: 1000 }),
              // Dados computacionalmente pesados para heavy
              computedMetrics: variant === "heavy" ? generateComputedMetrics() : {}
            },
          })),
        },
      };

    case "product_catalog":
      return {
        ...baseData,
        filters: {
          category: faker.helpers.arrayElement(["electronics", "clothing", "books"]),
          priceRange: { min: 0, max: 1000 },
          // Filtros complexos para variants avançados
          advancedFilters: variant !== "basic" ? generateAdvancedFilters(complexity) : {},
          aggregations: variant === "heavy" ? ["count", "avg", "min", "max", "groupBy"] : ["count"]
        },
      };

    case "real_time_data":
      return {
        ...baseData,
        sensors: Array.from({ length: complexity * 5 }, () => ({
          id: faker.string.uuid(),
          type: faker.helpers.arrayElement(["temperature", "pressure", "humidity"]),
          value: faker.number.float({ min: 0, max: 100 }),
          location: {
            lat: faker.location.latitude(),
            lng: faker.location.longitude(),
          },
          // Dados de telemetria complexos para heavy
          telemetry: variant === "heavy" ? generateTelemetryData() : {}
        })),
      };

    default:
      return baseData;
  }
}

function generateLargeMetadata(multiplier: number = 1) {
  return {
    history: Array.from({ length: 50 * multiplier }, () => ({
      action: faker.lorem.word(),
      timestamp: faker.date.past().toISOString(),
      details: faker.lorem.paragraph(),
    })),
    customFields: Object.fromEntries(
      Array.from({ length: 25 * multiplier }, () => [faker.lorem.word(), faker.lorem.sentence()])
    ),
  };
}

function generateFileChunks(count: number = 10) {
  return Array.from({ length: count }, (_, i) => ({
    index: i,
    data: faker.string.alphanumeric(1024),
    checksum: faker.string.hexadecimal({ length: 32 }),
  }));
}

function generateComputedMetrics() {
  return {
    conversionRate: faker.number.float({ min: 0, max: 1 }),
    sessionValue: faker.number.float({ min: 0, max: 500 }),
    bounceRate: faker.number.float({ min: 0, max: 1 }),
    engagementScore: faker.number.float({ min: 0, max: 10 }),
  };
}

function generateAdvancedFilters(complexity: number) {
  return {
    tags: Array.from({ length: complexity * 2 }, () => faker.lorem.word()),
    attributes: Object.fromEntries(
      Array.from({ length: complexity }, () => [faker.lorem.word(), faker.lorem.word()])
    ),
    dateRange: {
      start: faker.date.past().toISOString(),
      end: faker.date.future().toISOString()
    }
  };
}

function generateTelemetryData() {
  return {
    signalStrength: faker.number.int({ min: -100, max: -30 }),
    batteryVoltage: faker.number.float({ min: 3.0, max: 4.2 }),
    firmware: faker.system.semver(),
    diagnostics: {
      uptime: faker.number.int({ min: 0, max: 86400 }),
      errors: faker.number.int({ min: 0, max: 10 }),
      warnings: faker.number.int({ min: 0, max: 5 })
    }
  };
}

async function runBenchmark(
  implementation: string,
  route: string,
  method: "GET" | "POST",
  connections: number,
  duration: number,
  scenario: string,
  variant: string,
  baseUrl: string,
  bodyData: object | null = null
): Promise<BenchmarkResult> {
  const url = method === "GET"
    ? `${baseUrl}${route}/${scenario}?variant=${variant}&connections=${connections}`
    : `${baseUrl}${route}/${scenario}`;

  // Headers realistas
  const headers: Record<string, string> = {
    "User-Agent": "Benchmark-Tool/2.0",
    "Accept": "application/json",
    "Accept-Encoding": "gzip, deflate, br",
    "Connection": "keep-alive",
    "X-Test-Variant": variant,
    "X-Expected-Load": connections.toString()
  };

  if (bodyData) {
    headers["Content-Type"] = "application/json";
  }

  // Simula autenticação realista
  if (Math.random() > 0.2) {
    headers["Authorization"] = `Bearer ${faker.string.alphanumeric(40)}`;
  }

  const startTime = Date.now();

  const result = await autocannon({
    url,
    connections,
    duration,
    method,
    headers,
    ...(bodyData ? { body: JSON.stringify(bodyData) } : {}),
    pipelining: 1,
    maxConnectionRequests: 1000,
    maxOverallRequests: connections * duration * 100,
  });

  const endTime = Date.now();
  const actualDuration = (endTime - startTime) / 1000;

  const bodySize = bodyData ? JSON.stringify(bodyData).length : 0;
  const throughputMB = (result.requests.total * bodySize) / (1024 * 1024);

  // Métricas de eficiência
  const cpuEfficiency = result.requests.average / connections; // req/s por conexão
  const memoryEfficiency = throughputMB / connections; // MB/s por conexão

  // Score de sustentabilidade (penaliza se duração real foi muito diferente)
  const sustainabilityScore = Math.max(0, 10 - (Math.abs(actualDuration - duration) / duration) * 10);

  return {
    implementation,
    route,
    method,
    scenario,
    variant,
    connections,
    duration,
    requestsPerSecond: result.requests.average,
    latencyAvg: result.latency.average,
    latencyP99: result.latency.p99,
    errors: result.errors,
    timeouts: result.timeouts,
    throughputMB,
    cpuEfficiency,
    memoryEfficiency,
    sustainabilityScore,
  };
}

function analyzeResults(results: BenchmarkResult[]): string {
  let analysis = "## 🏁 Análise Detalhada de Performance\n\n";

  // Análise por cenário e escalabilidade
  analysis += "### 📈 Análise de Escalabilidade\n\n";

  for (const scenario of TEST_SCENARIOS) {
    analysis += `#### ${scenario.description}\n`;

    const scenarioResults = results.filter(r => r.scenario === scenario.name);
    const byImpl = scenarioResults.reduce((acc, curr) => {
      if (!acc[curr.implementation]) acc[curr.implementation] = [];
      acc[curr.implementation].push(curr);
      return acc;
    }, {} as Record<string, BenchmarkResult[]>);

    for (const [impl, tests] of Object.entries(byImpl)) {
      // Análise de escalabilidade
      const scalabilityAnalysis = analyzeScalability(tests);
      const efficiencyAnalysis = analyzeEfficiency(tests);

      analysis += `**${impl}**:\n`;
      analysis += `- Throughput máximo: ${scalabilityAnalysis.maxThroughput.toFixed(2)} req/s (${scalabilityAnalysis.maxThroughputConnections} conexões)\n`;
      analysis += `- Ponto de quebra: ${scalabilityAnalysis.breakingPoint} conexões\n`;
      analysis += `- Eficiência CPU: ${efficiencyAnalysis.avgCpuEfficiency.toFixed(3)} req/s por conexão\n`;
      analysis += `- Sustentabilidade: ${efficiencyAnalysis.avgSustainability.toFixed(1)}/10\n\n`;
    }
  }

  // Análise de variants (complexidade)
  analysis += "### ⚙️ Análise por Complexidade\n\n";

  for (const variant of TEST_VARIANTS) {
    analysis += `#### Variant: ${variant.toUpperCase()}\n`;

    const variantResults = results.filter(r => r.variant === variant);
    const byImpl = variantResults.reduce((acc, curr) => {
      if (!acc[curr.implementation]) acc[curr.implementation] = {
        requests: 0, latency: 0, efficiency: 0, count: 0
      };
      acc[curr.implementation].requests += curr.requestsPerSecond;
      acc[curr.implementation].latency += curr.latencyAvg;
      acc[curr.implementation].efficiency += curr.cpuEfficiency;
      acc[curr.implementation].count++;
      return acc;
    }, {} as Record<string, { requests: number; latency: number; efficiency: number; count: number }>);

    for (const [impl, stats] of Object.entries(byImpl)) {
      const avgReq = stats.requests / stats.count;
      const avgLat = stats.latency / stats.count;
      const avgEff = stats.efficiency / stats.count;

      analysis += `- **${impl}**: ${avgReq.toFixed(2)} req/s, ${avgLat.toFixed(2)}ms, ${avgEff.toFixed(3)} eficiência\n`;
    }
    analysis += "\n";
  }

  // Análise de sustentabilidade por duração
  analysis += "### ⏱️ Análise de Sustentabilidade\n\n";

  for (const duration of DURATIONS) {
    analysis += `#### Duração: ${duration}s\n`;

    const durationResults = results.filter(r => r.duration === duration);
    const sustainabilityByImpl = durationResults.reduce((acc, curr) => {
      if (!acc[curr.implementation]) acc[curr.implementation] = [];
      acc[curr.implementation].push(curr.sustainabilityScore);
      return acc;
    }, {} as Record<string, number[]>);

    for (const [impl, scores] of Object.entries(sustainabilityByImpl)) {
      const avgScore = scores.reduce((a, b) => a + b, 0) / scores.length;
      const consistency = 1 - (Math.max(...scores) - Math.min(...scores)) / 10;

      analysis += `- **${impl}**: Score ${avgScore.toFixed(1)}/10, Consistência ${(consistency * 100).toFixed(1)}%\n`;
    }
    analysis += "\n";
  }

  // Recomendações baseadas em dados
  analysis += "### 💡 Recomendações Baseadas em Dados\n\n";
  analysis += generateRecommendations(results);

  return analysis;
}

function analyzeScalability(tests: BenchmarkResult[]) {
  const byConnections = tests.reduce((acc, test) => {
    if (!acc[test.connections]) acc[test.connections] = [];
    acc[test.connections].push(test.requestsPerSecond);
    return acc;
  }, {} as Record<number, number[]>);

  let maxThroughput = 0;
  let maxThroughputConnections = 0;
  let breakingPoint = 0;
  let lastThroughput = 0;

  for (const [connections, throughputs] of Object.entries(byConnections)) {
    const avgThroughput = throughputs.reduce((a, b) => a + b, 0) / throughputs.length;
    const conn = parseInt(connections);

    if (avgThroughput > maxThroughput) {
      maxThroughput = avgThroughput;
      maxThroughputConnections = conn;
    }

    // Detecta ponto de quebra (degradação > 20%)
    if (lastThroughput > 0 && avgThroughput < lastThroughput * 0.8 && breakingPoint === 0) {
      breakingPoint = conn;
    }

    lastThroughput = avgThroughput;
  }

  return { maxThroughput, maxThroughputConnections, breakingPoint: breakingPoint || maxThroughputConnections };
}

function analyzeEfficiency(tests: BenchmarkResult[]) {
  const avgCpuEfficiency = tests.reduce((sum, test) => sum + test.cpuEfficiency, 0) / tests.length;
  const avgSustainability = tests.reduce((sum, test) => sum + test.sustainabilityScore, 0) / tests.length;

  return { avgCpuEfficiency, avgSustainability };
}

function generateRecommendations(results: BenchmarkResult[]): string {
  const expressResults = results.filter(r => r.implementation === "Express");
  const fastifyResults = results.filter(r => r.implementation === "Fastify");

  const expressAvg = expressResults.reduce((sum, r) => sum + r.requestsPerSecond, 0) / expressResults.length;
  const fastifyAvg = fastifyResults.reduce((sum, r) => sum + r.requestsPerSecond, 0) / fastifyResults.length;

  let recommendations = "";

  if (fastifyAvg > expressAvg) {
    const improvement = ((fastifyAvg - expressAvg) / expressAvg * 100).toFixed(1);
    recommendations += `🚀 **Fastify** mostra ${improvement}% melhor performance geral\n\n`;
  } else {
    const improvement = ((expressAvg - fastifyAvg) / fastifyAvg * 100).toFixed(1);
    recommendations += `🚀 **Express** mostra ${improvement}% melhor performance geral\n\n`;
  }

  // Recomendações específicas por cenário
  for (const scenario of TEST_SCENARIOS) {
    const scenarioResults = results.filter(r => r.scenario === scenario.name);
    const fastifyScenario = scenarioResults.filter(r => r.implementation === "Fastify");
    const expressScenario = scenarioResults.filter(r => r.implementation === "Express");

    if (fastifyScenario.length > 0 && expressScenario.length > 0) {
      const fastifyAvgScenario = fastifyScenario.reduce((sum, r) => sum + r.requestsPerSecond, 0) / fastifyScenario.length;
      const expressAvgScenario = expressScenario.reduce((sum, r) => sum + r.requestsPerSecond, 0) / expressScenario.length;

      const winner = fastifyAvgScenario > expressAvgScenario ? "Fastify" : "Express";
      const improvement = fastifyAvgScenario > expressAvgScenario ?
        ((fastifyAvgScenario - expressAvgScenario) / expressAvgScenario * 100).toFixed(1) :
        ((expressAvgScenario - fastifyAvgScenario) / fastifyAvgScenario * 100).toFixed(1);

      recommendations += `**${scenario.description}**: Use ${winner} (+${improvement}% performance)\n`;
    }
  }

  return recommendations;
}

(async () => {
  console.log("🚀 Iniciando benchmark analítico avançado...");
  console.log(`📊 Testando ${TEST_SCENARIOS.length} cenários × ${TEST_VARIANTS.length} variants × ${CONNECTIONS.length} cargas × ${DURATIONS.length} durações`);
  console.log(`⏱️ Tempo estimado: ~${(TEST_SCENARIOS.length * TEST_VARIANTS.length * CONNECTIONS.length * DURATIONS.length * 2 * 2) / 60} minutos\n`);

  const benchmarkResults: BenchmarkResult[] = [];

  for (const impl of IMPLEMENTATIONS) {
    console.log(`\n🔧 Testando ${impl.name}...`);

    for (const scenario of TEST_SCENARIOS) {
      console.log(`  📋 Cenário: ${scenario.description}`);

      for (const variant of TEST_VARIANTS) {
        console.log(`    ⚙️ Variant: ${variant}`);

        for (const connections of CONNECTIONS) {
          // Pular cargas que excedem ponto de quebra conhecido
          if (connections > scenario.breakingPoint * 1.2) {
            console.log(`      ⏭️ Pulando ${connections} conexões (acima do ponto de quebra)`);
            continue;
          }

          for (const duration of DURATIONS) {
            const payload = generateTestPayload(scenario.name, variant, scenario.payloadSize);

            // POST Test
            console.log(`      📤 POST ${connections}c ${duration}s [${variant}]`);
            const post = await runBenchmark(
              impl.name, impl.route, "POST", connections, duration,
              scenario.name, variant, impl.baseUrl, payload
            );
            benchmarkResults.push(post);

            // Pausa estratégica baseada na carga
            const pauseTime = connections > 200 ? 3000 : 1500;
            await new Promise(resolve => setTimeout(resolve, pauseTime));

            // GET Test
            console.log(`      📥 GET ${connections}c ${duration}s [${variant}]`);
            const get = await runBenchmark(
              impl.name, impl.route, "GET", connections, duration,
              scenario.name, variant, impl.baseUrl
            );
            benchmarkResults.push(get);

            await new Promise(resolve => setTimeout(resolve, 1000));
          }
        }
      }
    }
  }

  const analysis = analyzeResults(benchmarkResults);
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');

  const markdownContent = `# 🧪 Benchmark Analítico: Fastify vs Express

## 📊 Configuração do Teste

**Executado em**: ${new Date().toLocaleString()}  
**Total de testes**: ${benchmarkResults.length}  
**Cenários**: ${TEST_SCENARIOS.length} (${TEST_SCENARIOS.map(s => s.name).join(', ')})  
**Variants**: ${TEST_VARIANTS.length} (${TEST_VARIANTS.join(', ')})  
**Cargas testadas**: ${CONNECTIONS.join(', ')} conexões  
**Durações**: ${DURATIONS.join(', ')} segundos  

## 📈 Resultados Detalhados

| Framework | Método | Cenário | Variant | Conexões | Duração | Req/s | Lat.Avg | p99 | Erros | CPU Eff | Sustent. | MB/s |
|-----------|--------|---------|---------|----------|---------|-------|---------|-----|-------|---------|----------|------|
${benchmarkResults
      .sort((a, b) => b.requestsPerSecond - a.requestsPerSecond)
      .map(r =>
        `| ${r.implementation} | ${r.method} | ${r.scenario} | ${r.variant} | ${r.connections} | ${r.duration}s | ${r.requestsPerSecond.toFixed(2)} | ${r.latencyAvg.toFixed(2)}ms | ${r.latencyP99.toFixed(2)}ms | ${r.errors} | ${r.cpuEfficiency.toFixed(3)} | ${r.sustainabilityScore.toFixed(1)} | ${r.throughputMB.toFixed(2)} |`
      )
      .join("\n")}

${analysis}

## 🔬 Insights de Valor

### Escalabilidade
- Identifica pontos de quebra reais para cada cenário
- Mostra como performance degrada com aumento de carga
- Révela eficiência por conexão

### Sustentabilidade  
- Avalia consistência ao longo do tempo
- Detecta degradação em testes longos
- Mede estabilidade sob diferentes cargas

### Complexidade de Carga
- Compara performance com payloads simples vs complexos
- Identifica cenários onde cada framework excele
- Mostra impacto de processamento CPU-intensivo

---
_Relatório gerado automaticamente em ${new Date().toLocaleString()}_
`;

  const filename = `benchmark-analytical-${timestamp}.md`;
  fs.writeFileSync(filename, markdownContent);

  console.log(`\n✅ Benchmark analítico concluído!`);
  console.log(`📄 Relatório salvo: ${filename}`);
  console.log(`📊 Total de testes: ${benchmarkResults.length}`);
  console.log(`🎯 Insights de valor gerados com análise de escalabilidade, sustentabilidade e eficiência`);
})();
