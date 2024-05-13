import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { decode, sign, verify } from "hono/jwt";
import UserRoute from "./UserRoute";
import BlogRoute from "./BlogRoute";
import { cors } from "hono/cors";

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_TOKEN: string;
  };
  Variables: {
    userId: string;
    prisma: any;
  };
}>();

app.use("/api/*", async (c, next) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  c.set("prisma", prisma);
  await next();
});

app.use("api/*", cors());

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.route("/api/v1/user", UserRoute);
app.route("/api/v1/blog", BlogRoute);

export default app;

// {
//   "title": "Abhishek1234@gmail.com",
//   "content": "Hello"
// }
