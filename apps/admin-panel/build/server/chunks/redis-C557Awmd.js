import { c as configExports } from './config-CY2m_ASs.js';
import { createClient } from 'redis';

const redisClient = createClient({
  socket: {
    host: configExports.config.redis.host,
    port: configExports.config.redis.port
  }
});
redisClient.on("error", function(err) {
  return new Response(JSON.stringify({ err }));
});
await redisClient.connect();

export { redisClient as r };
//# sourceMappingURL=redis-C557Awmd.js.map
