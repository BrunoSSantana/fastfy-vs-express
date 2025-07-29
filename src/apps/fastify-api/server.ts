import 'dotenv/config';
import Fastify from 'fastify';

import { PrismaClient } from '@prisma/client';

const fastify = Fastify({
    logger: {
        level: 'info',
        transport: {
            target: 'pino-pretty',
            options: {
                colorize: true
            }
        }
    }
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
function simulateProcessing(duration: number = 10) {
    const start = Date.now();
    while (Date.now() - start < duration) {
        // Simula processamento
    }
}

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
            }
        });

        return {
            success: true,
            data: users,
            count: users.length,
            timestamp: new Date().toISOString()
        };
    } catch (error: any) {
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

        // Simula validações e processamento
        simulateProcessing(5);

        const user = await prisma.user.create({
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

        reply.status(201).send({
            success: true,
            data: user,
            message: 'Usuário criado com sucesso'
        });
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

        // Simula processamento de upload (operação mais pesada)
        simulateProcessing(15);

        // Cria usuário padrão se não existir
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

        reply.status(201).send({
            success: true,
            data: {
                ...fileUpload,
                tags: JSON.parse(fileUpload.tags)
            },
            message: 'Arquivo enviado com sucesso'
        });
    } catch (error: any) {
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

        // Simula processamento analítico pesado
        simulateProcessing(25);

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

        // Simula processamento pesado de analytics
        simulateProcessing(30);

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
                        simulateProcessing(20);
                    }
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
        reply.status(500).send({
            error: 'Erro ao buscar produtos',
            details: error.message
        });
    }
});

fastify.post('/api/fastify/product_catalog', async (request: any, reply) => {
    try {
        const { filters = {}, pagination = {}, searchTerm } = request.body;

        // Simula busca complexa com filtros
        simulateProcessing(10);

        const where: any = {};

        if (filters.category) {
            where.category = filters.category;
        }

        if (filters.priceRange) {
            where.price = {
                gte: filters.priceRange.min || 0,
                lte: filters.priceRange.max || 999999
            };
        }

        if (filters.brand) {
            where.brand = { contains: filters.brand };
        }

        if (filters.inStock !== undefined) {
            where.inStock = filters.inStock;
        }

        if (searchTerm) {
            where.OR = [
                { name: { contains: searchTerm } },
                { description: { contains: searchTerm } }
            ];
        }

        const products = await prisma.product.findMany({
            where,
            take: pagination.limit || 20,
            skip: ((pagination.page || 1) - 1) * (pagination.limit || 20),
            orderBy: pagination.sortBy ?
                { [pagination.sortBy]: pagination.order || 'asc' } :
                { createdAt: 'desc' }
        });

        return {
            success: true,
            data: products.map((product: any) => ({
                ...product,
                tags: JSON.parse(product.tags || '[]')
            })),
            filters: filters,
            pagination: {
                ...pagination,
                total: products.length
            }
        };
    } catch (error: any) {
        reply.status(500).send({
            error: 'Erro na busca de produtos',
            details: error.message
        });
    }
});

// ===== CENÁRIO 5: REAL TIME DATA =====
fastify.get('/api/fastify/real_time_data', async (request, reply) => {
    try {
        const sensors = await prisma.sensor.findMany({
            where: { isActive: true },
            include: {
                readings: {
                    orderBy: { timestamp: 'desc' },
                    take: 10
                }
            },
            take: 100
        });

        // Simula agregação de dados em tempo real
        simulateProcessing(5);

        const processedSensors = sensors.map((sensor: any) => ({
            ...sensor,
            latestReading: sensor.readings[0],
            avgValue: sensor.readings.reduce((sum: number, r: any) => sum + r.value, 0) / (sensor.readings.length || 1),
            status: sensor.batteryLevel > 20 ? 'online' : 'low_battery'
        }));

        return {
            success: true,
            data: processedSensors,
            summary: {
                totalSensors: sensors.length,
                activeSensors: sensors.filter((s: any) => s.isActive).length,
                lowBattery: sensors.filter((s: any) => s.batteryLevel <= 20).length
            },
            timestamp: new Date().toISOString()
        };
    } catch (error: any) {
        reply.status(500).send({
            error: 'Erro ao buscar dados dos sensores',
            details: error.message
        });
    }
});

fastify.post('/api/fastify/real_time_data', async (request: any, reply) => {
    try {
        const { sensors: sensorsData = [] } = request.body;

        if (!Array.isArray(sensorsData) || sensorsData.length === 0) {
            return reply.status(400).send({
                error: 'Dados dos sensores não fornecidos'
            });
        }

        // Simula processamento em tempo real
        simulateProcessing(3);

        const results = await Promise.all(
            sensorsData.slice(0, 20).map(async (sensorData: any) => {
                // Busca ou cria sensor
                let sensor = await prisma.sensor.findFirst({
                    where: { type: sensorData.type }
                });

                if (!sensor) {
                    sensor = await prisma.sensor.create({
                        data: {
                            type: sensorData.type,
                            value: sensorData.value,
                            unit: sensorData.unit,
                            latitude: sensorData.location?.lat,
                            longitude: sensorData.location?.lng,
                            batteryLevel: sensorData.batteryLevel || 100,
                            lastMaintenance: new Date(sensorData.lastMaintenance || Date.now())
                        }
                    });
                } else {
                    // Atualiza sensor existente
                    sensor = await prisma.sensor.update({
                        where: { id: sensor.id },
                        data: {
                            value: sensorData.value,
                            batteryLevel: sensorData.batteryLevel || sensor.batteryLevel,
                            updatedAt: new Date()
                        }
                    });
                }

                // Cria leitura
                const reading = await prisma.sensorReading.create({
                    data: {
                        sensorId: sensor.id,
                        value: sensorData.value,
                        metadata: JSON.stringify({
                            location: sensorData.location,
                            rawData: sensorData
                        })
                    }
                });

                return { sensor, reading };
            })
        );

        reply.status(201).send({
            success: true,
            data: results,
            processed: results.length,
            message: 'Dados dos sensores processados com sucesso'
        });
    } catch (error: any) {
        reply.status(500).send({
            error: 'Erro ao processar dados dos sensores',
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
