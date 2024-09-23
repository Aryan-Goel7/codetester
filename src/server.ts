import { app } from "./app";
const server = Bun.serve({
  hostname: "127.0.0.1",
  port: 3000,
  fetch: app.fetch,
});

console.log(`Listening on http://localhost:${server.port} ...`);
