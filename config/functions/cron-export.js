const fetch = require("node-fetch");

// Define tus funciones cron aquí
const cronFunctions = {
  async exportData() {
    // Define tu collectionName
    const collectionName = "products";

    const exportEndpoint = `${strapi.config.get(
      "server.url"
    )}/content-manager/single-types/${collectionName}/export`;

    const response = await fetch(exportEndpoint, {
      method: "GET",
      headers: {
        // Aquí asumimos que tienes una variable de entorno ADMIN_JWT_TOKEN
        Authorization: `Bearer ${process.env.ADMIN_JWT_TOKEN}`,
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      console.log(`Export of ${collectionName} completed successfully`);
    } else {
      console.error(`Export of ${collectionName} failed:`, response.statusText);
    }
  },
};

module.exports = (strapi) => {
  return {
    /**
     * Initialize the hook
     */
    initialize: function () {
      if (process.env.NODE_ENV === "development") {
        strapi.services.cron.schedule("*/30 * * * *", cronFunctions.exportData);
        console.log("The Cron job for exporting data has been scheduled");
      }
    },
  };
};
