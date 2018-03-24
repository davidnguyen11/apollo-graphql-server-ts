import config from "../config";

module.exports = {
  username: config.postgres.username,
  password: config.postgres.password,
  database: config.postgres.database,
  host: config.postgres.host,
  port: config.postgres.port,
  dialect: config.postgres.dialect,
  pool: config.postgres.pool,
};
