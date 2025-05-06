import { Redis } from 'ioredis';

const azureRedis: Redis = new Redis({
    host: process.env.REDIS_HOST,
    port: process.env.AZURE_REDIS_PORT, // Default Redis port
});

export default Redis;