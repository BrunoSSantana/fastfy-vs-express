import { faker } from '@faker-js/faker/locale/pt_BR';
import 'dotenv/config';

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    console.log('🌱 Iniciando seed do banco de dados...');

    // Limpar dados existentes
    await prisma.sensorReading.deleteMany();
    await prisma.sensor.deleteMany();
    await prisma.fileChunk.deleteMany();
    await prisma.fileUpload.deleteMany();
    await prisma.analytics.deleteMany();
    await prisma.product.deleteMany();
    await prisma.user.deleteMany();

    console.log('🧹 Dados existentes removidos');

    // Criar usuários
    const users = [];
    for (let i = 0; i < 50; i++) {
        const user = await prisma.user.create({
            data: {
                email: faker.internet.email(),
                name: faker.person.fullName(),
                phone: faker.phone.number(),
                street: faker.location.streetAddress(),
                city: faker.location.city(),
                zipCode: faker.location.zipCode(),
                country: 'Brasil',
                language: 'pt-BR',
                timezone: 'America/Sao_Paulo',
                notifications: faker.datatype.boolean(),
                theme: faker.helpers.arrayElement(['light', 'dark'])
            }
        });
        users.push(user);
    }

    console.log(`👥 Criados ${users.length} usuários`);

    // Criar produtos
    const products = [];
    const categories = ['electronics', 'clothing', 'books', 'home', 'sports', 'beauty'];
    const brands = ['Samsung', 'Apple', 'Nike', 'Adidas', 'Sony', 'LG', 'Dell', 'HP'];

    for (let i = 0; i < 200; i++) {
        const product = await prisma.product.create({
            data: {
                name: faker.commerce.productName(),
                description: faker.commerce.productDescription(),
                price: parseFloat(faker.commerce.price({ min: 10, max: 5000 })),
                category: faker.helpers.arrayElement(categories),
                brand: faker.helpers.arrayElement(brands),
                inStock: faker.datatype.boolean({ probability: 0.8 }),
                rating: faker.number.float({ min: 1, max: 5, fractionDigits: 1 }),
                imageUrl: faker.image.url(),
                tags: JSON.stringify([
                    faker.lorem.word(),
                    faker.lorem.word(),
                    faker.lorem.word()
                ])
            }
        });
        products.push(product);
    }

    console.log(`🛍️ Criados ${products.length} produtos`);

    // Criar uploads de arquivos
    const fileUploads = [];
    for (let i = 0; i < 30; i++) {
        const user = faker.helpers.arrayElement(users);
        const fileUpload = await prisma.fileUpload.create({
            data: {
                filename: faker.system.fileName(),
                originalName: faker.system.fileName(),
                size: faker.number.int({ min: 1024, max: 10485760 }), // 1KB - 10MB
                mimeType: faker.helpers.arrayElement([
                    'image/jpeg', 'image/png', 'application/pdf',
                    'text/csv', 'application/json', 'video/mp4'
                ]),
                checksum: faker.string.hexadecimal({ length: 64 }),
                uploadedBy: user.id,
                tags: JSON.stringify([
                    faker.lorem.word(),
                    faker.lorem.word()
                ]),
                description: faker.lorem.sentence()
            }
        });
        fileUploads.push(fileUpload);

        // Criar chunks para alguns arquivos
        if (faker.datatype.boolean({ probability: 0.3 })) {
            const chunkCount = faker.number.int({ min: 2, max: 8 });
            for (let j = 0; j < chunkCount; j++) {
                await prisma.fileChunk.create({
                    data: {
                        fileId: fileUpload.id,
                        index: j,
                        data: faker.string.alphanumeric(1024),
                        checksum: faker.string.hexadecimal({ length: 32 })
                    }
                });
            }
        }
    }

    console.log(`📁 Criados ${fileUploads.length} uploads de arquivos`);

    // Criar dados de analytics
    const analyticsData = [];
    for (let i = 0; i < 100; i++) {
        const user = faker.helpers.arrayElement(users);
        const eventsCount = faker.number.int({ min: 5, max: 50 });
        const events = [];

        for (let j = 0; j < eventsCount; j++) {
            events.push({
                type: faker.helpers.arrayElement(['pageview', 'click', 'scroll', 'purchase', 'signup']),
                timestamp: faker.date.recent().toISOString(),
                properties: {
                    url: faker.internet.url(),
                    duration: faker.number.int({ min: 100, max: 30000 }),
                    value: faker.number.float({ min: 0, max: 1000, fractionDigits: 2 })
                }
            });
        }

        const analytics = await prisma.analytics.create({
            data: {
                sessionId: faker.string.uuid(),
                userId: user.id,
                events: JSON.stringify(events),
                userProps: JSON.stringify({
                    age: faker.number.int({ min: 18, max: 80 }),
                    gender: faker.person.sex(),
                    location: faker.location.city(),
                    interests: Array.from({ length: 5 }, () => faker.lorem.word())
                })
            }
        });
        analyticsData.push(analytics);
    }

    console.log(`📊 Criados ${analyticsData.length} registros de analytics`);

    // Criar sensores IoT
    const sensors = [];
    const sensorTypes = ['temperature', 'humidity', 'pressure', 'motion', 'light'];
    const units = ['°C', '%', 'hPa', 'boolean', 'lux'];

    for (let i = 0; i < 50; i++) {
        const sensorType = faker.helpers.arrayElement(sensorTypes);
        const unit = units[sensorTypes.indexOf(sensorType)];

        const sensor = await prisma.sensor.create({
            data: {
                type: sensorType,
                value: faker.number.float({ min: 0, max: 100, fractionDigits: 2 }),
                unit,
                latitude: faker.location.latitude({ min: -30, max: 5 }), // Brasil
                longitude: faker.location.longitude({ min: -74, max: -34 }), // Brasil
                batteryLevel: faker.number.int({ min: 10, max: 100 }),
                lastMaintenance: faker.date.past(),
                isActive: faker.datatype.boolean({ probability: 0.9 })
            }
        });
        sensors.push(sensor);

        // Criar leituras para cada sensor
        const readingsCount = faker.number.int({ min: 10, max: 100 });
        for (let j = 0; j < readingsCount; j++) {
            await prisma.sensorReading.create({
                data: {
                    sensorId: sensor.id,
                    value: faker.number.float({ min: 0, max: 100, fractionDigits: 2 }),
                    timestamp: faker.date.recent({ days: 30 }),
                    metadata: JSON.stringify({
                        humidity: faker.number.float({ min: 30, max: 90, fractionDigits: 1 }),
                        temperature: faker.number.float({ min: 15, max: 35, fractionDigits: 1 }),
                        signal_strength: faker.number.int({ min: -100, max: -30 })
                    })
                }
            });
        }
    }

    console.log(`🌡️ Criados ${sensors.length} sensores IoT com leituras`);

    console.log('✅ Seed concluído com sucesso!');
    console.log('\n📈 Resumo dos dados criados:');
    console.log(`- ${users.length} usuários`);
    console.log(`- ${products.length} produtos`);
    console.log(`- ${fileUploads.length} uploads de arquivos`);
    console.log(`- ${analyticsData.length} sessões de analytics`);
    console.log(`- ${sensors.length} sensores IoT`);
}

main()
    .catch((e) => {
        console.error('❌ Erro durante o seed:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    }); 