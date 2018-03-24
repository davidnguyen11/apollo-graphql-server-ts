import { createServer } from "http";
import { SubscriptionServer, GRAPHQL_SUBSCRIPTIONS } from "subscriptions-transport-ws";
const graphql = require("graphql");
const execute = graphql.execute;
const subscribe = graphql.subscribe;

module.exports = (props: any) => {
  const { server, schema, port } = props;
  const ws = createServer(server);
  ws.listen(port, () => {
    console.log(`GraphQL Socket is now running on http://localhost:${port}`);
    // Set up the WebSocket for handling GraphQL subscriptions
    new SubscriptionServer(
      {
        execute,
        subscribe,
        schema,
      },
      {
        server: ws,
        path: "/subscriptions",
      },
    );
  });
};
