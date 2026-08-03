import { Request, Response } from "express";
import { criarAluno, listarAlunos } from "./aluno.service";

export function buscarAlunos(request: Request, response: Response) {
  const alunos = listarAlunos();

  return response.status(200).json(alunos);
}

export function cadastrarAluno(request: Request, response: Response) {
  try {
    const aluno = criarAluno(request.body);

    return response.status(201).json(aluno);
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