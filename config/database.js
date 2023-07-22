require("dotenv").config();
const parse = require("pg-connection-string").parse;
const pgconfig = parse(process.env.DATABASE_URL);

const isProduction = process.env.NODE_ENV === "production";

const localDatabaseConfig = {
  client: "postgres",
  connection: {
    host: "127.0.0.1",
    port: 5432,
    database: "railway",
    user: "postgres",
    password: "postgres",
  },
  debug: false,
};

const railwayDatabaseConfig = {
  client: "postgres",
  connection: {
    host: pgconfig.host,
    port: pgconfig.port,
    database: pgconfig.database,
    user: pgconfig.user,
    password: pgconfig.password,
    ssl: {
      rejectUnauthorized: isProduction,
    },
  },
};

module.exports = {
  connection: isProduction ? railwayDatabaseConfig : localDatabaseConfig,
};
