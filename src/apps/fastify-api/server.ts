import 'dotenv/config';
import Fastify from 'fastify';

import { PrismaClient } from '@prisma/client';

const fastify = Fastify({
    /*     logger: {
            level: 'info',
            transport: {
                target: 'pino-pretty',
                options: {
                    colorize: true
                }
            }
        } */
});

const prisma = new PrismaClient()
const PORT = parseInt(process.env.FASTIFY_PORT || '3002');

// Registrar plugins
async function registerPlugins() {
    // CORS
    await fastify.register(require('@fastify/cors'), {
        origin: true
    });

    // Compression
    await fastify.register(require('@fastify/compress'), {
        global: true
    });

    // Helmet para segurança
    await fastify.register(require('@fastify/helmet'));

    // Suporte a JSON com limite maior
    fastify.addContentTypeParser('application/json', { parseAs: 'string' }, (req: any, body: string, done: any) => {
        try {
            const json = JSON.parse(body);
            done(null, json);
        } catch (err: any) {
            err.statusCode = 400;
            done(err, undefined);
        }
    });
}

// Hooks para simular middleware
fastify.addHook('preHandler', async (request: any, reply) => {
    // Simula autenticação
    const authHeader = request.headers.authorization;
    if (authHeader) {
        request.user = { id: 'auth-user-id', email: 'user@example.com' };
    }
});

fastify.addHook('onRequest', async (request: any, reply) => {
    request.startTime = Date.now();
});

fastify.addHook('onResponse', async (request: any, reply) => {
    const duration = Date.now() - request.startTime;
    fastify.log.info(`[Fastify] ${request.method} ${request.url} - ${reply.statusCode} - ${duration}ms`);
});

// Utilidade para simular processamento CPU-intensivo
/* function simulateProcessing(duration: number = 10) {
    const start = Date.now();
    while (Date.now() - start < duration) {
        // Simula processamento
    }
} */

// ===== CENÁRIO 1: USER CRUD =====
fastify.get('/api/fastify/user_crud', async (request: any, reply) => {
    try {
        const { q } = request.query;
        let filters: any = {};

        if (q) {
            try {
                const queryData = JSON.parse(decodeURIComponent(q));
                if (queryData.scenario === 'user_crud') {
                    filters = {
                        where: {
                            email: { contains: 'user' }
                        },
                        take: 50
                    };
                }
            } catch (e) {
                // Query inválida, usar filtros padrão
            }
        }

        const users = await prisma.user.findMany({
            ...filters,
            include: {
                analytics: { take: 5 },
                fileUploads: { take: 3 }
            },
            take: 50
        });

        return {
            success: true,
            data: users,
            count: users.length,
            timestamp: new Date().toISOString()
        };
    } catch (error: any) {
        console.error(error)
        reply.status(500).send({
            error: 'Erro ao buscar usuários',
            details: error.message
        });
    }
});

fastify.post('/api/fastify/user_crud', async (request: any, reply) => {
    try {
        const { user: userData } = request.body;

        if (!userData || !userData.email || !userData.name) {
            return reply.status(400).send({
                error: 'Dados obrigatórios não fornecidos'
            });
        }

        await prisma.user.create({
            data: {
                email: userData.email,
                name: userData.name,
                phone: userData.phone,
                street: userData.address?.street,
                city: userData.address?.city,
                zipCode: userData.address?.zipCode,
                country: userData.address?.country || 'Brasil',
                language: userData.preferences?.language || 'pt-BR',
                timezone: userData.preferences?.timezone || 'America/Sao_Paulo',
                notifications: userData.preferences?.notifications !== false,
                theme: userData.preferences?.theme || 'light'
            }
        });


        reply.status(204).send();
    } catch (error: any) {
        if (error.code === 'P2002') {
            return reply.status(409).send({
                error: 'Email já está em uso'
            });
        }
        reply.status(500).send({
            error: 'Erro ao criar usuário',
            details: error.message
        });
    }
});

