// database.js
const isProduction = process.env.NODE_ENV === "production";

module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("PGHOST", "127.0.0.1"),
      port: env.int("PGPORT", 5432),
      database: env("PGDATABASE", "railway"),
      username: env("PGUSER", "postgres"),
      password: env("PGPASSWORD", "postgres"),
      schema: env("DATABASE_SCHEMA", "public"),
      ssl: env.bool("DATABASE_SSL", false),
    },
    options: {
      // Otras configuraciones
      debug: env.bool("DEBUG", false),
      ssl: env.bool("DATABASE_SSL", false),
    },
  },
});
