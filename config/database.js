const isProduction = process.env.NODE_ENV === "production";

module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("PGHOST", "127.0.0.1"),
      port: env.int("PGPORT", 5432),
      database: env("PGDATABASE", "strapi"),
      username: env("PGUSER", "strapi"),
      password: env("PGPASSWORD", "strapi"),
      schema: env("DATABASE_SCHEMA", "public"),
      ssl: {
        rejectUnauthorized: env.bool("DATABASE_SSL_SELF", false), // Para certificados autofirmados
      },
    },
    options: {
      debug: env.bool("DEBUG", false),
      ssl: env.bool("DATABASE_SSL", false),
    },
  },
});
