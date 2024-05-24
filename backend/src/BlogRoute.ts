import { createPostInput, updatePostInput } from "@discuss1239/common";
import { Hono } from "hono";
import { verify } from "hono/jwt";

const BlogRoute = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_TOKEN: string;
  };
  Variables: {
    userId: string;
    prisma: any;
  };
}>();

BlogRoute.use("/*", async (c, next) => {
  const header = c.req.header("authorization") || "";
  // const token = header.split(" ")[1]
  const payload = await verify(header, c.env.JWT_TOKEN);
  console.log(header, payload);

  if (!payload.id) {
    c.status(403);
    return c.json({ error: "unauthorized" });
  }
  c.set("userId", payload.id);
  await next();
});

BlogRoute.post("/", async (c) => {
  const prisma = c.get("prisma");
  const body = await c.req.json();
  const { success } = createPostInput.safeParse(body);
  if (!success) {
    c.status(411);
    return c.json({ error: "Input Not Valid" });
  }
  const authorId = c.get("userId") || "";
  try {
    const post = await prisma.post.create({
      data: {
        title: body.title,
        content: body.content,
        authorId: authorId,
      },
    });

    return c.json({
      id: post.id,
    });
  } catch (err) {
    console.log(err);
    c.status(411);
    return c.json({ error: "Error while Creating Post" });
  }
});

// pagination
BlogRoute.get("/bulk", async (c) => {
  const prisma = c.get("prisma");

  try {
    const post = await prisma.post.findMany({
      select: {
        content: true,
        title: true,
        id: true,
        author: {
          select: {
            name: true,
          },
        },
      },
    });

    return c.json({
      post,
    });
  } catch (err) {
    console.log(err);
    c.status(411);
    return c.json({ error: "Error while Getting Post" });
  }
});

BlogRoute.get("/:id", async (c) => {
  const prisma = c.get("prisma");
  const id = c.req.param("id");

  try {
    const post = await prisma.post.findFirst({
      where: {
        id,
      },
      select: {
        id: true,
        title: true,
        content: true,
        author: {
          select: {
            name: true,
          },
        },
      },
    });

    return c.json({
      post,
    });
  } catch (err) {
    console.log(err);
    c.status(411);
    return c.json({ error: "Error while Getting Post" });
  }
});

BlogRoute.put("/", async (c) => {
  const prisma = c.get("prisma");
  const body = await c.req.json();
  console.log("err");
  const { success } = updatePostInput.safeParse(body);
  if (!success) {
    c.status(411);
    return c.json({ error: "Input Not Valid" });
  }
  try {
    const post = await prisma.post.update({
      where: {
        id: body.id,
      },
      data: {
        title: body.title,
        content: body.content,
      },
    });

    return c.json({
      id: post.id,
    });
  } catch (err) {
    console.log(err);
    c.status(411);
    return c.json({ error: "Error while Updating Post" });
  }
});

export default BlogRoute;
