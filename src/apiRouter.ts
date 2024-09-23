import { Hono } from "hono";

// Initialize the router
const apiRouter = new Hono();

// Define routes
apiRouter.get("/check", (c) => {
  return c.text("Hello from Hono Server!");
});

export { apiRouter };
