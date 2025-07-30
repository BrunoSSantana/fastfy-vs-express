# 🧪 Benchmark Analítico: Fastify vs Express

## 📊 Configuração do Teste

**Executado em**: 29/07/2025, 23:02:37  
**Total de testes**: 72  
**Cenários**: 1 (user_crud)  
**Variants**: 3 (basic, complex, heavy)  
**Cargas testadas**: 10, 100, 250, 500 conexões  
**Durações**: 20, 60 segundos  

## 📈 Resultados Detalhados

| Framework | Método | Cenário | Variant | Conexões | Duração | Req/s | Lat.Avg | p99 | Erros | CPU Eff | Sustent. | MB/s |
|-----------|--------|---------|---------|----------|---------|-------|---------|-----|-------|---------|----------|------|
| Express | POST | user_crud | basic | 10 | 60s | 196.08 | 50.40ms | 91.00ms | 0 | 19.608 | 8.5 | 3.26 |
| Express | POST | user_crud | basic | 10 | 20s | 194.95 | 50.79ms | 86.00ms | 0 | 19.495 | 10.0 | 1.20 |
| Express | POST | user_crud | heavy | 100 | 20s | 193.00 | 509.42ms | 959.00ms | 0 | 1.930 | 10.0 | 223.26 |
| Express | POST | user_crud | heavy | 10 | 60s | 192.31 | 51.42ms | 91.00ms | 0 | 19.231 | 8.7 | 583.63 |
| Express | POST | user_crud | basic | 100 | 20s | 187.10 | 485.42ms | 4954.00ms | 16 | 1.871 | 10.0 | 1.18 |
| Fastify | POST | user_crud | basic | 10 | 20s | 186.60 | 53.01ms | 90.00ms | 0 | 18.660 | 10.0 | 1.20 |
| Fastify | POST | user_crud | complex | 100 | 20s | 179.00 | 493.19ms | 5816.00ms | 21 | 1.790 | 10.0 | 1.52 |
| Fastify | POST | user_crud | basic | 100 | 20s | 176.60 | 495.48ms | 5862.00ms | 21 | 1.766 | 10.0 | 1.19 |
| Fastify | POST | user_crud | basic | 10 | 60s | 50.64 | 191.13ms | 2993.00ms | 0 | 5.064 | 10.0 | 0.94 |
| Express | POST | user_crud | heavy | 10 | 20s | 50.35 | 98.60ms | 526.00ms | 10 | 5.035 | 10.0 | 58.14 |
| Express | GET | user_crud | basic | 10 | 20s | 5.50 | 1701.56ms | 1848.00ms | 0 | 0.550 | 10.0 | 0.00 |
| Express | POST | user_crud | basic | 100 | 60s | 4.54 | 1171.06ms | 9832.00ms | 568 | 0.045 | 10.0 | 0.09 |
| Express | GET | user_crud | basic | 10 | 60s | 3.84 | 2583.60ms | 2739.00ms | 0 | 0.384 | 10.0 | 0.00 |
| Express | GET | user_crud | heavy | 10 | 20s | 2.50 | 3388.44ms | 3523.00ms | 0 | 0.250 | 10.0 | 0.00 |
| Express | GET | user_crud | heavy | 10 | 60s | 2.17 | 4283.11ms | 4437.00ms | 0 | 0.217 | 10.0 | 0.00 |
| Fastify | GET | user_crud | complex | 10 | 60s | 0.72 | 4353.45ms | 6936.00ms | 38 | 0.072 | 10.0 | 0.00 |
| Fastify | GET | user_crud | basic | 10 | 60s | 0.17 | 7801.60ms | 8079.00ms | 50 | 0.017 | 9.9 | 0.00 |
| Express | GET | user_crud | basic | 100 | 20s | 0.00 | 0.00ms | 0.00ms | 200 | 0.000 | 10.0 | 0.00 |
| Express | GET | user_crud | basic | 100 | 60s | 0.00 | 0.00ms | 0.00ms | 600 | 0.000 | 10.0 | 0.00 |
| Express | POST | user_crud | basic | 250 | 20s | 0.00 | 0.00ms | 0.00ms | 480 | 0.000 | 9.9 | 0.00 |
| Express | GET | user_crud | basic | 250 | 20s | 0.00 | 0.00ms | 0.00ms | 500 | 0.000 | 10.0 | 0.00 |
| Express | POST | user_crud | basic | 250 | 60s | 0.00 | 0.00ms | 0.00ms | 1500 | 0.000 | 10.0 | 0.00 |
| Express | GET | user_crud | basic | 250 | 60s | 0.00 | 0.00ms | 0.00ms | 1500 | 0.000 | 10.0 | 0.00 |
| Express | POST | user_crud | complex | 10 | 20s | 0.00 | 0.00ms | 0.00ms | 20 | 0.000 | 10.0 | 0.00 |
| Express | GET | user_crud | complex | 10 | 20s | 0.00 | 0.00ms | 0.00ms | 20 | 0.000 | 10.0 | 0.00 |
| Express | POST | user_crud | complex | 10 | 60s | 0.00 | 0.00ms | 0.00ms | 60 | 0.000 | 10.0 | 0.00 |
| Express | GET | user_crud | complex | 10 | 60s | 0.00 | 0.00ms | 0.00ms | 60 | 0.000 | 10.0 | 0.00 |
| Express | POST | user_crud | complex | 100 | 20s | 0.00 | 0.00ms | 0.00ms | 200 | 0.000 | 9.9 | 0.00 |
| Express | GET | user_crud | complex | 100 | 20s | 0.00 | 0.00ms | 0.00ms | 200 | 0.000 | 10.0 | 0.00 |
| Express | POST | user_crud | complex | 100 | 60s | 0.00 | 0.00ms | 0.00ms | 600 | 0.000 | 10.0 | 0.00 |
| Express | GET | user_crud | complex | 100 | 60s | 0.00 | 0.00ms | 0.00ms | 600 | 0.000 | 10.0 | 0.00 |
| Express | POST | user_crud | complex | 250 | 20s | 0.00 | 0.00ms | 0.00ms | 500 | 0.000 | 10.0 | 0.00 |
| Express | GET | user_crud | complex | 250 | 20s | 0.00 | 0.00ms | 0.00ms | 500 | 0.000 | 10.0 | 0.00 |
| Express | POST | user_crud | complex | 250 | 60s | 0.00 | 0.00ms | 0.00ms | 1500 | 0.000 | 10.0 | 0.00 |
| Express | GET | user_crud | complex | 250 | 60s | 0.00 | 0.00ms | 0.00ms | 1500 | 0.000 | 10.0 | 0.00 |
| Express | GET | user_crud | heavy | 100 | 20s | 0.00 | 0.00ms | 0.00ms | 200 | 0.000 | 10.0 | 0.00 |
| Express | POST | user_crud | heavy | 100 | 60s | 0.00 | 0.00ms | 0.00ms | 600 | 0.000 | 10.0 | 0.00 |
| Express | GET | user_crud | heavy | 100 | 60s | 0.00 | 0.00ms | 0.00ms | 600 | 0.000 | 10.0 | 0.00 |
| Express | POST | user_crud | heavy | 250 | 20s | 0.00 | 0.00ms | 0.00ms | 500 | 0.000 | 9.9 | 0.00 |
| Express | GET | user_crud | heavy | 250 | 20s | 0.00 | 0.00ms | 0.00ms | 500 | 0.000 | 9.9 | 0.00 |
| Express | POST | user_crud | heavy | 250 | 60s | 0.00 | 0.00ms | 0.00ms | 1500 | 0.000 | 10.0 | 0.00 |
| Express | GET | user_crud | heavy | 250 | 60s | 0.00 | 0.00ms | 0.00ms | 1500 | 0.000 | 10.0 | 0.00 |
| Fastify | GET | user_crud | basic | 10 | 20s | 0.00 | 0.00ms | 0.00ms | 20 | 0.000 | 10.0 | 0.00 |
| Fastify | GET | user_crud | basic | 100 | 20s | 0.00 | 0.00ms | 0.00ms | 200 | 0.000 | 10.0 | 0.00 |
| Fastify | POST | user_crud | basic | 100 | 60s | 0.00 | 0.00ms | 0.00ms | 600 | 0.000 | 10.0 | 0.00 |
| Fastify | GET | user_crud | basic | 100 | 60s | 0.00 | 0.00ms | 0.00ms | 600 | 0.000 | 10.0 | 0.00 |
| Fastify | POST | user_crud | basic | 250 | 20s | 0.00 | 0.00ms | 0.00ms | 500 | 0.000 | 9.9 | 0.00 |
| Fastify | GET | user_crud | basic | 250 | 20s | 0.00 | 0.00ms | 0.00ms | 500 | 0.000 | 10.0 | 0.00 |
| Fastify | POST | user_crud | basic | 250 | 60s | 0.00 | 0.00ms | 0.00ms | 1500 | 0.000 | 10.0 | 0.00 |
| Fastify | GET | user_crud | basic | 250 | 60s | 0.00 | 0.00ms | 0.00ms | 1500 | 0.000 | 10.0 | 0.00 |
| Fastify | POST | user_crud | complex | 10 | 20s | 0.00 | 0.00ms | 0.00ms | 20 | 0.000 | 10.0 | 0.00 |
| Fastify | GET | user_crud | complex | 10 | 20s | 0.00 | 0.00ms | 0.00ms | 20 | 0.000 | 10.0 | 0.00 |
| Fastify | POST | user_crud | complex | 10 | 60s | 0.00 | 0.00ms | 0.00ms | 60 | 0.000 | 10.0 | 0.00 |
| Fastify | GET | user_crud | complex | 100 | 20s | 0.00 | 0.00ms | 0.00ms | 200 | 0.000 | 10.0 | 0.00 |
| Fastify | POST | user_crud | complex | 100 | 60s | 0.00 | 0.00ms | 0.00ms | 600 | 0.000 | 10.0 | 0.00 |
| Fastify | GET | user_crud | complex | 100 | 60s | 0.00 | 0.00ms | 0.00ms | 600 | 0.000 | 10.0 | 0.00 |
| Fastify | POST | user_crud | complex | 250 | 20s | 0.00 | 0.00ms | 0.00ms | 419 | 0.000 | 9.9 | 0.00 |
| Fastify | GET | user_crud | complex | 250 | 20s | 0.00 | 0.00ms | 0.00ms | 500 | 0.000 | 9.9 | 0.00 |
| Fastify | POST | user_crud | complex | 250 | 60s | 0.00 | 0.00ms | 0.00ms | 1500 | 0.000 | 10.0 | 0.00 |
| Fastify | GET | user_crud | complex | 250 | 60s | 0.00 | 0.00ms | 0.00ms | 1500 | 0.000 | 10.0 | 0.00 |
| Fastify | POST | user_crud | heavy | 10 | 20s | 0.00 | 0.00ms | 0.00ms | 20 | 0.000 | 10.0 | 0.00 |
| Fastify | GET | user_crud | heavy | 10 | 20s | 0.00 | 0.00ms | 0.00ms | 20 | 0.000 | 10.0 | 0.00 |
| Fastify | POST | user_crud | heavy | 10 | 60s | 0.00 | 0.00ms | 0.00ms | 60 | 0.000 | 10.0 | 0.00 |
| Fastify | GET | user_crud | heavy | 10 | 60s | 0.00 | 0.00ms | 0.00ms | 60 | 0.000 | 10.0 | 0.00 |
| Fastify | POST | user_crud | heavy | 100 | 20s | 0.00 | 0.00ms | 0.00ms | 200 | 0.000 | 10.0 | 0.00 |
| Fastify | GET | user_crud | heavy | 100 | 20s | 0.00 | 0.00ms | 0.00ms | 200 | 0.000 | 10.0 | 0.00 |
| Fastify | POST | user_crud | heavy | 100 | 60s | 0.00 | 0.00ms | 0.00ms | 600 | 0.000 | 10.0 | 0.00 |
| Fastify | GET | user_crud | heavy | 100 | 60s | 0.00 | 0.00ms | 0.00ms | 600 | 0.000 | 10.0 | 0.00 |
| Fastify | POST | user_crud | heavy | 250 | 20s | 0.00 | 0.00ms | 0.00ms | 500 | 0.000 | 10.0 | 0.00 |
| Fastify | GET | user_crud | heavy | 250 | 20s | 0.00 | 0.00ms | 0.00ms | 176750 | 0.000 | 10.0 | 0.00 |
| Fastify | POST | user_crud | heavy | 250 | 60s | 0.00 | 0.00ms | 0.00ms | 250000 | 0.000 | 2.2 | 0.00 |
| Fastify | GET | user_crud | heavy | 250 | 60s | 0.00 | 0.00ms | 0.00ms | 250000 | 0.000 | 2.2 | 0.00 |

