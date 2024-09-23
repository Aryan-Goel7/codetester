import { Hono } from "hono";
import { logger } from "hono/logger";
import { apiRouter } from "./apiRouter";

// Initialize Hono application
const app = new Hono();

// Apply logger middleware
app.use(logger());

// Mount the router
app.use("/api", apiRouter);

export { app };
