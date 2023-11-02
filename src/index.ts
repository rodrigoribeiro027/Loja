import cors from "cors";
import express from "express";
import * as dotenv from "dotenv";
import startDb from "./config/db";


dotenv.config();
const app = express();
const PORT = process.env.PORT || 3004;

startDb();
app.use(express.json());
app.use(cors());

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