## 🏁 Análise Detalhada de Performance

### 📈 Análise de Escalabilidade

#### CRUD de usuários
**Express**:
- Throughput máximo: 53.97 req/s (10 conexões)
- Ponto de quebra: 100 conexões
- Eficiência CPU: 1.906 req/s por conexão
- Sustentabilidade: 9.9/10

**Fastify**:
- Throughput máximo: 29.63 req/s (100 conexões)
- Ponto de quebra: 250 conexões
- Eficiência CPU: 0.760 req/s por conexão
- Sustentabilidade: 9.5/10

### ⚙️ Análise por Complexidade

#### Variant: BASIC
- **Express**: 49.33 req/s, 503.57ms, 3.496 eficiência
- **Fastify**: 34.50 req/s, 711.77ms, 2.126 eficiência

#### Variant: COMPLEX
- **Express**: 0.00 req/s, 0.00ms, 0.000 eficiência
- **Fastify**: 14.98 req/s, 403.89ms, 0.155 eficiência

#### Variant: HEAVY
- **Express**: 36.69 req/s, 694.25ms, 2.222 eficiência
- **Fastify**: 0.00 req/s, 0.00ms, 0.000 eficiência

### ⏱️ Análise de Sustentabilidade

#### Duração: 20s
- **Express**: Score 10.0/10, Consistência 99.1%
- **Fastify**: Score 10.0/10, Consistência 99.4%

#### Duração: 60s
- **Express**: Score 9.8/10, Consistência 85.1%
- **Fastify**: Score 9.1/10, Consistência 21.8%

### 💡 Recomendações Baseadas em Dados

🚀 **Express** mostra 73.9% melhor performance geral

**CRUD de usuários**: Use Express (+73.9% performance)


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
_Relatório gerado automaticamente em 29/07/2025, 23:02:37_
