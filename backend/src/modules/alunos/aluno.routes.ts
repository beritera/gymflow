import { Router } from "express";
import { cadastrarAluno, buscarAlunos} from "./aluno.controller";

const alunoRoutes = Router();

alunoRoutes.post("/alunos", cadastrarAluno);
alunoRoutes.get("/alunos", buscarAlunos);

export default alunoRoutes;