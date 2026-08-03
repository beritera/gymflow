import express from "express";
import cors from "cors";
import alunoRoutes from "./modules/alunos/aluno.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use(alunoRoutes);

app.get("/health", (_request, response) => {
  return response.status(200).json({
    status: "ok",
    message: "GymFlow API está funcionando",
  });
});

export default app;