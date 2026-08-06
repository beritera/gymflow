import { Router } from "express";
import { cadastrarMatricula, buscarMatriculas, buscarMatricula, desativarMatricula, verificarMatricula, } from "./matricula.controller";

const matriculaRoutes = Router();

matriculaRoutes.post("/matriculas", cadastrarMatricula);
matriculaRoutes.get("/matriculas", buscarMatriculas);
matriculaRoutes.get("/matriculas/:id", buscarMatricula);
matriculaRoutes.get("/matriculas/:id/validade", verificarMatricula);
matriculaRoutes.patch("/matriculas/:id/inativar", desativarMatricula);


export default matriculaRoutes;