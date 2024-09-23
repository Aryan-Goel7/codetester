import { Hono } from "hono";

const problemRouter = new Hono().basePath("/problems");

problemRouter.get("/", (c) => {}).post((c) => {});
problemRouter.get("/:problemId", (c) => {});
