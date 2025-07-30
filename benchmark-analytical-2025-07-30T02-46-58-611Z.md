# 🧪 Benchmark Analítico: Fastify vs Express

## 📊 Configuração do Teste

**Executado em**: 29/07/2025, 23:46:58  
**Total de testes**: 24  
**Cenários**: 1 (user_crud)  
**Variants**: 1 (basic)  
**Cargas testadas**: 10, 100, 250 conexões  
**Durações**: 5, 30 segundos  

## 📈 Resultados Detalhados

| Framework | Método | Cenário | Variant | Conexões | Duração | Req/s | Lat.Avg | p99 | Erros | CPU Eff | Sustent. | MB/s |
|-----------|--------|---------|---------|----------|---------|-------|---------|-----|-------|---------|----------|------|
| Express | POST | user_crud | basic | 10 | 30s | 196.00 | 50.47ms | 91.00ms | 0 | 19.600 | 10.0 | 1.99 |
| Express | POST | user_crud | basic | 100 | 30s | 193.27 | 508.76ms | 530.00ms | 0 | 1.933 | 10.0 | 1.64 |
| Express | POST | user_crud | basic | 10 | 5s | 192.00 | 51.34ms | 73.00ms | 0 | 19.200 | 10.0 | 0.28 |
| Express | POST | user_crud | basic | 100 | 5s | 191.40 | 496.96ms | 2985.00ms | 0 | 1.914 | 10.0 | 0.29 |
| Fastify | POST | user_crud | basic | 100 | 5s | 173.80 | 319.54ms | 3742.00ms | 0 | 1.738 | 10.0 | 0.27 |
| Express | GET | user_crud | basic | 10 | 5s | 134.00 | 73.42ms | 104.00ms | 0 | 13.400 | 10.0 | 0.00 |
| Fastify | POST | user_crud | basic | 100 | 30s | 128.90 | 451.31ms | 8400.00ms | 123 | 1.289 | 10.0 | 1.33 |
| Fastify | POST | user_crud | basic | 10 | 5s | 44.60 | 156.83ms | 1349.00ms | 0 | 4.460 | 10.0 | 0.07 |
| Fastify | POST | user_crud | basic | 10 | 30s | 40.24 | 243.45ms | 3154.00ms | 0 | 4.024 | 10.0 | 0.35 |
| Express | POST | user_crud | basic | 250 | 30s | 33.14 | 626.01ms | 8750.00ms | 687 | 0.133 | 10.0 | 0.32 |
| Express | GET | user_crud | basic | 10 | 30s | 17.67 | 556.07ms | 604.00ms | 0 | 1.767 | 10.0 | 0.00 |
| Fastify | GET | user_crud | basic | 10 | 30s | 6.27 | 1556.72ms | 2549.00ms | 0 | 0.627 | 10.0 | 0.00 |
| Fastify | GET | user_crud | basic | 10 | 5s | 2.00 | 3557.30ms | 3853.00ms | 0 | 0.200 | 10.0 | 0.00 |
| Fastify | GET | user_crud | basic | 100 | 5s | 0.40 | 2343.50ms | 3046.00ms | 0 | 0.004 | 9.9 | 0.00 |
| Fastify | GET | user_crud | basic | 100 | 30s | 0.30 | 4767.89ms | 8208.00ms | 291 | 0.003 | 10.0 | 0.00 |
| Express | GET | user_crud | basic | 100 | 30s | 0.00 | 0.00ms | 0.00ms | 300 | 0.000 | 10.0 | 0.00 |
| Express | POST | user_crud | basic | 250 | 5s | 0.00 | 0.00ms | 0.00ms | 0 | 0.000 | 9.8 | 0.00 |
| Express | GET | user_crud | basic | 250 | 5s | 0.00 | 0.00ms | 0.00ms | 0 | 0.000 | 9.9 | 0.00 |
| Express | GET | user_crud | basic | 250 | 30s | 0.00 | 0.00ms | 0.00ms | 750 | 0.000 | 10.0 | 0.00 |
| Fastify | POST | user_crud | basic | 250 | 5s | 0.00 | 0.00ms | 0.00ms | 0 | 0.000 | 10.0 | 0.00 |
| Fastify | GET | user_crud | basic | 250 | 5s | 0.00 | 0.00ms | 0.00ms | 0 | 0.000 | 9.9 | 0.00 |
| Fastify | POST | user_crud | basic | 250 | 30s | 0.00 | 0.00ms | 0.00ms | 750 | 0.000 | 10.0 | 0.00 |
| Fastify | GET | user_crud | basic | 250 | 30s | 0.00 | 0.00ms | 0.00ms | 750 | 0.000 | 10.0 | 0.00 |

## 🏁 Análise Detalhada de Performance

### 📈 Análise de Escalabilidade

#### CRUD de usuários
**Express**:
- Throughput máximo: 134.92 req/s (10 conexões)
- Ponto de quebra: 100 conexões
- Eficiência CPU: 4.829 req/s por conexão
- Sustentabilidade: 10.0/10

**Fastify**:
- Throughput máximo: 75.85 req/s (100 conexões)
- Ponto de quebra: 250 conexões
- Eficiência CPU: 1.029 req/s por conexão
- Sustentabilidade: 10.0/10

### ⚙️ Análise por Complexidade

#### Variant: BASIC
- **Express**: 79.79 req/s, 196.92ms, 4.829 eficiência
- **Fastify**: 33.04 req/s, 1116.38ms, 1.029 eficiência

### ⏱️ Análise de Sustentabilidade

#### Duração: 5s
- **Express**: Score 9.9/10, Consistência 98.0%
- **Fastify**: Score 9.9/10, Consistência 98.9%

#### Duração: 30s
- **Express**: Score 10.0/10, Consistência 99.8%
- **Fastify**: Score 10.0/10, Consistência 99.7%

### 💡 Recomendações Baseadas em Dados

🚀 **Express** mostra 141.5% melhor performance geral

**CRUD de usuários**: Use Express (+141.5% performance)


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
_Relatório gerado automaticamente em 29/07/2025, 23:46:58_
