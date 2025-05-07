import { Redis } from 'ioredis';
import { AZURE_REDIS_PORT, AZURE_REDIS_HOST, AZURE_REDIS_KEY } from '$env/static/private';
console.log(AZURE_REDIS_PORT, AZURE_REDIS_HOST, AZURE_REDIS_KEY);

const azureRedis = new Redis({
    host: AZURE_REDIS_HOST,
    port: parseInt(AZURE_REDIS_PORT, 10),
    password: AZURE_REDIS_KEY,
    tls: {
        rejectUnauthorized: false
    }
});

azureRedis.on('error', (err) => console.error("Błąd połączenia", err.message));
azureRedis.on('connect', () =>  console.log('Połączono z Azure Cache for Redis'));

export default azureRedis;