// ./backup.js
const fs = require("fs");
const path = require("path");
const shell = require("shelljs");

// Método a ejecutar
const backupStrapi = (strapiDir) => {
  // Crea un backup del directorio de Strapi
  const backupPath = path.join(__dirname, "backup"); // Ruta donde se almacenará el backup
  const strapiPath = strapiDir; // Ruta del directorio de Strapi

  // Verifica si la carpeta de backup existe, si no, crea una nueva
  if (!fs.existsSync(backupPath)) {
    fs.mkdirSync(backupPath);
  }

  // Ejecuta el comando para realizar el backup
  const timestamp = new Date().toISOString().replace(/[:.]/g, "-"); // Crea un timestamp único para el nombre del archivo de backup
  const backupFileName = `strapi_backup_${timestamp}.tar.gz`; // Nombre del archivo de backup
  const backupCommand = `tar -zcvf ${path.join(
    backupPath,
    backupFileName
  )} -C ${strapiPath} .`;

  // Ejecuta el comando de backup
  shell.exec(backupCommand, (code, stdout, stderr) => {
    if (code === 0) {
      console.log("Backup de Strapi realizado con éxito.");
    } else {
      console.error("Error al realizar el backup de Strapi:", stderr);
    }
  });
};

// Llamada al método
backupStrapi(path.join(__dirname));
