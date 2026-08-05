import express from "express";
import cors from "cors";
import alunoRoutes from "./modules/alunos/aluno.routes";
import planoRoutes from "./modules/planos/plano.routes";
import matriculaRoutes from "./modules/matriculas/matricula.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use(alunoRoutes);
app.use(planoRoutes);
app.use(matriculaRoutes);

app.get("/health", (_request, response) => {
  return response.status(200).json({
    status: "ok",
    message: "GymFlow API está funcionando",
  });
});

export default app;