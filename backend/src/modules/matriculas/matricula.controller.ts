import { Request, Response } from "express";
import { criarMatricula, listarMatriculas, buscarMatriculaPorId, inativarMatricula } from "./matricula.service";

export function cadastrarMatricula(request: Request, response: Response) {
  try {
    const matricula = criarMatricula(request.body);

    return response.status(201).json(matricula);
  } catch (error) {
    if (error instanceof Error) {
      return response.status(400).json({
        erro: error.message,
      });
    }

    return response.status(500).json({
      erro: "Erro interno do servidor",
    });
  }
}

export function buscarMatriculas(_request: Request, response: Response) {
  const matriculas = listarMatriculas();

  return response.status(200).json(matriculas);
}

export function buscarMatricula(request: Request, response: Response) {
  const id = Number(request.params.id);

  const matricula = buscarMatriculaPorId(id);

  if (!matricula) {
    return response.status(404).json({
      erro: "Matrícula não encontrada",
    });
  }

  return response.status(200).json(matricula);
}

export function desativarMatricula(request: Request, response: Response) {
  const id = Number(request.params.id);

  const matricula = inativarMatricula(id);

  if (!matricula) {
    return response.status(404).json({
      erro: "Matrícula não encontrada",
    });
  }

  return response.status(200).json(matricula);
}