import { Router } from "express";
import { cadastrarMatricula, buscarMatriculas, buscarMatricula, desativarMatricula, } from "./matricula.controller";

const matriculaRoutes = Router();

matriculaRoutes.post("/matriculas", cadastrarMatricula);
matriculaRoutes.get("/matriculas", buscarMatriculas);
matriculaRoutes.get("/matriculas/:id", buscarMatricula);
matriculaRoutes.patch("/matriculas/:id/inativar", desativarMatricula);

export default matriculaRoutes;