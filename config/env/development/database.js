const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, ".env") });

module.exports = ({ env }) => {
  return {
    connection: {
      client: env("DATABASE_CLIENT", "sqlite"),
      connection: {
        filename: env("DATABASE_FILENAME", ".tmp/data.db"),
        host: env("DATABASE_HOST", "127.0.0.1"),
        port: env.int("DATABASE_PORT", 5432),
        database: env("DATABASE_NAME", "strapi"),
        user: env("DATABASE_USERNAME", "strapi"),
        password: env("DATABASE_PASSWORD", "strapi"),
        ssl: { rejectUnauthorized: env.bool("DATABASE_SSL_SELF", false) },
      },
      useNullAsDefault: true,
      debug: false,
    },
  };
};

// module.exports = ({ env }) => {
//   return {
//     connection: {
//       client: "sqlite",
//       connection: {
//         filename: ".temp/dev.sqlite", // process.env.DATABASE_FILENAME
//       },
//       useNullAsDefault: true,
//       debug: false,
//     },
//   };
// };
