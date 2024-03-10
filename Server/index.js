import express from "express";
import cors from "cors";
import multer from "multer";
import Replicate from "replicate";

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

const replicate = new Replicate({
  auth: "r8_IKf50s0Wx8LTBtnFOngSbCDdAYdif4h3WJdzq",
});

console.log("Running the model...");
const output = await replicate.run(
  "stability-ai/sdxl:39ed52f2a78e934b3ba6e2a89f5b1c712de7dfea535525255b1aa35c5565e08b",
  {
    input: {
      prompt: "An astronaut riding a rainbow unicorn, cinematic, dramatic",
    },
  }
);
console.log(output);

app.post("/upload", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No se ha enviado ninguna imagen" });
  }
  const imageUrl = `https://0ba0-2800-484-387b-6600-249-4cde-d37a-3a13.ngrok-free.app/uploads/${req.file.filename}`;
  return res.json({ imageUrl });
});

app.post("/restore-image", upload.single("image"), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No se ha enviado ninguna imagen" });
  }

  const model =
    "stability-ai/stable-diffusion:27b93a2413e7f36cd83da926f3656280b2931564ff050bf9575f1fdf9bcd7478";
  const input = {
    prompt: "a 19th century portrait of a raccoon gentleman wearing a suit",
  };

  try {
    const output = await replicate.run(model, { input });
    // Aquí puedes procesar el resultado de la ejecución del modelo
    // y devolver la imagen restaurada u otra información relevante
    res.json({ output });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al ejecutar el modelo", error: error.message });
  }
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
