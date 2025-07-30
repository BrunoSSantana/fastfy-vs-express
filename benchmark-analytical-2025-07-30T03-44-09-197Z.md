# 🧪 Benchmark Analítico: Fastify vs Express

## 📊 Configuração do Teste

**Executado em**: 30/07/2025, 00:44:09  
**Total de testes**: 104  
**Cenários**: 5 (user_crud, file_upload, analytics_processing, product_catalog, real_time_data)  
**Variants**: 1 (basic)  
**Cargas testadas**: 10, 100, 250 conexões  
**Durações**: 5, 30 segundos  

## 📈 Resultados Detalhados

| Framework | Método | Cenário | Variant | Conexões | Duração | Req/s | Lat.Avg | p99 | Erros | CPU Eff | Sustent. | MB/s |
|-----------|--------|---------|---------|----------|---------|-------|---------|-----|-------|---------|----------|------|
| Fastify | GET | real_time_data | basic | 100 | 5s | 8391.21 | 11.35ms | 21.00ms | 0 | 83.912 | 10.0 | 0.00 |
| Fastify | GET | real_time_data | basic | 100 | 30s | 8334.17 | 9.74ms | 21.00ms | 0 | 83.342 | 4.0 | 0.00 |
| Fastify | GET | real_time_data | basic | 250 | 30s | 8333.67 | 27.64ms | 41.00ms | 0 | 33.335 | 10.0 | 0.00 |
| Fastify | GET | real_time_data | basic | 250 | 5s | 8215.21 | 29.90ms | 46.00ms | 0 | 32.861 | 10.0 | 0.00 |
| Express | GET | product_catalog | basic | 100 | 5s | 6549.20 | 14.75ms | 28.00ms | 0 | 65.492 | 10.0 | 0.00 |
| Express | GET | product_catalog | basic | 250 | 30s | 6412.80 | 37.22ms | 53.00ms | 0 | 25.651 | 10.0 | 0.00 |
| Express | GET | product_catalog | basic | 250 | 5s | 6334.00 | 38.81ms | 54.00ms | 0 | 25.336 | 10.0 | 0.00 |
| Express | GET | real_time_data | basic | 100 | 5s | 6317.20 | 15.30ms | 27.00ms | 0 | 63.172 | 10.0 | 0.00 |
| Express | GET | real_time_data | basic | 100 | 30s | 6251.00 | 13.60ms | 26.00ms | 0 | 62.510 | 5.3 | 0.00 |
| Express | GET | product_catalog | basic | 100 | 30s | 6250.38 | 12.80ms | 26.00ms | 0 | 62.504 | 5.3 | 0.00 |
| Express | GET | real_time_data | basic | 250 | 30s | 6235.34 | 38.04ms | 58.00ms | 0 | 24.941 | 10.0 | 0.00 |
| Express | GET | real_time_data | basic | 250 | 5s | 6206.80 | 39.70ms | 60.00ms | 0 | 24.827 | 9.9 | 0.00 |
| Express | POST | product_catalog | basic | 100 | 5s | 5841.20 | 16.60ms | 31.00ms | 0 | 58.412 | 10.0 | 6.99 |
| Express | POST | product_catalog | basic | 250 | 30s | 5759.60 | 41.96ms | 58.00ms | 0 | 23.038 | 10.0 | 41.85 |
| Express | POST | product_catalog | basic | 250 | 5s | 5677.20 | 43.39ms | 56.00ms | 0 | 22.709 | 10.0 | 6.71 |
| Express | POST | product_catalog | basic | 100 | 30s | 5555.84 | 14.53ms | 29.00ms | 0 | 55.558 | 6.0 | 23.65 |
| Express | GET | product_catalog | basic | 10 | 5s | 5001.50 | 1.15ms | 5.00ms | 0 | 500.150 | 4.0 | 0.00 |
| Express | GET | real_time_data | basic | 10 | 5s | 5001.50 | 1.14ms | 5.00ms | 0 | 500.150 | 4.0 | 0.00 |
| Fastify | GET | real_time_data | basic | 10 | 30s | 5001.50 | 0.96ms | 3.00ms | 0 | 500.150 | 0.7 | 0.00 |
| Express | POST | product_catalog | basic | 10 | 30s | 5000.50 | 1.18ms | 5.00ms | 0 | 500.050 | 0.7 | 2.42 |
| Express | GET | product_catalog | basic | 10 | 30s | 5000.50 | 1.11ms | 5.00ms | 0 | 500.050 | 0.7 | 0.00 |
| Express | GET | real_time_data | basic | 10 | 30s | 5000.50 | 1.12ms | 3.00ms | 0 | 500.050 | 0.7 | 0.00 |
| Fastify | GET | real_time_data | basic | 10 | 5s | 4999.00 | 0.97ms | 4.00ms | 0 | 499.900 | 4.0 | 0.00 |
| Fastify | GET | product_catalog | basic | 250 | 30s | 3156.17 | 52.34ms | 43.00ms | 250 | 12.625 | 10.0 | 0.00 |
| Express | GET | file_upload | basic | 100 | 5s | 1916.00 | 51.54ms | 64.00ms | 0 | 19.160 | 10.0 | 0.00 |
| Express | POST | real_time_data | basic | 100 | 30s | 650.00 | 153.00ms | 172.00ms | 0 | 6.500 | 10.0 | 28.08 |
| Express | POST | real_time_data | basic | 250 | 30s | 650.00 | 381.94ms | 412.00ms | 0 | 2.600 | 10.0 | 28.30 |
| Express | POST | real_time_data | basic | 250 | 5s | 648.21 | 373.40ms | 397.00ms | 0 | 2.593 | 10.0 | 4.70 |
| Express | POST | real_time_data | basic | 100 | 5s | 645.80 | 151.96ms | 170.00ms | 0 | 6.458 | 10.0 | 4.67 |
| Fastify | POST | real_time_data | basic | 250 | 30s | 603.90 | 410.61ms | 439.00ms | 0 | 2.416 | 10.0 | 26.26 |
| Fastify | POST | real_time_data | basic | 100 | 30s | 603.34 | 164.75ms | 190.00ms | 0 | 6.033 | 10.0 | 26.13 |
| Express | POST | real_time_data | basic | 10 | 5s | 600.60 | 16.12ms | 21.00ms | 0 | 60.060 | 10.0 | 4.30 |
| Fastify | POST | real_time_data | basic | 250 | 5s | 600.00 | 401.50ms | 451.00ms | 0 | 2.400 | 10.0 | 4.33 |
| Fastify | POST | real_time_data | basic | 100 | 5s | 599.00 | 164.28ms | 186.00ms | 0 | 5.990 | 10.0 | 4.30 |
| Express | POST | real_time_data | basic | 10 | 30s | 588.24 | 16.18ms | 21.00ms | 0 | 58.824 | 5.7 | 14.40 |
| Fastify | POST | real_time_data | basic | 10 | 30s | 555.56 | 17.36ms | 23.00ms | 0 | 55.556 | 6.0 | 14.39 |
| Fastify | POST | real_time_data | basic | 10 | 5s | 543.00 | 17.90ms | 25.00ms | 0 | 54.300 | 10.0 | 3.95 |
| Express | POST | user_crud | basic | 100 | 5s | 350.60 | 259.95ms | 1677.00ms | 0 | 3.506 | 10.0 | 0.57 |
| Express | POST | analytics_processing | basic | 100 | 5s | 331.60 | 276.85ms | 2166.00ms | 0 | 3.316 | 10.0 | 9.56 |
| Express | POST | file_upload | basic | 100 | 30s | 330.80 | 299.46ms | 1832.00ms | 0 | 3.308 | 10.0 | 106.07 |
| Fastify | POST | user_crud | basic | 10 | 5s | 322.40 | 29.44ms | 631.00ms | 0 | 32.240 | 10.0 | 0.47 |
| Express | POST | user_crud | basic | 100 | 30s | 311.17 | 314.37ms | 3613.00ms | 0 | 3.112 | 10.0 | 3.03 |
| Fastify | POST | user_crud | basic | 10 | 30s | 307.67 | 30.17ms | 732.00ms | 0 | 30.767 | 10.0 | 2.87 |
| Express | POST | user_crud | basic | 10 | 30s | 300.90 | 30.86ms | 636.00ms | 0 | 30.090 | 10.0 | 2.75 |
| Express | POST | user_crud | basic | 10 | 5s | 296.20 | 30.67ms | 633.00ms | 0 | 29.620 | 10.0 | 0.45 |
| Fastify | POST | user_crud | basic | 100 | 5s | 294.61 | 299.17ms | 2383.00ms | 0 | 2.946 | 10.0 | 0.50 |
| Express | GET | file_upload | basic | 100 | 30s | 292.70 | 338.92ms | 743.00ms | 0 | 2.927 | 10.0 | 0.00 |
| Express | POST | analytics_processing | basic | 10 | 5s | 270.20 | 32.53ms | 433.00ms | 0 | 27.020 | 10.0 | 7.74 |
| Express | POST | analytics_processing | basic | 10 | 30s | 171.00 | 57.54ms | 639.00ms | 0 | 17.100 | 10.0 | 29.54 |
| Express | POST | analytics_processing | basic | 100 | 30s | 164.97 | 598.81ms | 3668.00ms | 0 | 1.650 | 10.0 | 28.45 |
| Express | GET | user_crud | basic | 10 | 5s | 86.00 | 114.44ms | 150.00ms | 0 | 8.600 | 10.0 | 0.00 |
| Express | GET | analytics_processing | basic | 10 | 5s | 80.00 | 122.76ms | 130.00ms | 0 | 8.000 | 10.0 | 0.00 |
| Express | GET | analytics_processing | basic | 10 | 30s | 26.57 | 373.57ms | 418.00ms | 0 | 2.657 | 10.0 | 0.00 |
| Express | GET | analytics_processing | basic | 100 | 5s | 16.80 | 2565.73ms | 5001.00ms | 0 | 0.168 | 10.0 | 0.00 |
| Express | GET | user_crud | basic | 10 | 30s | 11.67 | 837.30ms | 932.00ms | 0 | 1.167 | 10.0 | 0.00 |
| Express | GET | analytics_processing | basic | 100 | 30s | 10.57 | 6529.69ms | 9213.00ms | 50 | 0.106 | 10.0 | 0.00 |
| Express | POST | product_catalog | basic | 10 | 5s | 3.00 | 2850.74ms | 3816.00ms | 0 | 0.300 | 10.0 | 0.00 |
| Fastify | GET | user_crud | basic | 10 | 5s | 2.00 | 3784.30ms | 4231.00ms | 0 | 0.200 | 10.0 | 0.00 |
| Fastify | GET | user_crud | basic | 10 | 30s | 1.67 | 5244.06ms | 7057.00ms | 0 | 0.167 | 10.0 | 0.00 |
| Fastify | POST | user_crud | basic | 100 | 30s | 0.90 | 8790.23ms | 8793.00ms | 273 | 0.009 | 10.0 | 0.01 |
| Express | GET | user_crud | basic | 100 | 5s | 0.00 | 0.00ms | 0.00ms | 0 | 0.000 | 9.9 | 0.00 |
| Express | GET | user_crud | basic | 100 | 30s | 0.00 | 0.00ms | 0.00ms | 300 | 0.000 | 10.0 | 0.00 |
| Express | POST | user_crud | basic | 250 | 5s | 0.00 | 0.00ms | 0.00ms | 0 | 0.000 | 9.9 | 0.00 |
| Express | GET | user_crud | basic | 250 | 5s | 0.00 | 0.00ms | 0.00ms | 0 | 0.000 | 9.9 | 0.00 |
| Express | POST | user_crud | basic | 250 | 30s | 0.00 | 0.00ms | 0.00ms | 750 | 0.000 | 10.0 | 0.00 |
| Express | GET | user_crud | basic | 250 | 30s | 0.00 | 0.00ms | 0.00ms | 750 | 0.000 | 10.0 | 0.00 |
| Express | POST | file_upload | basic | 10 | 5s | 0.00 | 0.00ms | 0.00ms | 0 | 0.000 | 9.9 | 0.00 |
| Express | GET | file_upload | basic | 10 | 5s | 0.00 | 0.00ms | 0.00ms | 0 | 0.000 | 10.0 | 0.00 |
| Express | POST | file_upload | basic | 10 | 30s | 0.00 | 0.00ms | 0.00ms | 30 | 0.000 | 10.0 | 0.00 |
| Express | GET | file_upload | basic | 10 | 30s | 0.00 | 0.00ms | 0.00ms | 30 | 0.000 | 10.0 | 0.00 |
| Express | POST | file_upload | basic | 100 | 5s | 0.00 | 0.00ms | 0.00ms | 0 | 0.000 | 10.0 | 0.00 |
| Fastify | GET | user_crud | basic | 100 | 5s | 0.00 | 0.00ms | 0.00ms | 0 | 0.000 | 9.9 | 0.00 |
| Fastify | GET | user_crud | basic | 100 | 30s | 0.00 | 0.00ms | 0.00ms | 300 | 0.000 | 10.0 | 0.00 |
| Fastify | POST | user_crud | basic | 250 | 5s | 0.00 | 0.00ms | 0.00ms | 0 | 0.000 | 9.9 | 0.00 |
| Fastify | GET | user_crud | basic | 250 | 5s | 0.00 | 0.00ms | 0.00ms | 0 | 0.000 | 9.9 | 0.00 |
| Fastify | POST | user_crud | basic | 250 | 30s | 0.00 | 0.00ms | 0.00ms | 750 | 0.000 | 10.0 | 0.00 |
| Fastify | GET | user_crud | basic | 250 | 30s | 0.00 | 0.00ms | 0.00ms | 750 | 0.000 | 10.0 | 0.00 |
| Fastify | POST | file_upload | basic | 10 | 5s | 0.00 | 0.00ms | 0.00ms | 0 | 0.000 | 9.9 | 0.00 |
| Fastify | GET | file_upload | basic | 10 | 5s | 0.00 | 0.00ms | 0.00ms | 0 | 0.000 | 10.0 | 0.00 |
| Fastify | POST | file_upload | basic | 10 | 30s | 0.00 | 0.00ms | 0.00ms | 30 | 0.000 | 10.0 | 0.00 |
| Fastify | GET | file_upload | basic | 10 | 30s | 0.00 | 0.00ms | 0.00ms | 30 | 0.000 | 10.0 | 0.00 |
| Fastify | POST | file_upload | basic | 100 | 5s | 0.00 | 0.00ms | 0.00ms | 0 | 0.000 | 9.9 | 0.00 |
| Fastify | GET | file_upload | basic | 100 | 5s | 0.00 | 0.00ms | 0.00ms | 0 | 0.000 | 9.9 | 0.00 |
| Fastify | POST | file_upload | basic | 100 | 30s | 0.00 | 0.00ms | 0.00ms | 300 | 0.000 | 10.0 | 0.00 |
| Fastify | GET | file_upload | basic | 100 | 30s | 0.00 | 0.00ms | 0.00ms | 300 | 0.000 | 10.0 | 0.00 |
| Fastify | POST | analytics_processing | basic | 10 | 5s | 0.00 | 0.00ms | 0.00ms | 0 | 0.000 | 9.9 | 0.00 |
| Fastify | GET | analytics_processing | basic | 10 | 5s | 0.00 | 0.00ms | 0.00ms | 0 | 0.000 | 10.0 | 0.00 |
| Fastify | POST | analytics_processing | basic | 10 | 30s | 0.00 | 0.00ms | 0.00ms | 30 | 0.000 | 10.0 | 0.00 |
| Fastify | GET | analytics_processing | basic | 10 | 30s | 0.00 | 0.00ms | 0.00ms | 30 | 0.000 | 10.0 | 0.00 |
| Fastify | POST | analytics_processing | basic | 100 | 5s | 0.00 | 0.00ms | 0.00ms | 0 | 0.000 | 9.9 | 0.00 |
| Fastify | GET | analytics_processing | basic | 100 | 5s | 0.00 | 0.00ms | 0.00ms | 0 | 0.000 | 9.9 | 0.00 |
| Fastify | POST | analytics_processing | basic | 100 | 30s | 0.00 | 0.00ms | 0.00ms | 300 | 0.000 | 10.0 | 0.00 |
| Fastify | GET | analytics_processing | basic | 100 | 30s | 0.00 | 0.00ms | 0.00ms | 300 | 0.000 | 10.0 | 0.00 |
| Fastify | POST | product_catalog | basic | 10 | 5s | 0.00 | 0.00ms | 0.00ms | 0 | 0.000 | 9.9 | 0.00 |
| Fastify | GET | product_catalog | basic | 10 | 5s | 0.00 | 0.00ms | 0.00ms | 0 | 0.000 | 10.0 | 0.00 |
| Fastify | POST | product_catalog | basic | 10 | 30s | 0.00 | 0.00ms | 0.00ms | 30 | 0.000 | 10.0 | 0.00 |
| Fastify | GET | product_catalog | basic | 10 | 30s | 0.00 | 0.00ms | 0.00ms | 30 | 0.000 | 10.0 | 0.00 |
| Fastify | POST | product_catalog | basic | 100 | 5s | 0.00 | 0.00ms | 0.00ms | 0 | 0.000 | 9.9 | 0.00 |
| Fastify | GET | product_catalog | basic | 100 | 5s | 0.00 | 0.00ms | 0.00ms | 0 | 0.000 | 9.9 | 0.00 |
| Fastify | POST | product_catalog | basic | 100 | 30s | 0.00 | 0.00ms | 0.00ms | 300 | 0.000 | 10.0 | 0.00 |
| Fastify | GET | product_catalog | basic | 100 | 30s | 0.00 | 0.00ms | 0.00ms | 300 | 0.000 | 10.0 | 0.00 |
| Fastify | POST | product_catalog | basic | 250 | 5s | 0.00 | 0.00ms | 0.00ms | 0 | 0.000 | 9.9 | 0.00 |
| Fastify | GET | product_catalog | basic | 250 | 5s | 0.00 | 0.00ms | 0.00ms | 0 | 0.000 | 9.9 | 0.00 |
| Fastify | POST | product_catalog | basic | 250 | 30s | 0.00 | 0.00ms | 0.00ms | 750 | 0.000 | 10.0 | 0.00 |

