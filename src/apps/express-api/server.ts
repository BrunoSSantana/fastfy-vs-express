import { PrismaClient } from '@prisma/client';
import compression from 'compression';
import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import helmet from 'helmet';

const app = express();
const prisma = new PrismaClient();
const PORT = process.env.EXPRESS_PORT || 3001;

// Middlewares
app.use(helmet());
app.use(cors());
app.use(compression());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Middleware para simular autenticação
app.use((req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        // Simula validação de token
        req.user = { id: 'auth-user-id', email: 'user@example.com' };
    }
    next();
});

// Middleware para logs (simulando operações custosas em alguns cenários)
app.use((req, res, next) => {
    const start = Date.now();
    res.on('finish', () => {
        const duration = Date.now() - start;
        console.log(`[Express] ${req.method} ${req.path} - ${res.statusCode} - ${duration}ms`);
    });
    next();
});

// Utilidade para simular processamento CPU-intensivo
/* function simulateProcessing(duration: number = 10) {
    const start = Date.now();
    while (Date.now() - start < duration) {
        // Simula processamento
    }
} */

// ===== CENÁRIO 1: USER CRUD =====
app.get('/api/express/user_crud', async (req, res) => {
    try {
        const { q } = req.query;
        let filters = {};

        if (q) {
            try {
                const queryData = JSON.parse(decodeURIComponent(q as string));
                // Simula filtros baseados no query
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

        res.json({
            success: true,
            data: users,
            count: users.length,
            timestamp: new Date().toISOString()
        });
    } catch (error: any) {
        res.status(500).json({
            error: 'Erro ao buscar usuários',
            details: error.message
        });
    }
});

app.post('/api/express/user_crud', async (req, res) => {
    try {
        const { user: userData } = req.body;

        if (!userData || !userData.email || !userData.name) {
            return res.status(400).json({
                error: 'Dados obrigatórios não fornecidos'
            });
        }

        // Simula validações e processamento
/*         simulateProcessing(5);
 */
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

        res.status(201).json({
            success: true,
            data: user,
            message: 'Usuário criado com sucesso'
        });
    } catch (error: any) {
        console.log(error)
        if (error.code === 'P2002') {
            return res.status(409).json({
                error: 'Email já está em uso'
            });
        }
        res.status(500).json({
            error: 'Erro ao criar usuário',
            details: error.message
        });
    }
});

// ===== CENÁRIO 2: FILE UPLOAD =====
app.get('/api/express/file_upload', async (req, res) => {
    try {
        const files = await prisma.fileUpload.findMany({
            include: {
                user: { select: { id: true, name: true, email: true } },
                chunks: { take: 5 }
            },
            orderBy: { createdAt: 'desc' },
            take: 50
        });

        res.json({
            success: true,
            data: files.map((file: any) => ({
                ...file,
                tags: JSON.parse(file.tags || '[]'),
                chunksCount: file.chunks.length
            })),
            count: files.length
        });
    } catch (error: any) {
        res.status(500).json({
            error: 'Erro ao buscar arquivos',
            details: error.message
        });
    }
});

app.post('/api/express/file_upload', async (req, res) => {
    try {
        const { file: fileData, chunks = [] } = req.body;

        if (!fileData || !fileData.name) {
            return res.status(400).json({
                error: 'Dados do arquivo não fornecidos'
            });
        }

        // Simula processamento de upload (operação mais pesada)
/*         simulateProcessing(15);
 */
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

        res.status(201).json({
            success: true,
            data: {
                ...fileUpload,
                tags: JSON.parse(fileUpload.tags)
            },
            message: 'Arquivo enviado com sucesso'
        });
    } catch (error: any) {
        res.status(500).json({
            error: 'Erro ao enviar arquivo',
            details: error.message
        });
    }
});

// ===== CENÁRIO 3: ANALYTICS PROCESSING =====
app.get('/api/express/analytics_processing', async (req, res) => {
    try {
        const analytics = await prisma.analytics.findMany({
            include: {
                user: { select: { id: true, name: true, email: true } }
            },
            orderBy: { createdAt: 'desc' },
            take: 100
        });

        // Simula processamento analítico pesado
/*         simulateProcessing(25);
 */
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

        res.json({
            success: true,
            data: processedData,
            summary: {
                totalSessions: analytics.length,
                totalEvents: processedData.reduce((sum: number, item: any) => sum + item.eventsCount, 0),
                totalValue: processedData.reduce((sum: number, item: any) => sum + item.totalValue, 0)
            }
        });
    } catch (error: any) {
        res.status(500).json({
            error: 'Erro ao processar analytics',
            details: error.message
        });
    }
});

app.post('/api/express/analytics_processing', async (req, res) => {
    try {
        const { analytics: analyticsData } = req.body;

        if (!analyticsData || !analyticsData.sessionId) {
            return res.status(400).json({
                error: 'Dados de analytics não fornecidos'
            });
        }

        // Simula processamento pesado de analytics
/*         simulateProcessing(30);
 */
        let userId = null;
        if (req.user) {
            let user = await prisma.user.findFirst({ where: { email: req.user.email } });
            if (!user) {
                user = await prisma.user.create({
                    data: {
                        email: req.user.email,
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

        res.status(201).json({
            success: true,
            data: {
                ...analytics,
                events: JSON.parse(analytics.events),
                userProps: JSON.parse(analytics.userProps)
            },
            message: 'Analytics processado com sucesso'
        });
    } catch (error: any) {
        res.status(500).json({
            error: 'Erro ao processar analytics',
            details: error.message
        });
    }
});

// ===== CENÁRIO 4: PRODUCT CATALOG =====
app.get('/api/express/product_catalog', async (req, res) => {
    try {
        const { q } = req.query;
        let filters: any = { take: 50 };

        if (q) {
            try {
                const queryData = JSON.parse(decodeURIComponent(q as string));
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

        res.json({
            success: true,
            data: products.map(product => ({
                ...product,
                tags: JSON.parse(product.tags || '[]')
            })),
            pagination: {
                total: products.length,
                page: 1,
                limit: 50
            }
        });
    } catch (error: any) {
        res.status(500).json({
            error: 'Erro ao buscar produtos',
            details: error.message
        });
    }
});

app.post('/api/express/product_catalog', async (req, res) => {
    try {
        const { filters = {}, pagination = {}, searchTerm } = req.body;

        // Simula busca complexa com filtros
/*         simulateProcessing(10);
 */
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

        res.json({
            success: true,
            data: products.map(product => ({
                ...product,
                tags: JSON.parse(product.tags || '[]')
            })),
            filters: filters,
            pagination: {
                ...pagination,
                total: products.length
            }
        });
    } catch (error: any) {
        res.status(500).json({
            error: 'Erro na busca de produtos',
            details: error.message
        });
    }
});

// ===== CENÁRIO 5: REAL TIME DATA =====
app.get('/api/express/real_time_data', async (req, res) => {
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
/*         simulateProcessing(5);
 */
        const processedSensors = sensors.map(sensor => ({
            ...sensor,
            latestReading: sensor.readings[0],
            avgValue: sensor.readings.reduce((sum, r) => sum + r.value, 0) / (sensor.readings.length || 1),
            status: sensor.batteryLevel > 20 ? 'online' : 'low_battery'
        }));

        res.json({
            success: true,
            data: processedSensors,
            summary: {
                totalSensors: sensors.length,
                activeSensors: sensors.filter(s => s.isActive).length,
                lowBattery: sensors.filter(s => s.batteryLevel <= 20).length
            },
            timestamp: new Date().toISOString()
        });
    } catch (error: any) {
        res.status(500).json({
            error: 'Erro ao buscar dados dos sensores',
            details: error.message
        });
    }
});

app.post('/api/express/real_time_data', async (req, res) => {
    try {
        const { sensors: sensorsData = [] } = req.body;

        if (!Array.isArray(sensorsData) || sensorsData.length === 0) {
            return res.status(400).json({
                error: 'Dados dos sensores não fornecidos'
            });
        }

        // Simula processamento em tempo real
/*         simulateProcessing(3);
 */
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

        res.status(201).json({
            success: true,
            data: results,
            processed: results.length,
            message: 'Dados dos sensores processados com sucesso'
        });
    } catch (error: any) {
        res.status(500).json({
            error: 'Erro ao processar dados dos sensores',
            details: error.message
        });
    }
});

// Health check
app.get('/health', (req, res) => {
    res.json({
        status: 'OK',
        framework: 'Express',
        timestamp: new Date().toISOString(),
        uptime: process.uptime()
    });
});

// Middleware de tratamento de erros
app.use((error: any, req: any, res: any, next: any) => {
    console.error('Express Error:', error);
    res.status(500).json({
        error: 'Erro interno do servidor',
        framework: 'Express'
    });
});

// 404 handler
app.use('*', (req, res) => {
    res.status(404).json({
        error: 'Endpoint não encontrado',
        framework: 'Express',
        path: req.originalUrl
    });
});

app.listen(PORT, () => {
    console.log(`🚀 Express API rodando na porta ${PORT}`);
    console.log(`🏥 Health check: http://localhost:${PORT}/health`);
});

// Graceful shutdown
process.on('SIGTERM', async () => {
    console.log('🛑 Express API sendo finalizada...');
    await prisma.$disconnect();
    process.exit(0);
});

declare global {
    namespace Express {
        interface Request {
            user?: {
                id: string;
                email: string;
            };
        }
    }
}
