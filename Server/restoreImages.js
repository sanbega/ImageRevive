import replicate from "replicate";
// Función para restaurar la imagen
const restoreImage = async (imageUrl) => {
  try {
    const restoredImageUrl = await replicate.deblur(imageUrl);
    return restoredImageUrl;
  } catch (error) {
    console.error("Error al restaurar la imagen:", error);
    throw error;
  }
};

module.exports = { restoreImage };