## 🏁 Análise Detalhada de Performance

### 📈 Análise de Escalabilidade

#### CRUD de usuários
**Express**:
- Throughput máximo: 173.69 req/s (10 conexões)
- Ponto de quebra: 250 conexões
- Eficiência CPU: 6.341 req/s por conexão
- Sustentabilidade: 10.0/10

**Fastify**:
- Throughput máximo: 158.43 req/s (10 conexões)
- Ponto de quebra: 100 conexões
- Eficiência CPU: 5.527 req/s por conexão
- Sustentabilidade: 10.0/10

#### Upload de arquivos
**Express**:
- Throughput máximo: 634.88 req/s (100 conexões)
- Ponto de quebra: 100 conexões
- Eficiência CPU: 3.174 req/s por conexão
- Sustentabilidade: 10.0/10

**Fastify**:
- Throughput máximo: 0.00 req/s (0 conexões)
- Ponto de quebra: 0 conexões
- Eficiência CPU: 0.000 req/s por conexão
- Sustentabilidade: 10.0/10

#### Processamento analítico
**Express**:
- Throughput máximo: 136.94 req/s (10 conexões)
- Ponto de quebra: 10 conexões
- Eficiência CPU: 7.502 req/s por conexão
- Sustentabilidade: 10.0/10

