import { Router } from "express";
import { cadastrarAluno, buscarAlunos, buscarAluno, editarAluno, desativarAluno } from "./aluno.controller";

const alunoRoutes = Router();

alunoRoutes.post("/alunos", cadastrarAluno);
alunoRoutes.get("/alunos", buscarAlunos);
alunoRoutes.get("/alunos/:id", buscarAluno);
alunoRoutes.put("/alunos/:id", editarAluno);
alunoRoutes.patch("/alunos/:id/inativar", desativarAluno);

export default alunoRoutes;