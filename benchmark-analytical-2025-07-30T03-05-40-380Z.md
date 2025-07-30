# 🧪 Benchmark Analítico: Fastify vs Express

## 📊 Configuração do Teste

**Executado em**: 30/07/2025, 00:05:40  
**Total de testes**: 24  
**Cenários**: 1 (user_crud)  
**Variants**: 1 (basic)  
**Cargas testadas**: 10, 100, 250 conexões  
**Durações**: 5, 30 segundos  

## 📈 Resultados Detalhados

| Framework | Método | Cenário | Variant | Conexões | Duração | Req/s | Lat.Avg | p99 | Erros | CPU Eff | Sustent. | MB/s |
|-----------|--------|---------|---------|----------|---------|-------|---------|-----|-------|---------|----------|------|
| Express | POST | user_crud | basic | 100 | 30s | 196.50 | 508.17ms | 532.00ms | 0 | 1.965 | 10.0 | 1.67 |
| Express | POST | user_crud | basic | 10 | 30s | 195.74 | 50.58ms | 91.00ms | 0 | 19.574 | 10.0 | 1.97 |
| Express | POST | user_crud | basic | 10 | 5s | 192.80 | 51.22ms | 76.00ms | 0 | 19.280 | 10.0 | 0.28 |
| Express | POST | user_crud | basic | 100 | 5s | 180.00 | 509.24ms | 522.00ms | 0 | 1.800 | 10.0 | 0.26 |
| Fastify | POST | user_crud | basic | 100 | 5s | 179.60 | 315.65ms | 3748.00ms | 0 | 1.796 | 10.0 | 0.27 |
| Express | GET | user_crud | basic | 10 | 5s | 126.00 | 78.69ms | 98.00ms | 0 | 12.600 | 10.0 | 0.00 |
| Fastify | POST | user_crud | basic | 100 | 30s | 124.74 | 460.80ms | 7805.00ms | 126 | 1.247 | 10.0 | 1.10 |
| Fastify | POST | user_crud | basic | 10 | 30s | 102.04 | 97.46ms | 1448.00ms | 0 | 10.204 | 10.0 | 1.02 |
| Fastify | POST | user_crud | basic | 10 | 5s | 51.00 | 170.27ms | 2273.00ms | 0 | 5.100 | 9.9 | 0.08 |
| Express | POST | user_crud | basic | 250 | 30s | 34.17 | 602.06ms | 8397.00ms | 688 | 0.137 | 10.0 | 0.31 |
| Express | GET | user_crud | basic | 10 | 30s | 18.00 | 554.17ms | 612.00ms | 0 | 1.800 | 10.0 | 0.00 |
| Fastify | GET | user_crud | basic | 10 | 30s | 5.67 | 1729.09ms | 2593.00ms | 0 | 0.567 | 10.0 | 0.00 |
| Fastify | GET | user_crud | basic | 10 | 5s | 2.00 | 3080.90ms | 3620.00ms | 0 | 0.200 | 10.0 | 0.00 |
| Fastify | GET | user_crud | basic | 100 | 5s | 1.20 | 2453.50ms | 3663.00ms | 0 | 0.012 | 9.9 | 0.00 |
| Fastify | GET | user_crud | basic | 100 | 30s | 0.60 | 7642.62ms | 9953.00ms | 282 | 0.006 | 10.0 | 0.00 |
| Fastify | GET | user_crud | basic | 250 | 30s | 0.17 | 4894.00ms | 6897.00ms | 745 | 0.001 | 10.0 | 0.00 |
| Express | GET | user_crud | basic | 100 | 5s | 0.00 | 0.00ms | 0.00ms | 0 | 0.000 | 9.9 | 0.00 |
| Express | GET | user_crud | basic | 100 | 30s | 0.00 | 0.00ms | 0.00ms | 300 | 0.000 | 10.0 | 0.00 |
| Express | POST | user_crud | basic | 250 | 5s | 0.00 | 0.00ms | 0.00ms | 0 | 0.000 | 9.9 | 0.00 |
| Express | GET | user_crud | basic | 250 | 5s | 0.00 | 0.00ms | 0.00ms | 0 | 0.000 | 9.9 | 0.00 |
| Express | GET | user_crud | basic | 250 | 30s | 0.00 | 0.00ms | 0.00ms | 739 | 0.000 | 10.0 | 0.00 |
| Fastify | POST | user_crud | basic | 250 | 5s | 0.00 | 0.00ms | 0.00ms | 0 | 0.000 | 9.9 | 0.00 |
| Fastify | GET | user_crud | basic | 250 | 5s | 0.00 | 0.00ms | 0.00ms | 0 | 0.000 | 10.0 | 0.00 |
| Fastify | POST | user_crud | basic | 250 | 30s | 0.00 | 0.00ms | 0.00ms | 750 | 0.000 | 10.0 | 0.00 |

## 🏁 Análise Detalhada de Performance

### 📈 Análise de Escalabilidade

#### CRUD de usuários
**Express**:
- Throughput máximo: 133.13 req/s (10 conexões)
- Ponto de quebra: 100 conexões
- Eficiência CPU: 4.763 req/s por conexão
- Sustentabilidade: 10.0/10

**Fastify**:
- Throughput máximo: 76.53 req/s (100 conexões)
- Ponto de quebra: 250 conexões
- Eficiência CPU: 1.594 req/s por conexão
- Sustentabilidade: 10.0/10

### ⚙️ Análise por Complexidade

#### Variant: BASIC
- **Express**: 78.60 req/s, 196.18ms, 4.763 eficiência
- **Fastify**: 38.92 req/s, 1737.02ms, 1.594 eficiência

### ⏱️ Análise de Sustentabilidade

#### Duração: 5s
- **Express**: Score 9.9/10, Consistência 98.7%
- **Fastify**: Score 9.9/10, Consistência 99.2%

#### Duração: 30s
- **Express**: Score 10.0/10, Consistência 99.7%
- **Fastify**: Score 10.0/10, Consistência 99.7%

### 💡 Recomendações Baseadas em Dados

🚀 **Express** mostra 102.0% melhor performance geral

**CRUD de usuários**: Use Express (+102.0% performance)


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
_Relatório gerado automaticamente em 30/07/2025, 00:05:40_
