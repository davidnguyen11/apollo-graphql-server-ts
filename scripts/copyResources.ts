const shell = require("shelljs");

// graphql files
shell.cp("-R", "src/graphql/types/*.graphqls", "dist/graphql/types");
shell.cp("-R", "src/graphql/functions", "dist/graphql/functions");
shell.cp("-R", "./schema.graphqls", "dist/");

shell.cp("-R", ".sequelizerc", "dist/");