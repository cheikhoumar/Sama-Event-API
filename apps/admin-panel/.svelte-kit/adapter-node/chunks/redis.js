import "./config.js";
import { createClient } from "redis";
import { config } from "@backtix-service/config";
const redisClient = createClient({
  socket: {
    host: config.redis.host,
    port: config.redis.port
  }
});
redisClient.on("error", function(err) {
  return new Response(JSON.stringify({ err }));
});
await redisClient.connect();
export {
  redisClient as r
};
