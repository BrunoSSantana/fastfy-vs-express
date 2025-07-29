# 🧪 Benchmark Analítico: Fastify vs Express

## 📊 Configuração do Teste

**Executado em**: 29/07/2025, 00:13:44  
**Total de testes**: 684  
**Cenários**: 5 (user_crud, file_upload, analytics_processing, product_catalog, real_time_data)  
**Variants**: 3 (basic, complex, heavy)  
**Cargas testadas**: 10, 50, 100, 250, 500 conexões  
**Durações**: 15, 30, 60 segundos  

## 📈 Resultados Detalhados

| Framework | Método | Cenário | Variant | Conexões | Duração | Req/s | Lat.Avg | p99 | Erros | CPU Eff | Sustent. | MB/s |
|-----------|--------|---------|---------|----------|---------|-------|---------|-----|-------|---------|----------|------|
| Express | POST | user_crud | basic | 10 | 15s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.7 | 0.00 |
| Express | GET | user_crud | basic | 10 | 15s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.7 | 0.00 |
| Express | POST | user_crud | basic | 10 | 30s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.3 | 0.00 |
| Express | GET | user_crud | basic | 10 | 30s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.3 | 0.00 |
| Express | POST | user_crud | basic | 10 | 60s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.2 | 0.00 |
| Express | GET | user_crud | basic | 10 | 60s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.2 | 0.00 |
| Express | POST | user_crud | basic | 50 | 15s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 1.3 | 0.00 |
| Express | GET | user_crud | basic | 50 | 15s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 1.3 | 0.00 |
| Express | POST | user_crud | basic | 50 | 30s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 0.7 | 0.00 |
| Express | GET | user_crud | basic | 50 | 30s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 0.7 | 0.00 |
| Express | POST | user_crud | basic | 50 | 60s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 0.3 | 0.00 |
| Express | GET | user_crud | basic | 50 | 60s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 0.3 | 0.00 |
| Express | POST | user_crud | basic | 100 | 15s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 2.7 | 0.00 |
| Express | GET | user_crud | basic | 100 | 15s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 2.0 | 0.00 |
| Express | POST | user_crud | basic | 100 | 30s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 1.0 | 0.00 |
| Express | GET | user_crud | basic | 100 | 30s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 1.3 | 0.00 |
| Express | POST | user_crud | basic | 100 | 60s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 0.7 | 0.00 |
| Express | GET | user_crud | basic | 100 | 60s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 0.7 | 0.00 |
| Express | POST | user_crud | basic | 250 | 15s | 0.00 | 0.00ms | 0.00ms | 250000 | 0.000 | 5.4 | 0.00 |
| Express | GET | user_crud | basic | 250 | 15s | 0.00 | 0.00ms | 0.00ms | 250000 | 0.000 | 5.4 | 0.00 |
| Express | POST | user_crud | basic | 250 | 30s | 0.00 | 0.00ms | 0.00ms | 250000 | 0.000 | 2.7 | 0.00 |
| Express | GET | user_crud | basic | 250 | 30s | 0.00 | 0.00ms | 0.00ms | 250000 | 0.000 | 2.7 | 0.00 |
| Express | POST | user_crud | basic | 250 | 60s | 0.00 | 0.00ms | 0.00ms | 250000 | 0.000 | 1.3 | 0.00 |
| Express | GET | user_crud | basic | 250 | 60s | 0.00 | 0.00ms | 0.00ms | 250000 | 0.000 | 1.3 | 0.00 |
| Express | POST | user_crud | complex | 10 | 15s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.7 | 0.00 |
| Express | GET | user_crud | complex | 10 | 15s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.7 | 0.00 |
| Express | POST | user_crud | complex | 10 | 30s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.3 | 0.00 |
| Express | GET | user_crud | complex | 10 | 30s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.3 | 0.00 |
| Express | POST | user_crud | complex | 10 | 60s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.2 | 0.00 |
| Express | GET | user_crud | complex | 10 | 60s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.2 | 0.00 |
| Express | POST | user_crud | complex | 50 | 15s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 1.4 | 0.00 |
| Express | GET | user_crud | complex | 50 | 15s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 1.3 | 0.00 |
| Express | POST | user_crud | complex | 50 | 30s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 0.7 | 0.00 |
| Express | GET | user_crud | complex | 50 | 30s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 0.7 | 0.00 |
| Express | POST | user_crud | complex | 50 | 60s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 0.3 | 0.00 |
| Express | GET | user_crud | complex | 50 | 60s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 0.3 | 0.00 |
| Express | POST | user_crud | complex | 100 | 15s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 2.0 | 0.00 |
| Express | GET | user_crud | complex | 100 | 15s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 2.0 | 0.00 |
| Express | POST | user_crud | complex | 100 | 30s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 1.3 | 0.00 |
| Express | GET | user_crud | complex | 100 | 30s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 1.3 | 0.00 |
| Express | POST | user_crud | complex | 100 | 60s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 0.7 | 0.00 |
| Express | GET | user_crud | complex | 100 | 60s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 0.7 | 0.00 |
| Express | POST | user_crud | complex | 250 | 15s | 0.00 | 0.00ms | 0.00ms | 250000 | 0.000 | 5.4 | 0.00 |
| Express | GET | user_crud | complex | 250 | 15s | 0.00 | 0.00ms | 0.00ms | 250000 | 0.000 | 5.4 | 0.00 |
| Express | POST | user_crud | complex | 250 | 30s | 0.00 | 0.00ms | 0.00ms | 250000 | 0.000 | 2.7 | 0.00 |
| Express | GET | user_crud | complex | 250 | 30s | 0.00 | 0.00ms | 0.00ms | 250000 | 0.000 | 2.7 | 0.00 |
| Express | POST | user_crud | complex | 250 | 60s | 0.00 | 0.00ms | 0.00ms | 250000 | 0.000 | 1.3 | 0.00 |
| Express | GET | user_crud | complex | 250 | 60s | 0.00 | 0.00ms | 0.00ms | 250000 | 0.000 | 1.3 | 0.00 |
| Express | POST | user_crud | heavy | 10 | 15s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.7 | 0.00 |
| Express | GET | user_crud | heavy | 10 | 15s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.7 | 0.00 |
| Express | POST | user_crud | heavy | 10 | 30s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.3 | 0.00 |
| Express | GET | user_crud | heavy | 10 | 30s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.3 | 0.00 |
| Express | POST | user_crud | heavy | 10 | 60s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.2 | 0.00 |
| Express | GET | user_crud | heavy | 10 | 60s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.2 | 0.00 |
| Express | POST | user_crud | heavy | 50 | 15s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 1.4 | 0.00 |
| Express | GET | user_crud | heavy | 50 | 15s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 1.3 | 0.00 |
| Express | POST | user_crud | heavy | 50 | 30s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 0.7 | 0.00 |
| Express | GET | user_crud | heavy | 50 | 30s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 0.7 | 0.00 |
| Express | POST | user_crud | heavy | 50 | 60s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 0.3 | 0.00 |
| Express | GET | user_crud | heavy | 50 | 60s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 0.3 | 0.00 |
| Express | POST | user_crud | heavy | 100 | 15s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 2.0 | 0.00 |
| Express | GET | user_crud | heavy | 100 | 15s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 2.7 | 0.00 |
| Express | POST | user_crud | heavy | 100 | 30s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 1.3 | 0.00 |
| Express | GET | user_crud | heavy | 100 | 30s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 1.3 | 0.00 |
| Express | POST | user_crud | heavy | 100 | 60s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 0.5 | 0.00 |
| Express | GET | user_crud | heavy | 100 | 60s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 0.5 | 0.00 |
| Express | POST | user_crud | heavy | 250 | 15s | 0.00 | 0.00ms | 0.00ms | 250000 | 0.000 | 5.4 | 0.00 |
| Express | GET | user_crud | heavy | 250 | 15s | 0.00 | 0.00ms | 0.00ms | 250000 | 0.000 | 5.4 | 0.00 |
| Express | POST | user_crud | heavy | 250 | 30s | 0.00 | 0.00ms | 0.00ms | 250000 | 0.000 | 2.7 | 0.00 |
| Express | GET | user_crud | heavy | 250 | 30s | 0.00 | 0.00ms | 0.00ms | 250000 | 0.000 | 2.7 | 0.00 |
| Express | POST | user_crud | heavy | 250 | 60s | 0.00 | 0.00ms | 0.00ms | 250000 | 0.000 | 1.3 | 0.00 |
| Express | GET | user_crud | heavy | 250 | 60s | 0.00 | 0.00ms | 0.00ms | 250000 | 0.000 | 1.3 | 0.00 |
| Express | POST | file_upload | basic | 10 | 15s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.7 | 0.00 |
| Express | GET | file_upload | basic | 10 | 15s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.7 | 0.00 |
| Express | POST | file_upload | basic | 10 | 30s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.3 | 0.00 |
| Express | GET | file_upload | basic | 10 | 30s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.3 | 0.00 |
| Express | POST | file_upload | basic | 10 | 60s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.2 | 0.00 |
| Express | GET | file_upload | basic | 10 | 60s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.2 | 0.00 |
| Express | POST | file_upload | basic | 50 | 15s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 1.3 | 0.00 |
| Express | GET | file_upload | basic | 50 | 15s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 1.3 | 0.00 |
| Express | POST | file_upload | basic | 50 | 30s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 0.7 | 0.00 |
| Express | GET | file_upload | basic | 50 | 30s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 0.7 | 0.00 |
| Express | POST | file_upload | basic | 50 | 60s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 0.3 | 0.00 |
| Express | GET | file_upload | basic | 50 | 60s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 0.3 | 0.00 |
| Express | POST | file_upload | basic | 100 | 15s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 2.7 | 0.00 |
| Express | GET | file_upload | basic | 100 | 15s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 2.0 | 0.00 |
| Express | POST | file_upload | basic | 100 | 30s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 1.3 | 0.00 |
| Express | GET | file_upload | basic | 100 | 30s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 1.0 | 0.00 |
| Express | POST | file_upload | basic | 100 | 60s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 0.7 | 0.00 |
| Express | GET | file_upload | basic | 100 | 60s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 0.5 | 0.00 |
| Express | POST | file_upload | complex | 10 | 15s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.7 | 0.00 |
| Express | GET | file_upload | complex | 10 | 15s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.7 | 0.00 |
| Express | POST | file_upload | complex | 10 | 30s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.3 | 0.00 |
| Express | GET | file_upload | complex | 10 | 30s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.3 | 0.00 |
| Express | POST | file_upload | complex | 10 | 60s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.2 | 0.00 |
| Express | GET | file_upload | complex | 10 | 60s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.2 | 0.00 |
| Express | POST | file_upload | complex | 50 | 15s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 1.3 | 0.00 |
| Express | GET | file_upload | complex | 50 | 15s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 1.3 | 0.00 |
| Express | POST | file_upload | complex | 50 | 30s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 0.7 | 0.00 |
| Express | GET | file_upload | complex | 50 | 30s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 0.7 | 0.00 |
| Express | POST | file_upload | complex | 50 | 60s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 0.3 | 0.00 |
| Express | GET | file_upload | complex | 50 | 60s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 0.3 | 0.00 |
| Express | POST | file_upload | complex | 100 | 15s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 2.7 | 0.00 |
| Express | GET | file_upload | complex | 100 | 15s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 2.7 | 0.00 |
| Express | POST | file_upload | complex | 100 | 30s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 1.3 | 0.00 |
| Express | GET | file_upload | complex | 100 | 30s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 1.3 | 0.00 |
| Express | POST | file_upload | complex | 100 | 60s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 0.5 | 0.00 |
| Express | GET | file_upload | complex | 100 | 60s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 0.5 | 0.00 |
| Express | POST | file_upload | heavy | 10 | 15s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.7 | 0.00 |
| Express | GET | file_upload | heavy | 10 | 15s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.7 | 0.00 |
| Express | POST | file_upload | heavy | 10 | 30s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.3 | 0.00 |
| Express | GET | file_upload | heavy | 10 | 30s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.3 | 0.00 |
| Express | POST | file_upload | heavy | 10 | 60s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.2 | 0.00 |
| Express | GET | file_upload | heavy | 10 | 60s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.2 | 0.00 |
| Express | POST | file_upload | heavy | 50 | 15s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 1.3 | 0.00 |
| Express | GET | file_upload | heavy | 50 | 15s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 1.4 | 0.00 |
| Express | POST | file_upload | heavy | 50 | 30s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 0.7 | 0.00 |
| Express | GET | file_upload | heavy | 50 | 30s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 0.7 | 0.00 |
| Express | POST | file_upload | heavy | 50 | 60s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 0.3 | 0.00 |
| Express | GET | file_upload | heavy | 50 | 60s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 0.3 | 0.00 |
| Express | POST | file_upload | heavy | 100 | 15s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 2.7 | 0.00 |
| Express | GET | file_upload | heavy | 100 | 15s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 2.7 | 0.00 |
| Express | POST | file_upload | heavy | 100 | 30s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 1.3 | 0.00 |
| Express | GET | file_upload | heavy | 100 | 30s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 1.0 | 0.00 |
| Express | POST | file_upload | heavy | 100 | 60s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 0.5 | 0.00 |
| Express | GET | file_upload | heavy | 100 | 60s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 0.5 | 0.00 |
| Express | POST | analytics_processing | basic | 10 | 15s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.7 | 0.00 |
| Express | GET | analytics_processing | basic | 10 | 15s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.7 | 0.00 |
| Express | POST | analytics_processing | basic | 10 | 30s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.3 | 0.00 |
| Express | GET | analytics_processing | basic | 10 | 30s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.3 | 0.00 |
| Express | POST | analytics_processing | basic | 10 | 60s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.2 | 0.00 |
| Express | GET | analytics_processing | basic | 10 | 60s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.2 | 0.00 |
| Express | POST | analytics_processing | basic | 50 | 15s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 1.4 | 0.00 |
| Express | GET | analytics_processing | basic | 50 | 15s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 1.3 | 0.00 |
| Express | POST | analytics_processing | basic | 50 | 30s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 0.7 | 0.00 |
| Express | GET | analytics_processing | basic | 50 | 30s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 0.7 | 0.00 |
| Express | POST | analytics_processing | basic | 50 | 60s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 0.3 | 0.00 |
| Express | GET | analytics_processing | basic | 50 | 60s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 0.3 | 0.00 |
| Express | POST | analytics_processing | basic | 100 | 15s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 2.0 | 0.00 |
| Express | GET | analytics_processing | basic | 100 | 15s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 2.7 | 0.00 |
| Express | POST | analytics_processing | basic | 100 | 30s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 1.3 | 0.00 |
| Express | GET | analytics_processing | basic | 100 | 30s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 1.0 | 0.00 |
| Express | POST | analytics_processing | basic | 100 | 60s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 0.7 | 0.00 |
| Express | GET | analytics_processing | basic | 100 | 60s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 0.7 | 0.00 |
| Express | POST | analytics_processing | complex | 10 | 15s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.7 | 0.00 |
| Express | GET | analytics_processing | complex | 10 | 15s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.7 | 0.00 |
| Express | POST | analytics_processing | complex | 10 | 30s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.3 | 0.00 |
| Express | GET | analytics_processing | complex | 10 | 30s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.3 | 0.00 |
| Express | POST | analytics_processing | complex | 10 | 60s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.2 | 0.00 |
| Express | GET | analytics_processing | complex | 10 | 60s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.2 | 0.00 |
| Express | POST | analytics_processing | complex | 50 | 15s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 1.3 | 0.00 |
| Express | GET | analytics_processing | complex | 50 | 15s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 1.3 | 0.00 |
| Express | POST | analytics_processing | complex | 50 | 30s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 0.7 | 0.00 |
| Express | GET | analytics_processing | complex | 50 | 30s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 0.7 | 0.00 |
| Express | POST | analytics_processing | complex | 50 | 60s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 0.3 | 0.00 |
| Express | GET | analytics_processing | complex | 50 | 60s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 0.3 | 0.00 |
| Express | POST | analytics_processing | complex | 100 | 15s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 2.7 | 0.00 |
| Express | GET | analytics_processing | complex | 100 | 15s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 2.7 | 0.00 |
| Express | POST | analytics_processing | complex | 100 | 30s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 1.3 | 0.00 |
| Express | GET | analytics_processing | complex | 100 | 30s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 1.3 | 0.00 |
| Express | POST | analytics_processing | complex | 100 | 60s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 0.5 | 0.00 |
| Express | GET | analytics_processing | complex | 100 | 60s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 0.5 | 0.00 |
| Express | POST | analytics_processing | heavy | 10 | 15s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.7 | 0.00 |
| Express | GET | analytics_processing | heavy | 10 | 15s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.7 | 0.00 |
| Express | POST | analytics_processing | heavy | 10 | 30s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.3 | 0.00 |
| Express | GET | analytics_processing | heavy | 10 | 30s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.3 | 0.00 |
| Express | POST | analytics_processing | heavy | 10 | 60s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.2 | 0.00 |
| Express | GET | analytics_processing | heavy | 10 | 60s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.2 | 0.00 |
| Express | POST | analytics_processing | heavy | 50 | 15s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 1.3 | 0.00 |
| Express | GET | analytics_processing | heavy | 50 | 15s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 1.4 | 0.00 |
| Express | POST | analytics_processing | heavy | 50 | 30s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 0.7 | 0.00 |
| Express | GET | analytics_processing | heavy | 50 | 30s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 0.7 | 0.00 |
| Express | POST | analytics_processing | heavy | 50 | 60s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 0.3 | 0.00 |
| Express | GET | analytics_processing | heavy | 50 | 60s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 0.3 | 0.00 |
| Express | POST | analytics_processing | heavy | 100 | 15s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 2.7 | 0.00 |
| Express | GET | analytics_processing | heavy | 100 | 15s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 2.0 | 0.00 |
| Express | POST | analytics_processing | heavy | 100 | 30s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 1.3 | 0.00 |
| Express | GET | analytics_processing | heavy | 100 | 30s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 1.0 | 0.00 |
| Express | POST | analytics_processing | heavy | 100 | 60s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 0.5 | 0.00 |
| Express | GET | analytics_processing | heavy | 100 | 60s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 0.7 | 0.00 |
| Express | POST | product_catalog | basic | 10 | 15s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.7 | 0.00 |
| Express | GET | product_catalog | basic | 10 | 15s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.7 | 0.00 |
| Express | POST | product_catalog | basic | 10 | 30s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.3 | 0.00 |
| Express | GET | product_catalog | basic | 10 | 30s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.3 | 0.00 |
| Express | POST | product_catalog | basic | 10 | 60s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.2 | 0.00 |
| Express | GET | product_catalog | basic | 10 | 60s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.2 | 0.00 |
| Express | POST | product_catalog | basic | 50 | 15s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 1.3 | 0.00 |
| Express | GET | product_catalog | basic | 50 | 15s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 1.3 | 0.00 |
| Express | POST | product_catalog | basic | 50 | 30s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 0.7 | 0.00 |
| Express | GET | product_catalog | basic | 50 | 30s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 0.7 | 0.00 |
| Express | POST | product_catalog | basic | 50 | 60s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 0.3 | 0.00 |
| Express | GET | product_catalog | basic | 50 | 60s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 0.3 | 0.00 |
| Express | POST | product_catalog | basic | 100 | 15s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 2.7 | 0.00 |
| Express | GET | product_catalog | basic | 100 | 15s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 2.7 | 0.00 |
| Express | POST | product_catalog | basic | 100 | 30s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 1.0 | 0.00 |
| Express | GET | product_catalog | basic | 100 | 30s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 1.0 | 0.00 |
| Express | POST | product_catalog | basic | 100 | 60s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 0.5 | 0.00 |
| Express | GET | product_catalog | basic | 100 | 60s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 0.5 | 0.00 |
| Express | POST | product_catalog | basic | 250 | 15s | 0.00 | 0.00ms | 0.00ms | 250000 | 0.000 | 5.4 | 0.00 |
| Express | GET | product_catalog | basic | 250 | 15s | 0.00 | 0.00ms | 0.00ms | 250000 | 0.000 | 5.4 | 0.00 |
| Express | POST | product_catalog | basic | 250 | 30s | 0.00 | 0.00ms | 0.00ms | 250000 | 0.000 | 2.7 | 0.00 |
| Express | GET | product_catalog | basic | 250 | 30s | 0.00 | 0.00ms | 0.00ms | 250000 | 0.000 | 2.7 | 0.00 |
| Express | POST | product_catalog | basic | 250 | 60s | 0.00 | 0.00ms | 0.00ms | 250000 | 0.000 | 1.3 | 0.00 |
| Express | GET | product_catalog | basic | 250 | 60s | 0.00 | 0.00ms | 0.00ms | 250000 | 0.000 | 1.3 | 0.00 |
| Express | POST | product_catalog | complex | 10 | 15s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.7 | 0.00 |
| Express | GET | product_catalog | complex | 10 | 15s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.7 | 0.00 |
| Express | POST | product_catalog | complex | 10 | 30s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.3 | 0.00 |
| Express | GET | product_catalog | complex | 10 | 30s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.3 | 0.00 |
| Express | POST | product_catalog | complex | 10 | 60s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.2 | 0.00 |
| Express | GET | product_catalog | complex | 10 | 60s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.2 | 0.00 |
| Express | POST | product_catalog | complex | 50 | 15s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 1.4 | 0.00 |
| Express | GET | product_catalog | complex | 50 | 15s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 1.4 | 0.00 |
| Express | POST | product_catalog | complex | 50 | 30s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 0.7 | 0.00 |
| Express | GET | product_catalog | complex | 50 | 30s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 0.7 | 0.00 |
| Express | POST | product_catalog | complex | 50 | 60s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 0.3 | 0.00 |
| Express | GET | product_catalog | complex | 50 | 60s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 0.3 | 0.00 |
| Express | POST | product_catalog | complex | 100 | 15s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 2.7 | 0.00 |
| Express | GET | product_catalog | complex | 100 | 15s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 2.0 | 0.00 |
| Express | POST | product_catalog | complex | 100 | 30s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 1.0 | 0.00 |
| Express | GET | product_catalog | complex | 100 | 30s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 1.3 | 0.00 |
| Express | POST | product_catalog | complex | 100 | 60s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 0.5 | 0.00 |
| Express | GET | product_catalog | complex | 100 | 60s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 0.7 | 0.00 |
| Express | POST | product_catalog | complex | 250 | 15s | 0.00 | 0.00ms | 0.00ms | 250000 | 0.000 | 5.4 | 0.00 |
| Express | GET | product_catalog | complex | 250 | 15s | 0.00 | 0.00ms | 0.00ms | 250000 | 0.000 | 5.4 | 0.00 |
| Express | POST | product_catalog | complex | 250 | 30s | 0.00 | 0.00ms | 0.00ms | 250000 | 0.000 | 2.7 | 0.00 |
| Express | GET | product_catalog | complex | 250 | 30s | 0.00 | 0.00ms | 0.00ms | 250000 | 0.000 | 2.7 | 0.00 |
| Express | POST | product_catalog | complex | 250 | 60s | 0.00 | 0.00ms | 0.00ms | 250000 | 0.000 | 1.3 | 0.00 |
| Express | GET | product_catalog | complex | 250 | 60s | 0.00 | 0.00ms | 0.00ms | 250000 | 0.000 | 1.3 | 0.00 |
| Express | POST | product_catalog | heavy | 10 | 15s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.7 | 0.00 |
| Express | GET | product_catalog | heavy | 10 | 15s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.7 | 0.00 |
| Express | POST | product_catalog | heavy | 10 | 30s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.3 | 0.00 |
| Express | GET | product_catalog | heavy | 10 | 30s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.3 | 0.00 |
| Express | POST | product_catalog | heavy | 10 | 60s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.2 | 0.00 |
| Express | GET | product_catalog | heavy | 10 | 60s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.2 | 0.00 |
| Express | POST | product_catalog | heavy | 50 | 15s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 1.3 | 0.00 |
| Express | GET | product_catalog | heavy | 50 | 15s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 1.3 | 0.00 |
| Express | POST | product_catalog | heavy | 50 | 30s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 0.7 | 0.00 |
| Express | GET | product_catalog | heavy | 50 | 30s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 0.7 | 0.00 |
| Express | POST | product_catalog | heavy | 50 | 60s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 0.3 | 0.00 |
| Express | GET | product_catalog | heavy | 50 | 60s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 0.3 | 0.00 |
| Express | POST | product_catalog | heavy | 100 | 15s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 2.0 | 0.00 |
| Express | GET | product_catalog | heavy | 100 | 15s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 2.7 | 0.00 |
| Express | POST | product_catalog | heavy | 100 | 30s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 1.0 | 0.00 |
| Express | GET | product_catalog | heavy | 100 | 30s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 1.0 | 0.00 |
| Express | POST | product_catalog | heavy | 100 | 60s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 0.7 | 0.00 |
| Express | GET | product_catalog | heavy | 100 | 60s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 0.5 | 0.00 |
| Express | POST | product_catalog | heavy | 250 | 15s | 0.00 | 0.00ms | 0.00ms | 250000 | 0.000 | 5.4 | 0.00 |
| Express | GET | product_catalog | heavy | 250 | 15s | 0.00 | 0.00ms | 0.00ms | 250000 | 0.000 | 5.4 | 0.00 |
| Express | POST | product_catalog | heavy | 250 | 30s | 0.00 | 0.00ms | 0.00ms | 250000 | 0.000 | 2.7 | 0.00 |
| Express | GET | product_catalog | heavy | 250 | 30s | 0.00 | 0.00ms | 0.00ms | 250000 | 0.000 | 2.7 | 0.00 |
| Express | POST | product_catalog | heavy | 250 | 60s | 0.00 | 0.00ms | 0.00ms | 250000 | 0.000 | 1.3 | 0.00 |
| Express | GET | product_catalog | heavy | 250 | 60s | 0.00 | 0.00ms | 0.00ms | 250000 | 0.000 | 1.3 | 0.00 |
| Express | POST | real_time_data | basic | 10 | 15s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.7 | 0.00 |
| Express | GET | real_time_data | basic | 10 | 15s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.7 | 0.00 |
| Express | POST | real_time_data | basic | 10 | 30s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.3 | 0.00 |
| Express | GET | real_time_data | basic | 10 | 30s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.3 | 0.00 |
| Express | POST | real_time_data | basic | 10 | 60s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.2 | 0.00 |
| Express | GET | real_time_data | basic | 10 | 60s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.2 | 0.00 |
| Express | POST | real_time_data | basic | 50 | 15s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 1.4 | 0.00 |
| Express | GET | real_time_data | basic | 50 | 15s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 1.3 | 0.00 |
| Express | POST | real_time_data | basic | 50 | 30s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 0.7 | 0.00 |
| Express | GET | real_time_data | basic | 50 | 30s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 0.7 | 0.00 |
| Express | POST | real_time_data | basic | 50 | 60s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 0.3 | 0.00 |
| Express | GET | real_time_data | basic | 50 | 60s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 0.3 | 0.00 |
| Express | POST | real_time_data | basic | 100 | 15s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 2.7 | 0.00 |
| Express | GET | real_time_data | basic | 100 | 15s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 2.0 | 0.00 |
| Express | POST | real_time_data | basic | 100 | 30s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 1.0 | 0.00 |
| Express | GET | real_time_data | basic | 100 | 30s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 1.0 | 0.00 |
| Express | POST | real_time_data | basic | 100 | 60s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 0.5 | 0.00 |
| Express | GET | real_time_data | basic | 100 | 60s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 0.7 | 0.00 |
| Express | POST | real_time_data | basic | 250 | 15s | 0.00 | 0.00ms | 0.00ms | 250000 | 0.000 | 5.4 | 0.00 |
| Express | GET | real_time_data | basic | 250 | 15s | 0.00 | 0.00ms | 0.00ms | 250000 | 0.000 | 5.4 | 0.00 |
| Express | POST | real_time_data | basic | 250 | 30s | 0.00 | 0.00ms | 0.00ms | 250000 | 0.000 | 2.7 | 0.00 |
| Express | GET | real_time_data | basic | 250 | 30s | 0.00 | 0.00ms | 0.00ms | 250000 | 0.000 | 2.7 | 0.00 |
| Express | POST | real_time_data | basic | 250 | 60s | 0.00 | 0.00ms | 0.00ms | 250000 | 0.000 | 1.3 | 0.00 |
| Express | GET | real_time_data | basic | 250 | 60s | 0.00 | 0.00ms | 0.00ms | 250000 | 0.000 | 1.3 | 0.00 |
| Express | POST | real_time_data | basic | 500 | 15s | 0.00 | 0.00ms | 0.00ms | 464945 | 0.000 | 9.9 | 0.00 |
| Express | GET | real_time_data | basic | 500 | 15s | 0.00 | 0.00ms | 0.00ms | 471132 | 0.000 | 9.9 | 0.00 |
| Express | POST | real_time_data | basic | 500 | 30s | 0.00 | 0.00ms | 0.00ms | 500000 | 0.000 | 5.4 | 0.00 |
| Express | GET | real_time_data | basic | 500 | 30s | 0.00 | 0.00ms | 0.00ms | 500000 | 0.000 | 5.4 | 0.00 |
| Express | POST | real_time_data | basic | 500 | 60s | 0.00 | 0.00ms | 0.00ms | 500000 | 0.000 | 2.7 | 0.00 |
| Express | GET | real_time_data | basic | 500 | 60s | 0.00 | 0.00ms | 0.00ms | 500000 | 0.000 | 2.7 | 0.00 |
| Express | POST | real_time_data | complex | 10 | 15s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.7 | 0.00 |
| Express | GET | real_time_data | complex | 10 | 15s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.7 | 0.00 |
| Express | POST | real_time_data | complex | 10 | 30s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.3 | 0.00 |
| Express | GET | real_time_data | complex | 10 | 30s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.3 | 0.00 |
| Express | POST | real_time_data | complex | 10 | 60s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.2 | 0.00 |
| Express | GET | real_time_data | complex | 10 | 60s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.2 | 0.00 |
| Express | POST | real_time_data | complex | 50 | 15s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 1.4 | 0.00 |
| Express | GET | real_time_data | complex | 50 | 15s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 1.3 | 0.00 |
| Express | POST | real_time_data | complex | 50 | 30s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 0.7 | 0.00 |
| Express | GET | real_time_data | complex | 50 | 30s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 0.7 | 0.00 |
| Express | POST | real_time_data | complex | 50 | 60s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 0.3 | 0.00 |
| Express | GET | real_time_data | complex | 50 | 60s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 0.3 | 0.00 |
| Express | POST | real_time_data | complex | 100 | 15s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 2.0 | 0.00 |
| Express | GET | real_time_data | complex | 100 | 15s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 2.7 | 0.00 |
| Express | POST | real_time_data | complex | 100 | 30s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 1.3 | 0.00 |
| Express | GET | real_time_data | complex | 100 | 30s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 1.3 | 0.00 |
| Express | POST | real_time_data | complex | 100 | 60s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 0.7 | 0.00 |
| Express | GET | real_time_data | complex | 100 | 60s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 0.5 | 0.00 |
| Express | POST | real_time_data | complex | 250 | 15s | 0.00 | 0.00ms | 0.00ms | 250000 | 0.000 | 5.4 | 0.00 |
| Express | GET | real_time_data | complex | 250 | 15s | 0.00 | 0.00ms | 0.00ms | 250000 | 0.000 | 5.4 | 0.00 |
| Express | POST | real_time_data | complex | 250 | 30s | 0.00 | 0.00ms | 0.00ms | 250000 | 0.000 | 2.7 | 0.00 |
| Express | GET | real_time_data | complex | 250 | 30s | 0.00 | 0.00ms | 0.00ms | 250000 | 0.000 | 2.7 | 0.00 |
| Express | POST | real_time_data | complex | 250 | 60s | 0.00 | 0.00ms | 0.00ms | 250000 | 0.000 | 1.3 | 0.00 |
| Express | GET | real_time_data | complex | 250 | 60s | 0.00 | 0.00ms | 0.00ms | 250000 | 0.000 | 1.3 | 0.00 |
| Express | POST | real_time_data | complex | 500 | 15s | 0.00 | 0.00ms | 0.00ms | 483301 | 0.000 | 9.9 | 0.00 |
| Express | GET | real_time_data | complex | 500 | 15s | 0.00 | 0.00ms | 0.00ms | 485367 | 0.000 | 9.9 | 0.00 |
| Express | POST | real_time_data | complex | 500 | 30s | 0.00 | 0.00ms | 0.00ms | 500000 | 0.000 | 5.4 | 0.00 |
| Express | GET | real_time_data | complex | 500 | 30s | 0.00 | 0.00ms | 0.00ms | 500000 | 0.000 | 5.4 | 0.00 |
| Express | POST | real_time_data | complex | 500 | 60s | 0.00 | 0.00ms | 0.00ms | 500000 | 0.000 | 2.7 | 0.00 |
| Express | GET | real_time_data | complex | 500 | 60s | 0.00 | 0.00ms | 0.00ms | 500000 | 0.000 | 2.8 | 0.00 |
| Express | POST | real_time_data | heavy | 10 | 15s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.7 | 0.00 |
| Express | GET | real_time_data | heavy | 10 | 15s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.7 | 0.00 |
| Express | POST | real_time_data | heavy | 10 | 30s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.3 | 0.00 |
| Express | GET | real_time_data | heavy | 10 | 30s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.3 | 0.00 |
| Express | POST | real_time_data | heavy | 10 | 60s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.2 | 0.00 |
| Express | GET | real_time_data | heavy | 10 | 60s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.2 | 0.00 |
| Express | POST | real_time_data | heavy | 50 | 15s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 1.3 | 0.00 |
| Express | GET | real_time_data | heavy | 50 | 15s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 1.3 | 0.00 |
| Express | POST | real_time_data | heavy | 50 | 30s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 0.7 | 0.00 |
| Express | GET | real_time_data | heavy | 50 | 30s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 0.7 | 0.00 |
| Express | POST | real_time_data | heavy | 50 | 60s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 0.3 | 0.00 |
| Express | GET | real_time_data | heavy | 50 | 60s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 0.3 | 0.00 |
| Express | POST | real_time_data | heavy | 100 | 15s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 2.7 | 0.00 |
| Express | GET | real_time_data | heavy | 100 | 15s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 2.7 | 0.00 |
| Express | POST | real_time_data | heavy | 100 | 30s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 1.3 | 0.00 |
| Express | GET | real_time_data | heavy | 100 | 30s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 1.3 | 0.00 |
| Express | POST | real_time_data | heavy | 100 | 60s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 0.7 | 0.00 |
| Express | GET | real_time_data | heavy | 100 | 60s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 0.7 | 0.00 |
| Express | POST | real_time_data | heavy | 250 | 15s | 0.00 | 0.00ms | 0.00ms | 250000 | 0.000 | 6.0 | 0.00 |
| Express | GET | real_time_data | heavy | 250 | 15s | 0.00 | 0.00ms | 0.00ms | 250000 | 0.000 | 5.4 | 0.00 |
| Express | POST | real_time_data | heavy | 250 | 30s | 0.00 | 0.00ms | 0.00ms | 250000 | 0.000 | 3.0 | 0.00 |
| Express | GET | real_time_data | heavy | 250 | 30s | 0.00 | 0.00ms | 0.00ms | 250000 | 0.000 | 2.7 | 0.00 |
| Express | POST | real_time_data | heavy | 250 | 60s | 0.00 | 0.00ms | 0.00ms | 250000 | 0.000 | 1.5 | 0.00 |
| Express | GET | real_time_data | heavy | 250 | 60s | 0.00 | 0.00ms | 0.00ms | 250000 | 0.000 | 1.3 | 0.00 |
| Express | POST | real_time_data | heavy | 500 | 15s | 0.00 | 0.00ms | 0.00ms | 483172 | 0.000 | 9.9 | 0.00 |
| Express | GET | real_time_data | heavy | 500 | 15s | 0.00 | 0.00ms | 0.00ms | 485214 | 0.000 | 9.9 | 0.00 |
| Express | POST | real_time_data | heavy | 500 | 30s | 0.00 | 0.00ms | 0.00ms | 500000 | 0.000 | 5.4 | 0.00 |
| Express | GET | real_time_data | heavy | 500 | 30s | 0.00 | 0.00ms | 0.00ms | 500000 | 0.000 | 5.4 | 0.00 |
| Express | POST | real_time_data | heavy | 500 | 60s | 0.00 | 0.00ms | 0.00ms | 500000 | 0.000 | 2.7 | 0.00 |
| Express | GET | real_time_data | heavy | 500 | 60s | 0.00 | 0.00ms | 0.00ms | 500000 | 0.000 | 2.7 | 0.00 |
| Fastify | POST | user_crud | basic | 10 | 15s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.7 | 0.00 |
| Fastify | GET | user_crud | basic | 10 | 15s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.7 | 0.00 |
| Fastify | POST | user_crud | basic | 10 | 30s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.3 | 0.00 |
| Fastify | GET | user_crud | basic | 10 | 30s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.3 | 0.00 |
| Fastify | POST | user_crud | basic | 10 | 60s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.2 | 0.00 |
| Fastify | GET | user_crud | basic | 10 | 60s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.2 | 0.00 |
| Fastify | POST | user_crud | basic | 50 | 15s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 1.3 | 0.00 |
| Fastify | GET | user_crud | basic | 50 | 15s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 1.3 | 0.00 |
| Fastify | POST | user_crud | basic | 50 | 30s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 0.7 | 0.00 |
| Fastify | GET | user_crud | basic | 50 | 30s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 0.7 | 0.00 |
| Fastify | POST | user_crud | basic | 50 | 60s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 0.3 | 0.00 |
| Fastify | GET | user_crud | basic | 50 | 60s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 0.3 | 0.00 |
| Fastify | POST | user_crud | basic | 100 | 15s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 2.0 | 0.00 |
| Fastify | GET | user_crud | basic | 100 | 15s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 2.0 | 0.00 |
| Fastify | POST | user_crud | basic | 100 | 30s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 1.0 | 0.00 |
| Fastify | GET | user_crud | basic | 100 | 30s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 1.0 | 0.00 |
| Fastify | POST | user_crud | basic | 100 | 60s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 0.7 | 0.00 |
| Fastify | GET | user_crud | basic | 100 | 60s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 0.7 | 0.00 |
| Fastify | POST | user_crud | basic | 250 | 15s | 0.00 | 0.00ms | 0.00ms | 250000 | 0.000 | 6.0 | 0.00 |
| Fastify | GET | user_crud | basic | 250 | 15s | 0.00 | 0.00ms | 0.00ms | 250000 | 0.000 | 6.0 | 0.00 |
| Fastify | POST | user_crud | basic | 250 | 30s | 0.00 | 0.00ms | 0.00ms | 250000 | 0.000 | 3.0 | 0.00 |
| Fastify | GET | user_crud | basic | 250 | 30s | 0.00 | 0.00ms | 0.00ms | 250000 | 0.000 | 3.0 | 0.00 |
| Fastify | POST | user_crud | basic | 250 | 60s | 0.00 | 0.00ms | 0.00ms | 250000 | 0.000 | 1.7 | 0.00 |
| Fastify | GET | user_crud | basic | 250 | 60s | 0.00 | 0.00ms | 0.00ms | 250000 | 0.000 | 1.3 | 0.00 |
| Fastify | POST | user_crud | complex | 10 | 15s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.7 | 0.00 |
| Fastify | GET | user_crud | complex | 10 | 15s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.7 | 0.00 |
| Fastify | POST | user_crud | complex | 10 | 30s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.3 | 0.00 |
| Fastify | GET | user_crud | complex | 10 | 30s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.3 | 0.00 |
| Fastify | POST | user_crud | complex | 10 | 60s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.2 | 0.00 |
| Fastify | GET | user_crud | complex | 10 | 60s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.2 | 0.00 |
| Fastify | POST | user_crud | complex | 50 | 15s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 1.4 | 0.00 |
| Fastify | GET | user_crud | complex | 50 | 15s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 1.3 | 0.00 |
| Fastify | POST | user_crud | complex | 50 | 30s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 0.7 | 0.00 |
| Fastify | GET | user_crud | complex | 50 | 30s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 0.7 | 0.00 |
| Fastify | POST | user_crud | complex | 50 | 60s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 0.3 | 0.00 |
| Fastify | GET | user_crud | complex | 50 | 60s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 0.3 | 0.00 |
| Fastify | POST | user_crud | complex | 100 | 15s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 2.7 | 0.00 |
| Fastify | GET | user_crud | complex | 100 | 15s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 2.7 | 0.00 |
| Fastify | POST | user_crud | complex | 100 | 30s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 1.3 | 0.00 |
| Fastify | GET | user_crud | complex | 100 | 30s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 1.7 | 0.00 |
| Fastify | POST | user_crud | complex | 100 | 60s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 0.7 | 0.00 |
| Fastify | GET | user_crud | complex | 100 | 60s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 0.7 | 0.00 |
| Fastify | POST | user_crud | complex | 250 | 15s | 0.00 | 0.00ms | 0.00ms | 250000 | 0.000 | 5.4 | 0.00 |
| Fastify | GET | user_crud | complex | 250 | 15s | 0.00 | 0.00ms | 0.00ms | 250000 | 0.000 | 6.0 | 0.00 |
| Fastify | POST | user_crud | complex | 250 | 30s | 0.00 | 0.00ms | 0.00ms | 250000 | 0.000 | 3.0 | 0.00 |
| Fastify | GET | user_crud | complex | 250 | 30s | 0.00 | 0.00ms | 0.00ms | 250000 | 0.000 | 3.0 | 0.00 |
| Fastify | POST | user_crud | complex | 250 | 60s | 0.00 | 0.00ms | 0.00ms | 250000 | 0.000 | 1.7 | 0.00 |
| Fastify | GET | user_crud | complex | 250 | 60s | 0.00 | 0.00ms | 0.00ms | 250000 | 0.000 | 1.3 | 0.00 |
| Fastify | POST | user_crud | heavy | 10 | 15s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.7 | 0.00 |
| Fastify | GET | user_crud | heavy | 10 | 15s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.7 | 0.00 |
| Fastify | POST | user_crud | heavy | 10 | 30s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.3 | 0.00 |
| Fastify | GET | user_crud | heavy | 10 | 30s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.3 | 0.00 |
| Fastify | POST | user_crud | heavy | 10 | 60s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.2 | 0.00 |
| Fastify | GET | user_crud | heavy | 10 | 60s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.2 | 0.00 |
| Fastify | POST | user_crud | heavy | 50 | 15s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 1.4 | 0.00 |
| Fastify | GET | user_crud | heavy | 50 | 15s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 1.3 | 0.00 |
| Fastify | POST | user_crud | heavy | 50 | 30s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 1.0 | 0.00 |
| Fastify | GET | user_crud | heavy | 50 | 30s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 0.7 | 0.00 |
| Fastify | POST | user_crud | heavy | 50 | 60s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 0.3 | 0.00 |
| Fastify | GET | user_crud | heavy | 50 | 60s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 0.3 | 0.00 |
| Fastify | POST | user_crud | heavy | 100 | 15s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 2.7 | 0.00 |
| Fastify | GET | user_crud | heavy | 100 | 15s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 2.7 | 0.00 |
| Fastify | POST | user_crud | heavy | 100 | 30s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 1.3 | 0.00 |
| Fastify | GET | user_crud | heavy | 100 | 30s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 1.3 | 0.00 |
| Fastify | POST | user_crud | heavy | 100 | 60s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 0.7 | 0.00 |
| Fastify | GET | user_crud | heavy | 100 | 60s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 0.7 | 0.00 |
| Fastify | POST | user_crud | heavy | 250 | 15s | 0.00 | 0.00ms | 0.00ms | 250000 | 0.000 | 5.4 | 0.00 |
| Fastify | GET | user_crud | heavy | 250 | 15s | 0.00 | 0.00ms | 0.00ms | 250000 | 0.000 | 5.4 | 0.00 |
| Fastify | POST | user_crud | heavy | 250 | 30s | 0.00 | 0.00ms | 0.00ms | 250000 | 0.000 | 2.7 | 0.00 |
| Fastify | GET | user_crud | heavy | 250 | 30s | 0.00 | 0.00ms | 0.00ms | 250000 | 0.000 | 2.7 | 0.00 |
| Fastify | POST | user_crud | heavy | 250 | 60s | 0.00 | 0.00ms | 0.00ms | 250000 | 0.000 | 1.3 | 0.00 |
| Fastify | GET | user_crud | heavy | 250 | 60s | 0.00 | 0.00ms | 0.00ms | 250000 | 0.000 | 1.3 | 0.00 |
| Fastify | POST | file_upload | basic | 10 | 15s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.7 | 0.00 |
| Fastify | GET | file_upload | basic | 10 | 15s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.7 | 0.00 |
| Fastify | POST | file_upload | basic | 10 | 30s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.3 | 0.00 |
| Fastify | GET | file_upload | basic | 10 | 30s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.3 | 0.00 |
| Fastify | POST | file_upload | basic | 10 | 60s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.2 | 0.00 |
| Fastify | GET | file_upload | basic | 10 | 60s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.2 | 0.00 |
| Fastify | POST | file_upload | basic | 50 | 15s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 1.4 | 0.00 |
| Fastify | GET | file_upload | basic | 50 | 15s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 1.4 | 0.00 |
| Fastify | POST | file_upload | basic | 50 | 30s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 0.7 | 0.00 |
| Fastify | GET | file_upload | basic | 50 | 30s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 0.7 | 0.00 |
| Fastify | POST | file_upload | basic | 50 | 60s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 0.3 | 0.00 |
| Fastify | GET | file_upload | basic | 50 | 60s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 0.3 | 0.00 |
| Fastify | POST | file_upload | basic | 100 | 15s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 2.7 | 0.00 |
| Fastify | GET | file_upload | basic | 100 | 15s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 2.7 | 0.00 |
| Fastify | POST | file_upload | basic | 100 | 30s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 1.3 | 0.00 |
| Fastify | GET | file_upload | basic | 100 | 30s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 1.3 | 0.00 |
| Fastify | POST | file_upload | basic | 100 | 60s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 0.7 | 0.00 |
| Fastify | GET | file_upload | basic | 100 | 60s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 0.7 | 0.00 |
| Fastify | POST | file_upload | complex | 10 | 15s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.7 | 0.00 |
| Fastify | GET | file_upload | complex | 10 | 15s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.7 | 0.00 |
| Fastify | POST | file_upload | complex | 10 | 30s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.3 | 0.00 |
| Fastify | GET | file_upload | complex | 10 | 30s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.3 | 0.00 |
| Fastify | POST | file_upload | complex | 10 | 60s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.2 | 0.00 |
| Fastify | GET | file_upload | complex | 10 | 60s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.2 | 0.00 |
| Fastify | POST | file_upload | complex | 50 | 15s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 1.3 | 0.00 |
| Fastify | GET | file_upload | complex | 50 | 15s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 1.3 | 0.00 |
| Fastify | POST | file_upload | complex | 50 | 30s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 0.7 | 0.00 |
| Fastify | GET | file_upload | complex | 50 | 30s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 0.7 | 0.00 |
| Fastify | POST | file_upload | complex | 50 | 60s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 6.2 | 0.00 |
| Fastify | GET | file_upload | complex | 50 | 60s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 0.9 | 0.00 |
| Fastify | POST | file_upload | complex | 100 | 15s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 2.7 | 0.00 |
| Fastify | GET | file_upload | complex | 100 | 15s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 2.7 | 0.00 |
| Fastify | POST | file_upload | complex | 100 | 30s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 1.3 | 0.00 |
| Fastify | GET | file_upload | complex | 100 | 30s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 1.3 | 0.00 |
| Fastify | POST | file_upload | complex | 100 | 60s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 0.5 | 0.00 |
| Fastify | GET | file_upload | complex | 100 | 60s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 0.7 | 0.00 |
| Fastify | POST | file_upload | heavy | 10 | 15s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.7 | 0.00 |
| Fastify | GET | file_upload | heavy | 10 | 15s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.7 | 0.00 |
| Fastify | POST | file_upload | heavy | 10 | 30s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.3 | 0.00 |
| Fastify | GET | file_upload | heavy | 10 | 30s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.3 | 0.00 |
| Fastify | POST | file_upload | heavy | 10 | 60s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.2 | 0.00 |
| Fastify | GET | file_upload | heavy | 10 | 60s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.2 | 0.00 |
| Fastify | POST | file_upload | heavy | 50 | 15s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 1.4 | 0.00 |
| Fastify | GET | file_upload | heavy | 50 | 15s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 1.4 | 0.00 |
| Fastify | POST | file_upload | heavy | 50 | 30s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 0.7 | 0.00 |
| Fastify | GET | file_upload | heavy | 50 | 30s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 0.7 | 0.00 |
| Fastify | POST | file_upload | heavy | 50 | 60s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 0.3 | 0.00 |
| Fastify | GET | file_upload | heavy | 50 | 60s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 0.3 | 0.00 |
| Fastify | POST | file_upload | heavy | 100 | 15s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 2.7 | 0.00 |
| Fastify | GET | file_upload | heavy | 100 | 15s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 2.7 | 0.00 |
| Fastify | POST | file_upload | heavy | 100 | 30s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 1.3 | 0.00 |
| Fastify | GET | file_upload | heavy | 100 | 30s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 1.3 | 0.00 |
| Fastify | POST | file_upload | heavy | 100 | 60s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 0.7 | 0.00 |
| Fastify | GET | file_upload | heavy | 100 | 60s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 0.7 | 0.00 |
| Fastify | POST | analytics_processing | basic | 10 | 15s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.7 | 0.00 |
| Fastify | GET | analytics_processing | basic | 10 | 15s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.7 | 0.00 |
| Fastify | POST | analytics_processing | basic | 10 | 30s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.3 | 0.00 |
| Fastify | GET | analytics_processing | basic | 10 | 30s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.3 | 0.00 |
| Fastify | POST | analytics_processing | basic | 10 | 60s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.2 | 0.00 |
| Fastify | GET | analytics_processing | basic | 10 | 60s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.2 | 0.00 |
| Fastify | POST | analytics_processing | basic | 50 | 15s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 1.3 | 0.00 |
| Fastify | GET | analytics_processing | basic | 50 | 15s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 4.0 | 0.00 |
| Fastify | POST | analytics_processing | basic | 50 | 30s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 1.3 | 0.00 |
| Fastify | GET | analytics_processing | basic | 50 | 30s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 1.3 | 0.00 |
| Fastify | POST | analytics_processing | basic | 50 | 60s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 0.5 | 0.00 |
| Fastify | GET | analytics_processing | basic | 50 | 60s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 0.5 | 0.00 |
| Fastify | POST | analytics_processing | basic | 100 | 15s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 2.7 | 0.00 |
| Fastify | GET | analytics_processing | basic | 100 | 15s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 2.7 | 0.00 |
| Fastify | POST | analytics_processing | basic | 100 | 30s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 1.3 | 0.00 |
| Fastify | GET | analytics_processing | basic | 100 | 30s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 1.3 | 0.00 |
| Fastify | POST | analytics_processing | basic | 100 | 60s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 0.7 | 0.00 |
| Fastify | GET | analytics_processing | basic | 100 | 60s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 0.7 | 0.00 |
| Fastify | POST | analytics_processing | complex | 10 | 15s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.7 | 0.00 |
| Fastify | GET | analytics_processing | complex | 10 | 15s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.7 | 0.00 |
| Fastify | POST | analytics_processing | complex | 10 | 30s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.3 | 0.00 |
| Fastify | GET | analytics_processing | complex | 10 | 30s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.3 | 0.00 |
| Fastify | POST | analytics_processing | complex | 10 | 60s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.2 | 0.00 |
| Fastify | GET | analytics_processing | complex | 10 | 60s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.2 | 0.00 |
| Fastify | POST | analytics_processing | complex | 50 | 15s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 1.3 | 0.00 |
| Fastify | GET | analytics_processing | complex | 50 | 15s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 1.3 | 0.00 |
| Fastify | POST | analytics_processing | complex | 50 | 30s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 0.7 | 0.00 |
| Fastify | GET | analytics_processing | complex | 50 | 30s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 0.7 | 0.00 |
| Fastify | POST | analytics_processing | complex | 50 | 60s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 0.3 | 0.00 |
| Fastify | GET | analytics_processing | complex | 50 | 60s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 0.3 | 0.00 |
| Fastify | POST | analytics_processing | complex | 100 | 15s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 2.7 | 0.00 |
| Fastify | GET | analytics_processing | complex | 100 | 15s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 2.7 | 0.00 |
| Fastify | POST | analytics_processing | complex | 100 | 30s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 1.3 | 0.00 |
| Fastify | GET | analytics_processing | complex | 100 | 30s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 1.4 | 0.00 |
| Fastify | POST | analytics_processing | complex | 100 | 60s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 0.7 | 0.00 |
| Fastify | GET | analytics_processing | complex | 100 | 60s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 0.7 | 0.00 |
| Fastify | POST | analytics_processing | heavy | 10 | 15s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.7 | 0.00 |
| Fastify | GET | analytics_processing | heavy | 10 | 15s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.7 | 0.00 |
| Fastify | POST | analytics_processing | heavy | 10 | 30s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.3 | 0.00 |
| Fastify | GET | analytics_processing | heavy | 10 | 30s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.3 | 0.00 |
| Fastify | POST | analytics_processing | heavy | 10 | 60s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.2 | 0.00 |
| Fastify | GET | analytics_processing | heavy | 10 | 60s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.2 | 0.00 |
| Fastify | POST | analytics_processing | heavy | 50 | 15s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 2.0 | 0.00 |
| Fastify | GET | analytics_processing | heavy | 50 | 15s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 1.3 | 0.00 |
| Fastify | POST | analytics_processing | heavy | 50 | 30s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 0.7 | 0.00 |
| Fastify | GET | analytics_processing | heavy | 50 | 30s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 1.0 | 0.00 |
| Fastify | POST | analytics_processing | heavy | 50 | 60s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 0.3 | 0.00 |
| Fastify | GET | analytics_processing | heavy | 50 | 60s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 0.3 | 0.00 |
| Fastify | POST | analytics_processing | heavy | 100 | 15s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 2.7 | 0.00 |
| Fastify | GET | analytics_processing | heavy | 100 | 15s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 3.4 | 0.00 |
| Fastify | POST | analytics_processing | heavy | 100 | 30s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 1.3 | 0.00 |
| Fastify | GET | analytics_processing | heavy | 100 | 30s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 1.3 | 0.00 |
| Fastify | POST | analytics_processing | heavy | 100 | 60s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 0.7 | 0.00 |
| Fastify | GET | analytics_processing | heavy | 100 | 60s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 0.7 | 0.00 |
| Fastify | POST | product_catalog | basic | 10 | 15s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.7 | 0.00 |
| Fastify | GET | product_catalog | basic | 10 | 15s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.7 | 0.00 |
| Fastify | POST | product_catalog | basic | 10 | 30s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.3 | 0.00 |
| Fastify | GET | product_catalog | basic | 10 | 30s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.3 | 0.00 |
| Fastify | POST | product_catalog | basic | 10 | 60s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.2 | 0.00 |
| Fastify | GET | product_catalog | basic | 10 | 60s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.2 | 0.00 |
| Fastify | POST | product_catalog | basic | 50 | 15s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 1.4 | 0.00 |
| Fastify | GET | product_catalog | basic | 50 | 15s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 1.3 | 0.00 |
| Fastify | POST | product_catalog | basic | 50 | 30s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 0.7 | 0.00 |
| Fastify | GET | product_catalog | basic | 50 | 30s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 0.7 | 0.00 |
| Fastify | POST | product_catalog | basic | 50 | 60s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 0.3 | 0.00 |
| Fastify | GET | product_catalog | basic | 50 | 60s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 0.3 | 0.00 |
| Fastify | POST | product_catalog | basic | 100 | 15s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 2.7 | 0.00 |
| Fastify | GET | product_catalog | basic | 100 | 15s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 2.7 | 0.00 |
| Fastify | POST | product_catalog | basic | 100 | 30s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 1.3 | 0.00 |
| Fastify | GET | product_catalog | basic | 100 | 30s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 1.3 | 0.00 |
| Fastify | POST | product_catalog | basic | 100 | 60s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 0.7 | 0.00 |
| Fastify | GET | product_catalog | basic | 100 | 60s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 0.7 | 0.00 |
| Fastify | POST | product_catalog | basic | 250 | 15s | 0.00 | 0.00ms | 0.00ms | 250000 | 0.000 | 6.0 | 0.00 |
| Fastify | GET | product_catalog | basic | 250 | 15s | 0.00 | 0.00ms | 0.00ms | 250000 | 0.000 | 6.7 | 0.00 |
| Fastify | POST | product_catalog | basic | 250 | 30s | 0.00 | 0.00ms | 0.00ms | 250000 | 0.000 | 3.7 | 0.00 |
| Fastify | GET | product_catalog | basic | 250 | 30s | 0.00 | 0.00ms | 0.00ms | 250000 | 0.000 | 3.0 | 0.00 |
| Fastify | POST | product_catalog | basic | 250 | 60s | 0.00 | 0.00ms | 0.00ms | 250000 | 0.000 | 1.5 | 0.00 |
| Fastify | GET | product_catalog | basic | 250 | 60s | 0.00 | 0.00ms | 0.00ms | 250000 | 0.000 | 1.5 | 0.00 |
| Fastify | POST | product_catalog | complex | 10 | 15s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.7 | 0.00 |
| Fastify | GET | product_catalog | complex | 10 | 15s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.7 | 0.00 |
| Fastify | POST | product_catalog | complex | 10 | 30s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.3 | 0.00 |
| Fastify | GET | product_catalog | complex | 10 | 30s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.3 | 0.00 |
| Fastify | POST | product_catalog | complex | 10 | 60s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.2 | 0.00 |
| Fastify | GET | product_catalog | complex | 10 | 60s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.2 | 0.00 |
| Fastify | POST | product_catalog | complex | 50 | 15s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 1.3 | 0.00 |
| Fastify | GET | product_catalog | complex | 50 | 15s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 1.3 | 0.00 |
| Fastify | POST | product_catalog | complex | 50 | 30s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 0.7 | 0.00 |
| Fastify | GET | product_catalog | complex | 50 | 30s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 0.7 | 0.00 |
| Fastify | POST | product_catalog | complex | 50 | 60s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 0.3 | 0.00 |
| Fastify | GET | product_catalog | complex | 50 | 60s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 0.3 | 0.00 |
| Fastify | POST | product_catalog | complex | 100 | 15s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 2.7 | 0.00 |
| Fastify | GET | product_catalog | complex | 100 | 15s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 2.7 | 0.00 |
| Fastify | POST | product_catalog | complex | 100 | 30s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 1.3 | 0.00 |
| Fastify | GET | product_catalog | complex | 100 | 30s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 1.3 | 0.00 |
| Fastify | POST | product_catalog | complex | 100 | 60s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 0.7 | 0.00 |
| Fastify | GET | product_catalog | complex | 100 | 60s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 0.5 | 0.00 |
| Fastify | POST | product_catalog | complex | 250 | 15s | 0.00 | 0.00ms | 0.00ms | 250000 | 0.000 | 5.4 | 0.00 |
| Fastify | GET | product_catalog | complex | 250 | 15s | 0.00 | 0.00ms | 0.00ms | 250000 | 0.000 | 5.4 | 0.00 |
| Fastify | POST | product_catalog | complex | 250 | 30s | 0.00 | 0.00ms | 0.00ms | 250000 | 0.000 | 2.7 | 0.00 |
| Fastify | GET | product_catalog | complex | 250 | 30s | 0.00 | 0.00ms | 0.00ms | 250000 | 0.000 | 3.0 | 0.00 |
| Fastify | POST | product_catalog | complex | 250 | 60s | 0.00 | 0.00ms | 0.00ms | 250000 | 0.000 | 1.3 | 0.00 |
| Fastify | GET | product_catalog | complex | 250 | 60s | 0.00 | 0.00ms | 0.00ms | 250000 | 0.000 | 1.3 | 0.00 |
| Fastify | POST | product_catalog | heavy | 10 | 15s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.7 | 0.00 |
| Fastify | GET | product_catalog | heavy | 10 | 15s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.7 | 0.00 |
| Fastify | POST | product_catalog | heavy | 10 | 30s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.3 | 0.00 |
| Fastify | GET | product_catalog | heavy | 10 | 30s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.3 | 0.00 |
| Fastify | POST | product_catalog | heavy | 10 | 60s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.2 | 0.00 |
| Fastify | GET | product_catalog | heavy | 10 | 60s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.2 | 0.00 |
| Fastify | POST | product_catalog | heavy | 50 | 15s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 1.3 | 0.00 |
| Fastify | GET | product_catalog | heavy | 50 | 15s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 1.4 | 0.00 |
| Fastify | POST | product_catalog | heavy | 50 | 30s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 0.7 | 0.00 |
| Fastify | GET | product_catalog | heavy | 50 | 30s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 0.7 | 0.00 |
| Fastify | POST | product_catalog | heavy | 50 | 60s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 0.3 | 0.00 |
| Fastify | GET | product_catalog | heavy | 50 | 60s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 0.3 | 0.00 |
| Fastify | POST | product_catalog | heavy | 100 | 15s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 2.0 | 0.00 |
| Fastify | GET | product_catalog | heavy | 100 | 15s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 2.7 | 0.00 |
| Fastify | POST | product_catalog | heavy | 100 | 30s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 1.3 | 0.00 |
| Fastify | GET | product_catalog | heavy | 100 | 30s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 1.0 | 0.00 |
| Fastify | POST | product_catalog | heavy | 100 | 60s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 0.7 | 0.00 |
| Fastify | GET | product_catalog | heavy | 100 | 60s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 0.7 | 0.00 |
| Fastify | POST | product_catalog | heavy | 250 | 15s | 0.00 | 0.00ms | 0.00ms | 250000 | 0.000 | 5.4 | 0.00 |
| Fastify | GET | product_catalog | heavy | 250 | 15s | 0.00 | 0.00ms | 0.00ms | 250000 | 0.000 | 5.4 | 0.00 |
| Fastify | POST | product_catalog | heavy | 250 | 30s | 0.00 | 0.00ms | 0.00ms | 250000 | 0.000 | 2.7 | 0.00 |
| Fastify | GET | product_catalog | heavy | 250 | 30s | 0.00 | 0.00ms | 0.00ms | 250000 | 0.000 | 2.7 | 0.00 |
| Fastify | POST | product_catalog | heavy | 250 | 60s | 0.00 | 0.00ms | 0.00ms | 250000 | 0.000 | 1.3 | 0.00 |
| Fastify | GET | product_catalog | heavy | 250 | 60s | 0.00 | 0.00ms | 0.00ms | 250000 | 0.000 | 1.3 | 0.00 |
| Fastify | POST | real_time_data | basic | 10 | 15s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.7 | 0.00 |
| Fastify | GET | real_time_data | basic | 10 | 15s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.7 | 0.00 |
| Fastify | POST | real_time_data | basic | 10 | 30s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.3 | 0.00 |
| Fastify | GET | real_time_data | basic | 10 | 30s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.3 | 0.00 |
| Fastify | POST | real_time_data | basic | 10 | 60s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.2 | 0.00 |
| Fastify | GET | real_time_data | basic | 10 | 60s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.2 | 0.00 |
| Fastify | POST | real_time_data | basic | 50 | 15s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 1.3 | 0.00 |
| Fastify | GET | real_time_data | basic | 50 | 15s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 1.3 | 0.00 |
| Fastify | POST | real_time_data | basic | 50 | 30s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 0.7 | 0.00 |
| Fastify | GET | real_time_data | basic | 50 | 30s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 0.7 | 0.00 |
| Fastify | POST | real_time_data | basic | 50 | 60s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 0.3 | 0.00 |
| Fastify | GET | real_time_data | basic | 50 | 60s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 0.3 | 0.00 |
| Fastify | POST | real_time_data | basic | 100 | 15s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 2.7 | 0.00 |
| Fastify | GET | real_time_data | basic | 100 | 15s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 2.7 | 0.00 |
| Fastify | POST | real_time_data | basic | 100 | 30s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 1.3 | 0.00 |
| Fastify | GET | real_time_data | basic | 100 | 30s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 1.0 | 0.00 |
| Fastify | POST | real_time_data | basic | 100 | 60s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 0.7 | 0.00 |
| Fastify | GET | real_time_data | basic | 100 | 60s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 0.7 | 0.00 |
| Fastify | POST | real_time_data | basic | 250 | 15s | 0.00 | 0.00ms | 0.00ms | 250000 | 0.000 | 5.4 | 0.00 |
| Fastify | GET | real_time_data | basic | 250 | 15s | 0.00 | 0.00ms | 0.00ms | 250000 | 0.000 | 5.4 | 0.00 |
| Fastify | POST | real_time_data | basic | 250 | 30s | 0.00 | 0.00ms | 0.00ms | 250000 | 0.000 | 2.7 | 0.00 |
| Fastify | GET | real_time_data | basic | 250 | 30s | 0.00 | 0.00ms | 0.00ms | 250000 | 0.000 | 2.7 | 0.00 |
| Fastify | POST | real_time_data | basic | 250 | 60s | 0.00 | 0.00ms | 0.00ms | 250000 | 0.000 | 1.3 | 0.00 |
| Fastify | GET | real_time_data | basic | 250 | 60s | 0.00 | 0.00ms | 0.00ms | 250000 | 0.000 | 1.3 | 0.00 |
| Fastify | POST | real_time_data | basic | 500 | 15s | 0.00 | 0.00ms | 0.00ms | 482800 | 0.000 | 9.9 | 0.00 |
| Fastify | GET | real_time_data | basic | 500 | 15s | 0.00 | 0.00ms | 0.00ms | 483333 | 0.000 | 9.9 | 0.00 |
| Fastify | POST | real_time_data | basic | 500 | 30s | 0.00 | 0.00ms | 0.00ms | 500000 | 0.000 | 5.4 | 0.00 |
| Fastify | GET | real_time_data | basic | 500 | 30s | 0.00 | 0.00ms | 0.00ms | 500000 | 0.000 | 5.4 | 0.00 |
| Fastify | POST | real_time_data | basic | 500 | 60s | 0.00 | 0.00ms | 0.00ms | 500000 | 0.000 | 2.7 | 0.00 |
| Fastify | GET | real_time_data | basic | 500 | 60s | 0.00 | 0.00ms | 0.00ms | 500000 | 0.000 | 2.7 | 0.00 |
| Fastify | POST | real_time_data | complex | 10 | 15s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.7 | 0.00 |
| Fastify | GET | real_time_data | complex | 10 | 15s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.7 | 0.00 |
| Fastify | POST | real_time_data | complex | 10 | 30s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.3 | 0.00 |
| Fastify | GET | real_time_data | complex | 10 | 30s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.3 | 0.00 |
| Fastify | POST | real_time_data | complex | 10 | 60s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.2 | 0.00 |
| Fastify | GET | real_time_data | complex | 10 | 60s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.2 | 0.00 |
| Fastify | POST | real_time_data | complex | 50 | 15s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 1.3 | 0.00 |
| Fastify | GET | real_time_data | complex | 50 | 15s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 1.3 | 0.00 |
| Fastify | POST | real_time_data | complex | 50 | 30s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 0.7 | 0.00 |
| Fastify | GET | real_time_data | complex | 50 | 30s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 0.7 | 0.00 |
| Fastify | POST | real_time_data | complex | 50 | 60s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 0.3 | 0.00 |
| Fastify | GET | real_time_data | complex | 50 | 60s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 0.3 | 0.00 |
| Fastify | POST | real_time_data | complex | 100 | 15s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 2.7 | 0.00 |
| Fastify | GET | real_time_data | complex | 100 | 15s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 2.7 | 0.00 |
| Fastify | POST | real_time_data | complex | 100 | 30s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 1.3 | 0.00 |
| Fastify | GET | real_time_data | complex | 100 | 30s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 1.3 | 0.00 |
| Fastify | POST | real_time_data | complex | 100 | 60s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 0.7 | 0.00 |
| Fastify | GET | real_time_data | complex | 100 | 60s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 0.7 | 0.00 |
| Fastify | POST | real_time_data | complex | 250 | 15s | 0.00 | 0.00ms | 0.00ms | 250000 | 0.000 | 5.4 | 0.00 |
| Fastify | GET | real_time_data | complex | 250 | 15s | 0.00 | 0.00ms | 0.00ms | 250000 | 0.000 | 5.4 | 0.00 |
| Fastify | POST | real_time_data | complex | 250 | 30s | 0.00 | 0.00ms | 0.00ms | 250000 | 0.000 | 2.7 | 0.00 |
| Fastify | GET | real_time_data | complex | 250 | 30s | 0.00 | 0.00ms | 0.00ms | 250000 | 0.000 | 2.7 | 0.00 |
| Fastify | POST | real_time_data | complex | 250 | 60s | 0.00 | 0.00ms | 0.00ms | 250000 | 0.000 | 1.3 | 0.00 |
| Fastify | GET | real_time_data | complex | 250 | 60s | 0.00 | 0.00ms | 0.00ms | 250000 | 0.000 | 1.3 | 0.00 |
| Fastify | POST | real_time_data | complex | 500 | 15s | 0.00 | 0.00ms | 0.00ms | 484487 | 0.000 | 9.9 | 0.00 |
| Fastify | GET | real_time_data | complex | 500 | 15s | 0.00 | 0.00ms | 0.00ms | 487668 | 0.000 | 9.9 | 0.00 |
| Fastify | POST | real_time_data | complex | 500 | 30s | 0.00 | 0.00ms | 0.00ms | 500000 | 0.000 | 5.4 | 0.00 |
| Fastify | GET | real_time_data | complex | 500 | 30s | 0.00 | 0.00ms | 0.00ms | 500000 | 0.000 | 5.4 | 0.00 |
| Fastify | POST | real_time_data | complex | 500 | 60s | 0.00 | 0.00ms | 0.00ms | 500000 | 0.000 | 2.7 | 0.00 |
| Fastify | GET | real_time_data | complex | 500 | 60s | 0.00 | 0.00ms | 0.00ms | 500000 | 0.000 | 2.7 | 0.00 |
| Fastify | POST | real_time_data | heavy | 10 | 15s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.7 | 0.00 |
| Fastify | GET | real_time_data | heavy | 10 | 15s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.7 | 0.00 |
| Fastify | POST | real_time_data | heavy | 10 | 30s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.3 | 0.00 |
| Fastify | GET | real_time_data | heavy | 10 | 30s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.3 | 0.00 |
| Fastify | POST | real_time_data | heavy | 10 | 60s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.2 | 0.00 |
| Fastify | GET | real_time_data | heavy | 10 | 60s | 0.00 | 0.00ms | 0.00ms | 10000 | 0.000 | 0.2 | 0.00 |
| Fastify | POST | real_time_data | heavy | 50 | 15s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 1.3 | 0.00 |
| Fastify | GET | real_time_data | heavy | 50 | 15s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 1.3 | 0.00 |
| Fastify | POST | real_time_data | heavy | 50 | 30s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 0.7 | 0.00 |
| Fastify | GET | real_time_data | heavy | 50 | 30s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 0.7 | 0.00 |
| Fastify | POST | real_time_data | heavy | 50 | 60s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 0.3 | 0.00 |
| Fastify | GET | real_time_data | heavy | 50 | 60s | 0.00 | 0.00ms | 0.00ms | 50000 | 0.000 | 0.3 | 0.00 |
| Fastify | POST | real_time_data | heavy | 100 | 15s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 2.7 | 0.00 |
| Fastify | GET | real_time_data | heavy | 100 | 15s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 2.0 | 0.00 |
| Fastify | POST | real_time_data | heavy | 100 | 30s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 1.3 | 0.00 |
| Fastify | GET | real_time_data | heavy | 100 | 30s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 1.3 | 0.00 |
| Fastify | POST | real_time_data | heavy | 100 | 60s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 0.7 | 0.00 |
| Fastify | GET | real_time_data | heavy | 100 | 60s | 0.00 | 0.00ms | 0.00ms | 100000 | 0.000 | 0.7 | 0.00 |
| Fastify | POST | real_time_data | heavy | 250 | 15s | 0.00 | 0.00ms | 0.00ms | 250000 | 0.000 | 5.4 | 0.00 |
| Fastify | GET | real_time_data | heavy | 250 | 15s | 0.00 | 0.00ms | 0.00ms | 250000 | 0.000 | 5.4 | 0.00 |
| Fastify | POST | real_time_data | heavy | 250 | 30s | 0.00 | 0.00ms | 0.00ms | 250000 | 0.000 | 2.7 | 0.00 |
| Fastify | GET | real_time_data | heavy | 250 | 30s | 0.00 | 0.00ms | 0.00ms | 250000 | 0.000 | 2.7 | 0.00 |
| Fastify | POST | real_time_data | heavy | 250 | 60s | 0.00 | 0.00ms | 0.00ms | 250000 | 0.000 | 1.3 | 0.00 |
| Fastify | GET | real_time_data | heavy | 250 | 60s | 0.00 | 0.00ms | 0.00ms | 250000 | 0.000 | 1.3 | 0.00 |
| Fastify | POST | real_time_data | heavy | 500 | 15s | 0.00 | 0.00ms | 0.00ms | 483312 | 0.000 | 9.9 | 0.00 |
| Fastify | GET | real_time_data | heavy | 500 | 15s | 0.00 | 0.00ms | 0.00ms | 483300 | 0.000 | 9.9 | 0.00 |
| Fastify | POST | real_time_data | heavy | 500 | 30s | 0.00 | 0.00ms | 0.00ms | 500000 | 0.000 | 5.4 | 0.00 |
| Fastify | GET | real_time_data | heavy | 500 | 30s | 0.00 | 0.00ms | 0.00ms | 500000 | 0.000 | 5.4 | 0.00 |
| Fastify | POST | real_time_data | heavy | 500 | 60s | 0.00 | 0.00ms | 0.00ms | 500000 | 0.000 | 2.7 | 0.00 |
| Fastify | GET | real_time_data | heavy | 500 | 60s | 0.00 | 0.00ms | 0.00ms | 500000 | 0.000 | 2.7 | 0.00 |

