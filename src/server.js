import { createHandler } from "graphql-http/lib/use/express";
import express from "express";
import { ruruHTML } from "ruru/server";
import { schema } from "./schemas/schema.js";
import { resolver } from "./resolvers/resolver.js";

const app = express();

// Create and use the GraphQL handler.
app.all(
  "/graphql",
  createHandler({
    schema: schema,
    rootValue: resolver,
    graphiql: true,
  })
);

// Serve the GraphiQL IDE.
app.get("/", (_req, res) => {
  res.type("html");
  res.end(ruruHTML({ endpoint: "/graphql" }));
});

// Start the server at port
app.listen(4000);
console.log("Running a GraphQL API server at http://localhost:4000/graphql");
