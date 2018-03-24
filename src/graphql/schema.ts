import { makeExecutableSchema } from "graphql-tools";

import resolvers from "./resolvers";

import typeDefs from "./types";

const schema: any = makeExecutableSchema({ typeDefs, resolvers });

export default schema;
