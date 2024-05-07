import express from "express";
import { Application } from "express";
import cors from "cors";
import dotenv from "dotenv";

// Crea la aplicación express e importa el tipo de aplicación desde express;
const app: Application = express();

// Cors
app.use(cors());

// configure env
dotenv.config(); //Carga el contenido del archivo .env en Process.env de forma predeterminada.

// Parser
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
// Declare The PORT Like This
const PORT: number = 8000;

app.get("/", (req, res) => {
  res.send("<h1>Welcome To JWT Authentication </h1>");
});

// Listen the server
app.listen(PORT, () => {
  console.log(`Server Fire on http:localhost:${PORT}`);
  // Connect To The Database
  try {
   
    console.log("🛢️  Connected To Database");
  } catch (error) {
    console.log("Error to connect Database");
  }
});