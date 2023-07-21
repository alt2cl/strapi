//const cronTasks = require("./../../functions/cron-export");

// config/env/development/server.js
module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  url: env("PUBLIC_URL", "http://localhost:1337"),
  logger: {
    level: env("LOG_LEVEL", "info"),
  },
  cron: {
    enabled: true,
    //tasks: cronTasks,
  },
  app: {
    keys: env.array("APP_KEYS"),
  },
  // ...
});
