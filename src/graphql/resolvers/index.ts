import * as path from "path";
const mergeGraphqlSchemas = require("merge-graphql-schemas");
const fileLoader = mergeGraphqlSchemas.fileLoader;
const mergeResolvers = mergeGraphqlSchemas.mergeResolvers;

const typesArray = fileLoader(path.join(__dirname));

export default mergeResolvers(typesArray);
