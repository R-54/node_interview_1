import { createHandler } from "graphql-http/lib/use/express";
import express from "express";
import { schema } from "./schemas/schema";
import { resolver } from "./resolvers/resolver";
import { ruruHTML } from "ruru/server";

const app = express();

app.all(
  "/graphql",
  createHandler({
    schema: schema,
    rootValue: resolver,
  })
);

app.get("/", (_req, res) => {
  res.type("html");
  res.end(ruruHTML({ endpoint: "/graphql" }));
});

app.listen(4000);
console.log("Running a GraphQL API server at http://localhost:4000/graphql");
