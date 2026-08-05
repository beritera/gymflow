import { Request, Response } from "express";
import { criarAluno, listarAlunos, buscarAlunoPorId, atualizarAluno, inativarAluno, ativarAluno } from "./aluno.service";


export function buscarAlunos(request: Request, response: Response) {
  const alunos = listarAlunos();

  return response.status(200).json(alunos);
}

export function buscarAluno(request: Request, response: Response) {
  const id = Number(request.params.id);

  const aluno = buscarAlunoPorId(id);

  if (!aluno) {
    return response.status(404).json({
      erro: "Aluno não encontrado",
    });
  }

  return response.status(200).json(aluno);
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
  export function editarAluno(request: Request, response: Response) {
  try {
    const id = Number(request.params.id);

    const aluno = atualizarAluno(id, request.body);

    if (!aluno) {
      return response.status(404).json({
        erro: "Aluno não encontrado",
      });
    }

    return response.status(200).json(aluno);
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

export function desativarAluno(request: Request, response: Response) {
  const id = Number(request.params.id);

  const aluno = inativarAluno(id);

  if (!aluno) {
    return response.status(404).json({
      erro: "Aluno não encontrado",
    });
  }

  return response.status(200).json(aluno);
}

export function reativarAluno(request: Request, response: Response) {
  const id = Number(request.params.id);

  const aluno = ativarAluno(id);

  if (!aluno) {
    return response.status(404).json({
      erro: "Aluno não encontrado",
    });
  }

  return response.status(200).json(aluno);
}