// ===== CENÁRIO 2: FILE UPLOAD =====
fastify.get('/api/fastify/file_upload', async (request, reply) => {
    try {
        const files = await prisma.fileUpload.findMany({
            include: {
                user: { select: { id: true, name: true, email: true } },
                chunks: { take: 5 }
            },
            orderBy: { createdAt: 'desc' },
            take: 50
        });

        return {
            success: true,
            data: files.map((file: any) => ({
                ...file,
                tags: JSON.parse(file.tags || '[]'),
                chunksCount: file.chunks.length
            })),
            count: files.length
        };
    } catch (error: any) {
        console.error(error)
        reply.status(500).send({
            error: 'Erro ao buscar arquivos',
            details: error.message
        });
    }
});

fastify.post('/api/fastify/file_upload', async (request: any, reply) => {
    try {
        const { file: fileData, chunks = [] } = request.body;

        if (!fileData || !fileData.name) {
            return reply.status(400).send({
                error: 'Dados do arquivo não fornecidos'
            });
        }

        let user = await prisma.user.findFirst();
        if (!user) {
            user = await prisma.user.create({
                data: {
                    email: 'default@example.com',
                    name: 'Default User'
                }
            });
        }

        const fileUpload = await prisma.fileUpload.create({
            data: {
                filename: fileData.name,
                originalName: fileData.name,
                size: fileData.size || 1024,
                mimeType: fileData.type || 'application/octet-stream',
                checksum: fileData.checksum || 'fake-checksum',
                uploadedBy: user.id,
                tags: JSON.stringify(fileData.metadata?.tags || []),
                description: fileData.metadata?.description
            }
        });

        // Processa chunks se fornecidos
        if (chunks.length > 0) {
            await Promise.all(
                chunks.slice(0, 10).map(async (chunk: any, index: number) => {
                    return prisma.fileChunk.create({
                        data: {
                            fileId: fileUpload.id,
                            index,
                            data: chunk.data || 'fake-chunk-data',
                            checksum: chunk.checksum || 'fake-chunk-checksum'
                        }
                    });
                })
            );
        }

        reply.status(204).send();
    } catch (error: any) {
        console.error(error)
        reply.status(500).send({
            error: 'Erro ao enviar arquivo',
            details: error.message
        });
    }
});

// ===== CENÁRIO 3: ANALYTICS PROCESSING =====
fastify.get('/api/fastify/analytics_processing', async (request, reply) => {
    try {
        const analytics = await prisma.analytics.findMany({
            include: {
                user: { select: { id: true, name: true, email: true } }
            },
            orderBy: { createdAt: 'desc' },
            take: 100
        });

        const processedData = analytics.map((item: any) => {
            const events = JSON.parse(item.events || '[]');
            const userProps = JSON.parse(item.userProps || '{}');

            return {
                ...item,
                events,
                userProps,
                eventsCount: events.length,
                totalValue: events.reduce((sum: number, event: any) =>
                    sum + (event.properties?.value || 0), 0
                )
            };
        });

        return {
            success: true,
            data: processedData,
            summary: {
                totalSessions: analytics.length,
                totalEvents: processedData.reduce((sum: number, item: any) => sum + item.eventsCount, 0),
                totalValue: processedData.reduce((sum: number, item: any) => sum + item.totalValue, 0)
            }
        };
    } catch (error: any) {
        console.error(error)
        reply.status(500).send({
            error: 'Erro ao processar analytics',
            details: error.message
        });
    }
});

fastify.post('/api/fastify/analytics_processing', async (request: any, reply) => {
    try {
        const { analytics: analyticsData } = request.body;

        if (!analyticsData || !analyticsData.sessionId) {
            return reply.status(400).send({
                error: 'Dados de analytics não fornecidos'
            });
        }

        let userId = null;
        if (request.user) {
            let user = await prisma.user.findFirst({ where: { email: request.user.email } });
            if (!user) {
                user = await prisma.user.create({
                    data: {
                        email: request.user.email,
                        name: 'Analytics User'
                    }
                });
            }
            userId = user.id;
        }

        const analytics = await prisma.analytics.create({
            data: {
                sessionId: analyticsData.sessionId,
                userId,
                events: JSON.stringify(analyticsData.events || []),
                userProps: JSON.stringify(analyticsData.userProperties || {})
            }
        });

        reply.status(201).send({
            success: true,
            data: {
                ...analytics,
                events: JSON.parse(analytics.events),
                userProps: JSON.parse(analytics.userProps)
            },
            message: 'Analytics processado com sucesso'
        });
    } catch (error: any) {
        console.error(error)
        reply.status(500).send({
            error: 'Erro ao processar analytics',
            details: error.message
        });
    }
});

