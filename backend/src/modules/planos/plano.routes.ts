import { Router } from "express";
import { cadastrarPlano, buscarPlanos, buscarPlano, editarPlano, desativarPlano, reativarPlano} from "./plano.controller";

const planoRoutes = Router();

planoRoutes.post("/planos", cadastrarPlano);
planoRoutes.get("/planos", buscarPlanos);
planoRoutes.get("/planos/:id", buscarPlano);
planoRoutes.put("/planos/:id", editarPlano);
planoRoutes.patch("/planos/:id/inativar", desativarPlano);
planoRoutes.patch("/planos/:id/reativar", reativarPlano);

export default planoRoutes;