## 🏁 Análise Detalhada de Performance

### 📈 Análise de Escalabilidade

#### CRUD de usuários
**Express**:
- Throughput máximo: 0.00 req/s (0 conexões)
- Ponto de quebra: 0 conexões
- Eficiência CPU: 0.000 req/s por conexão
- Sustentabilidade: 1.4/10

**Fastify**:
- Throughput máximo: 0.00 req/s (0 conexões)
- Ponto de quebra: 0 conexões
- Eficiência CPU: 0.000 req/s por conexão
- Sustentabilidade: 1.5/10

#### Upload de arquivos
**Express**:
- Throughput máximo: 0.00 req/s (0 conexões)
- Ponto de quebra: 0 conexões
- Eficiência CPU: 0.000 req/s por conexão
- Sustentabilidade: 0.9/10

**Fastify**:
- Throughput máximo: 0.00 req/s (0 conexões)
- Ponto de quebra: 0 conexões
- Eficiência CPU: 0.000 req/s por conexão
- Sustentabilidade: 1.0/10

#### Processamento analítico
**Express**:
- Throughput máximo: 0.00 req/s (0 conexões)
- Ponto de quebra: 0 conexões
- Eficiência CPU: 0.000 req/s por conexão
- Sustentabilidade: 0.9/10

