module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST"),
      port: env.int("DATABASE_PORT"),
      database: env("DATABASE_NAME"),
      user: env("DATABASE_USERNAME"),
      password: env("DATABASE_PASSWORD"),
      //schema: env("public"),
      ssl: {
        rejectUnauthorized: false,
      },
    },
    debug: false,
  },
});

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
