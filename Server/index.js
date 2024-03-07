import express from "express";
import cors from "cors";
import multer from "multer";

// const path = require("path");
// const fs = require("fs");
const app = express();
app.use(express.json());
app.use(cors());
app.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    // Error de multer al subir el archivo
    return res
      .status(400)
      .json({ message: "Error al subir el archivo", error: err });
  } else if (err) {
    // Otro tipo de error
    return res
      .status(500)
      .json({ message: "Error interno del servidor", error: err });
  }
  next();
});
// Configurar multer para guardar las imágenes en una carpeta local
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Directorio donde se guardarán las imágenes
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Nombre original del archivo
  },
});
const upload = multer({ storage: storage });

// Endpoint para subir una imagen
// app.post("/upload", upload.single("photo"), (req, res) => {
//   if (!req.file) {
//     return res.status(400).json({ message: "No se ha enviado ninguna imagen" });
//   }
//   // const imageUrl = `${req.protocol}://${req.get("host")}/upload/${
//   //   req.file.filename
//   // }`;
//   // const imageUrl = `https://b6df-2800-484-387b-6600-c06c-4ead-be31-5acd.ngrok-free.app/upload/${req.file.path}`;
//   const imageUrl = `https://b6df-2800-484-387b-6600-c06c-4ead-be31-5acd.ngrok-free.app/${req.file.path}`;
//   // const imageUrl = `https://localhost:8080/${req.file.path}`;
//   return res.json({ imageUrl });
// });

app.post("/upload", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No se ha enviado ninguna imagen" });
  }
  // const imageUrl = `https://b6df-2800-484-387b-6600-c06c-4ead-be31-5acd.ngrok-free.app/${req.file.filename}`;
  const imageUrl = `https://b6df-2800-484-387b-6600-c06c-4ead-be31-5acd.ngrok-free.app/uploads/${req.file.filename}`;
  return res.json({ imageUrl });
});

// Endpoint para obtener una imagen
app.get("/image/:imageName", (req, res) => {
  const { imageName } = req.params;
  res.sendFile(imageName, { root: "uploads/" });
});

app.get("/test", (req, res) => {
  res.status(200).json({ message: "Conexión exitosa al servidor" });
});

app.listen(8080, () => {
  console.log("Server running on http://localhost:8080");
});