**Fastify**:
- Throughput máximo: 0.00 req/s (0 conexões)
- Ponto de quebra: 0 conexões
- Eficiência CPU: 0.000 req/s por conexão
- Sustentabilidade: 1.0/10

#### Catálogo de produtos
**Express**:
- Throughput máximo: 0.00 req/s (0 conexões)
- Ponto de quebra: 0 conexões
- Eficiência CPU: 0.000 req/s por conexão
- Sustentabilidade: 1.4/10

**Fastify**:
- Throughput máximo: 0.00 req/s (0 conexões)
- Ponto de quebra: 0 conexões
- Eficiência CPU: 0.000 req/s por conexão
- Sustentabilidade: 1.5/10

#### Dados em tempo real
**Express**:
- Throughput máximo: 0.00 req/s (0 conexões)
- Ponto de quebra: 0 conexões
- Eficiência CPU: 0.000 req/s por conexão
- Sustentabilidade: 2.4/10

**Fastify**:
- Throughput máximo: 0.00 req/s (0 conexões)
- Ponto de quebra: 0 conexões
- Eficiência CPU: 0.000 req/s por conexão
- Sustentabilidade: 2.4/10

### ⚙️ Análise por Complexidade

#### Variant: BASIC
- **Express**: 0.00 req/s, 0.00ms, 0.000 eficiência
- **Fastify**: 0.00 req/s, 0.00ms, 0.000 eficiência

