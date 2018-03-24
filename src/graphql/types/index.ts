import * as path from "path";
import * as fs from "fs";
const mergeGraphqlSchemas = require("merge-graphql-schemas");
const fileLoader = mergeGraphqlSchemas.fileLoader;
const mergeTypes = mergeGraphqlSchemas.mergeTypes;

const typesArray = fileLoader(path.join(__dirname));

const typeDefs = mergeTypes(typesArray);

// eslint-disable-next-line
fs.writeFile("schema.graphqls", typeDefs, (err) => {
  if (err) throw err;
  console.log("The file has been saved!");
});

export default typeDefs;