// ===== CENÁRIO 4: PRODUCT CATALOG =====
fastify.get('/api/fastify/product_catalog', async (request: any, reply) => {
    try {
        const { q } = request.query;
        let filters: any = { take: 50 };

        if (q) {
            try {
                const queryData = JSON.parse(decodeURIComponent(q));
                const { scenario, pattern } = queryData;

                // Simula filtros complexos baseados no cenário
                if (scenario === 'product_catalog') {
                    filters.where = {
                        inStock: true,
                        price: { gte: 0 }
                    };

                    if (pattern === 'burst') {
                        // Em picos de tráfego, simula busca mais pesada
/*                         simulateProcessing(20);
 */                    }
                }
            } catch (e) {
                // Query inválida
            }
        }

        const products = await prisma.product.findMany({
            ...filters,
            orderBy: [
                { rating: 'desc' },
                { createdAt: 'desc' }
            ]
        });

        return {
            success: true,
            data: products.map((product: any) => ({
                ...product,
                tags: JSON.parse(product.tags || '[]')
            })),
            pagination: {
                total: products.length,
                page: 1,
                limit: 50
            }
        };
    } catch (error: any) {
        console.error(error)
        reply.status(500).send({
            error: 'Erro ao buscar produtos',
            details: error.message
        });
    }
});

fastify.post('/api/fastify/product_catalog', async (request: any, reply) => {
    try {
        const {
            name,
            description,
            price,
            category,
            brand,
            inStock = true,
            rating = 0,
            imageUrl,
            tags = []
        } = request.body;

        // Validação básica
        if (!name || !price || !category || !brand) {
            return reply.status(400).send({
                error: 'Campos obrigatórios: name, price, category, brand'
            });
        }

        await prisma.product.create({
            data: {
                name,
                description,
                price: parseFloat(price),
                category,
                brand,
                inStock: Boolean(inStock),
                rating: parseFloat(rating) || 0,
                imageUrl,
                tags: JSON.stringify(tags)
            }
        });

        reply.status(204).send();
    } catch (error: any) {
        console.error(error);
        reply.status(500).send({
            error: 'Erro ao criar produto',
            details: error.message
        });
    }
});



// Health check
fastify.get('/health', async (request, reply) => {
    return {
        status: 'OK',
        framework: 'Fastify',
        timestamp: new Date().toISOString(),
        uptime: process.uptime()
    };
});

// Error handler
fastify.setErrorHandler((error: any, request, reply) => {
    fastify.log.error(error);
    reply.status(500).send({
        error: 'Erro interno do servidor',
        framework: 'Fastify'
    });
});

// 404 handler
fastify.setNotFoundHandler((request, reply) => {
    reply.status(404).send({
        error: 'Endpoint não encontrado',
        framework: 'Fastify',
        path: request.url
    });
});

// Inicialização do servidor
const start = async () => {
    try {
        await registerPlugins();

        await fastify.listen({
            port: PORT,
            host: '0.0.0.0'
        });

        console.log(`🚀 Fastify API rodando na porta ${PORT}`);
        console.log(`🏥 Health check: http://localhost:${PORT}/health`);
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};

// Graceful shutdown
const gracefulShutdown = async () => {
    console.log('🛑 Fastify API sendo finalizada...');
    await fastify.close();
    await prisma.$disconnect();
    process.exit(0);
};

process.on('SIGTERM', gracefulShutdown);
process.on('SIGINT', gracefulShutdown);

start();
