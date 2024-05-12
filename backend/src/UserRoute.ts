import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { decode, sign, verify } from "hono/jwt";
import { signinInput, signupInput } from "@discuss1239/common";
const UserRoute = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_TOKEN: string;
  };
  Variables: {
    userId: string;
    prisma: any;
  };
}>();

UserRoute.post("/signup", async (c) => {
  const prisma = c.get("prisma");
  const body = await c.req.json();

  const { success } = signupInput.safeParse(body);
  if (!success) {
    c.status(411);
    return c.json({ error: "Input Not Valid" });
  }

  try {
    const user = await prisma.user.create({
      data: {
        email: body.email,
        password: body.password,
        name: body.name || "",
      },
    });

    const jwt = await sign({ id: user.id }, c.env.JWT_TOKEN);

    return c.json({
      jwt,
    });
  } catch (err) {
    console.log(err);
    c.status(411);
    return c.json({ error: "Error while Signing Up" });
  }
});

UserRoute.post("/signin", async (c) => {
  const prisma = c.get("prisma");
  const body = await c.req.json();
  const { success } = signinInput.safeParse(body);
  if (!success) {
    c.status(411);
    return c.json({ error: "Input Not Valid" });
  }
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: body.email,
        password: body.password,
      },
    });

    if (!user) {
      c.status(403);
      return c.json({ error: "user not found" });
    }

    const jwt = await sign({ id: user.id }, c.env.JWT_TOKEN);
    return c.json({ jwt });
  } catch (err) {
    console.log(err);
    c.status(411);
    return c.json({ error: "Error while Signing In" });
  }
});

export default UserRoute;