#### Variant: COMPLEX
- **Express**: 0.00 req/s, 0.00ms, 0.000 eficiência
- **Fastify**: 0.00 req/s, 0.00ms, 0.000 eficiência

#### Variant: HEAVY
- **Express**: 0.00 req/s, 0.00ms, 0.000 eficiência
- **Fastify**: 0.00 req/s, 0.00ms, 0.000 eficiência

### ⏱️ Análise de Sustentabilidade

#### Duração: 15s
- **Express**: Score 2.6/10, Consistência 7.3%
- **Fastify**: Score 2.7/10, Consistência 7.3%

#### Duração: 30s
- **Express**: Score 1.3/10, Consistência 49.5%
- **Fastify**: Score 1.4/10, Consistência 49.7%

#### Duração: 60s
- **Express**: Score 0.6/10, Consistência 73.2%
- **Fastify**: Score 0.7/10, Consistência 39.5%

### 💡 Recomendações Baseadas em Dados

🚀 **Express** mostra NaN% melhor performance geral

**CRUD de usuários**: Use Express (+NaN% performance)
**Upload de arquivos**: Use Express (+NaN% performance)
**Processamento analítico**: Use Express (+NaN% performance)
**Catálogo de produtos**: Use Express (+NaN% performance)
**Dados em tempo real**: Use Express (+NaN% performance)


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
_Relatório gerado automaticamente em 29/07/2025, 00:13:45_
