// Importa las dependencias necesarias
import express from "express";
import cors from "cors";
import usuariosRouter from "./Router/router.js"; // Importa el enrutador de usuarios

const app = express();

// Configura el middleware para parsear el cuerpo de las solicitudes JSON
app.use(express.json());

// Configura el middleware para permitir solicitudes desde diferentes dominios
app.use(cors());

// Monta el enrutador de usuarios en la ruta '/usuarios'
app.use("/alumnos", usuariosRouter);

// Define el puerto en el que escuchará el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor en ejecución http://127.0.0.1:${PORT}`);
});
