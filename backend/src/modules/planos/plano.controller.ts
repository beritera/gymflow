import { Request, Response } from "express";
import { criarPlano, listarPlanos, buscarPlanoPorId, atualizarPlano, inativarPlano, ativarPlano } from "./plano.service";

export function cadastrarPlano(request: Request, response: Response) {
  const { nome, valor } = request.body;

  if (!nome || valor === undefined) {
    return response.status(400).json({
      erro: "Nome e valor são obrigatórios",
    });
  }

  const plano = criarPlano({
    nome,
    valor,
  });

  return response.status(201).json(plano);
}

export function buscarPlanos(request: Request, response: Response) {
  return response.status(200).json(listarPlanos());
}

export function buscarPlano(request: Request, response: Response) {
  const id = Number(request.params.id);

  const plano = buscarPlanoPorId(id);

  if (!plano) {
    return response.status(404).json({
      erro: "Plano não encontrado",
    });
  }

  return response.status(200).json(plano);
}

export function editarPlano(request: Request, response: Response) {
  const id = Number(request.params.id);

  const plano = atualizarPlano(id, request.body);

  if (!plano) {
    return response.status(404).json({
      erro: "Plano não encontrado",
    });
  }

  return response.status(200).json(plano);
}

export function desativarPlano(request: Request, response: Response) {
  const id = Number(request.params.id);

  const plano = inativarPlano(id);

  if (!plano) {
    return response.status(404).json({
      erro: "Plano não encontrado",
    });
  }

  return response.status(200).json(plano);
}

export function reativarPlano(request: Request, response: Response) {
  const id = Number(request.params.id);

  const plano = ativarPlano(id);

  if (!plano) {
    return response.status(404).json({
      erro: "Plano não encontrado",
    });
  }

  return response.status(200).json(plano);
}