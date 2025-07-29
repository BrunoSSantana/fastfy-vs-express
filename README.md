# 🚀 Benchmark: Fastify vs Express

Comparação de performance entre Fastify e Express em cenários realistas de aplicações web.

## 📋 Visão Geral

Este projeto implementa dois servidores idênticos (Express e Fastify) com 5 cenários diferentes de uso, simulando operações comuns em aplicações web reais:

- **CRUD de Usuários**: Operações básicas com validação
- **Upload de Arquivos**: Processamento de arquivos com chunks
- **Analytics**: Processamento intensivo de dados
- **Catálogo de Produtos**: Consultas complexas com filtros
- **Dados IoT**: Processamento em tempo real

## 🛠️ Tecnologias

- **Node.js** com TypeScript
- **Express.js** - Framework web minimalista
- **Fastify** - Framework web focado em performance
- **Prisma** - ORM moderno para TypeScript
- **SQLite** - Banco de dados para desenvolvimento
- **Autocannon** - Ferramenta de benchmark HTTP

## 📦 Instalação

1. Clone o repositório e instale as dependências:

```bash
git clone <repo-url>
cd fastfy-vs-express
pnpm install
```

2. Configure o banco de dados:

```bash
# Gerar o cliente Prisma
pnpm db:generate

# Criar as tabelas
pnpm db:push

# Popular com dados de teste
pnpm db:seed
```

## 🚀 Execução

### 1. Iniciar as APIs

Em terminais separados:

```bash
# Terminal 1 - Express (porta 3001)
pnpm dev:express

# Terminal 2 - Fastify (porta 3002) 
pnpm dev:fastify
```

Ou execute ambas simultaneamente:

```bash
pnpm dev:both
```

### 2. Verificar Health Checks

```bash
# Express
curl http://localhost:3001/health

# Fastify
curl http://localhost:3002/health
```

### 3. Executar Benchmark

```bash
pnpm benchmark
```

O benchmark executará automaticamente todos os cenários de teste e gerará um relatório detalhado em Markdown.

## 📊 Cenários de Teste

### 1. User CRUD (`/api/{framework}/user_crud`)
- **GET**: Lista usuários com filtros
- **POST**: Cria novos usuários com validação

### 2. File Upload (`/api/{framework}/file_upload`)
- **GET**: Lista uploads com chunks
- **POST**: Processa upload simulado com chunks

### 3. Analytics Processing (`/api/{framework}/analytics_processing`)
- **GET**: Agrega dados de analytics (CPU intensivo)
- **POST**: Processa eventos de analytics

### 4. Product Catalog (`/api/{framework}/product_catalog`)
- **GET**: Busca produtos com filtros complexos
- **POST**: Pesquisa avançada com paginação

### 5. Real Time Data (`/api/{framework}/real_time_data`)
- **GET**: Dados de sensores IoT em tempo real
- **POST**: Ingere dados de múltiplos sensores

## 🔧 Configuração

### Variáveis de Ambiente (.env)

```env
# Configurações do banco
DATABASE_URL="file:./dev.db"

# Portas das APIs
EXPRESS_PORT=3001
FASTIFY_PORT=3002

# Ambiente
NODE_ENV=development
```

### Parâmetros do Benchmark

Edite `src/tests/bench.ts` para ajustar:

- **DURATIONS**: Duração dos testes (30s, 60s, 120s)
- **CONNECTIONS**: Conexões simultâneas (10, 50, 100, 250, 500)
- **TRAFFIC_PATTERNS**: Padrões de tráfego (steady, burst, light)

## 📈 Interpretando Resultados

O benchmark gera métricas detalhadas:

- **Req/s**: Requests por segundo (throughput)
- **Latência Avg**: Latência média em ms
- **p99**: 99º percentil de latência
- **Erros**: Total de erros HTTP
- **Timeouts**: Timeouts de conexão
- **MB/s**: Throughput de dados

### Análise por Cenário

Cada cenário testa aspectos específicos:

- **User CRUD**: Operações básicas de banco
- **File Upload**: Processamento de payloads grandes
- **Analytics**: Processamento CPU-intensivo
- **Product Catalog**: Queries complexas
- **Real Time Data**: Operações de baixa latência

## 🎯 Casos de Uso Reais

### Quando usar Express:
- Projetos com muitos middlewares customizados
- Equipes com experiência consolidada
- Aplicações que priorizam flexibilidade

### Quando usar Fastify:
- APIs de alta performance
- Microsserviços com cargas pesadas
- Aplicações críticas de latência

## 🔍 Scripts Úteis

```bash
# Desenvolvimento
pnpm dev:express          # Executar apenas Express
pnpm dev:fastify         # Executar apenas Fastify
pnpm dev:both            # Executar ambos

# Banco de dados
pnpm db:generate         # Gerar cliente Prisma
pnpm db:push            # Aplicar schema
pnpm db:seed            # Popular dados

# Testes
pnpm benchmark          # Executar benchmark completo
pnpm build             # Build TypeScript
```

## 📁 Estrutura do Projeto

```
src/
├── apps/
│   ├── express-api/     # Implementação Express
│   └── fastify-api/     # Implementação Fastify
├── db/
│   └── seed.ts         # Script de seed
└── tests/
    └── bench.ts        # Script de benchmark

prisma/
└── schema.prisma       # Schema do banco

package.json            # Dependências e scripts
```

## ⚠️ Considerações

- Execute em ambiente isolado para resultados precisos
- Resultados variam conforme hardware e configuração
- Teste sempre no ambiente de produção real
- Considere fatores além de performance (manutenibilidade, comunidade)

## 📄 Exemplo de Resultado

```markdown
## 🏁 Análise Final

- **Maior Throughput**: Fastify (2,847.32 req/s)
- **Menor Latência Média**: Fastify (1.24 ms)

- **Express**: 15.23% mais lento
```

---

**Desenvolvido com ❤️ para comparação justa de frameworks Node.js** 