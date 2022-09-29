module.exports = (plugin) => {
  // plugin.controllers["admin-api"].upload = async (ctx) => {
  //   const {
  //     request: { files: { files } = {} },
  //   } = ctx;

  //   // Lógica para reemplazar imágenes en el servidor

  //   // Obtiene el tipo de archivo
  //   const { type: fileType, path, name } = files;
  //   console.log("fileType: ", fileType);
  //   console.log("path: ", path);
  //   console.log("name: ", name);
  //   const tmpWorkingDirectory = await createAndAssignTmpWorkingDirectoryToFiles(
  //     files
  //   );
  //   console.log("tmpWorkingDirectory: ", tmpWorkingDirectory);

  //   // ¿el tipo de archivo es una imagen HEIC?
  //   if (fileType === "image/heic") {
  //     // Si sí, entonces se convierte a JPG

  //     const convert = require("heic-convert");
  //     const inputBuffer = await promisify(fs.readFile)(tmpWorkingDirectory);

  //     console.log("inputBuffer: ", inputBuffer);
  //   } else {
  //     const response = await plugin.controllers["content-api"].upload(ctx);
  //     return response;
  //   }
  //   // Fin de Lógica para reemplazar imágenes en el servidor
  // };

  return plugin;
};
