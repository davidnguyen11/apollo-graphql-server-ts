import * as express from "express";
import { graphqlExpress, graphiqlExpress } from "apollo-server-express";
import * as bodyParser from "body-parser";
import { models } from "../graphql/connectors";
import config from "../config";
import schema from "../graphql/schema";
const cors = require("cors");

const PORT = parseInt(config.graphql.port, 10) || 3000;
const env = process.env.NODE_ENV || "development";

const server = express();

if (env === "development") {
  server.use(cors());
}

server.use(
  "/graphql",
  bodyParser.json(),
  graphqlExpress({
    schema,
    rootValue: {
      models,
    },
    context: {
      models,
    },
  }),
);

server.get("/health-check", (req, res) => {
  res.send("OK");
});

if (env === "development") {
  server.use(
    "/graphiql",
    graphiqlExpress({
      endpointURL: "/graphql",
    }),
  );
  server.listen(PORT, () => {
    console.log(
      `GraphQL Server is now running on http://localhost:${PORT}/graphql`,
    );
    console.log(
      `GraphiQL Sandbox is now running on http://localhost:${PORT}/graphiql`,
    );
  });
} else {
  server.listen(PORT, () => {
    console.log(
      `GraphQL Server is now running on http://localhost:${PORT}/graphql`,
    );
  });
}