**Fastify**:
- Throughput máximo: 0.00 req/s (0 conexões)
- Ponto de quebra: 0 conexões
- Eficiência CPU: 0.000 req/s por conexão
- Sustentabilidade: 10.0/10

#### Catálogo de produtos
**Express**:
- Throughput máximo: 6049.15 req/s (100 conexões)
- Ponto de quebra: 100 conexões
- Eficiência CPU: 153.271 req/s por conexão
- Sustentabilidade: 7.2/10

**Fastify**:
- Throughput máximo: 789.04 req/s (250 conexões)
- Ponto de quebra: 250 conexões
- Eficiência CPU: 1.052 req/s por conexão
- Sustentabilidade: 9.9/10

#### Dados em tempo real
**Express**:
- Throughput máximo: 3466.00 req/s (100 conexões)
- Ponto de quebra: 100 conexões
- Eficiência CPU: 109.390 req/s por conexão
- Sustentabilidade: 8.0/10

**Fastify**:
- Throughput máximo: 4481.93 req/s (100 conexões)
- Ponto de quebra: 100 conexões
- Eficiência CPU: 113.350 req/s por conexão
- Sustentabilidade: 7.9/10

### ⚙️ Análise por Complexidade

#### Variant: BASIC
- **Express**: 2060.55 req/s, 329.05ms, 63.720 eficiência
- **Fastify**: 978.17 req/s, 374.74ms, 27.676 eficiência

### ⏱️ Análise de Sustentabilidade

#### Duração: 5s
- **Express**: Score 9.5/10, Consistência 40.1%
- **Fastify**: Score 9.7/10, Consistência 40.2%

#### Duração: 30s
- **Express**: Score 8.2/10, Consistência 6.7%
- **Fastify**: Score 9.2/10, Consistência 6.7%

### 💡 Recomendações Baseadas em Dados

🚀 **Express** mostra 110.7% melhor performance geral

**CRUD de usuários**: Use Express (+46.0% performance)
**Upload de arquivos**: Use Express (+Infinity% performance)
**Processamento analítico**: Use Express (+Infinity% performance)
**Catálogo de produtos**: Use Express (+1908.3% performance)
**Dados em tempo real**: Use Fastify (+20.6% performance)


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
_Relatório gerado automaticamente em 30/07/2025, 00:44:09_
