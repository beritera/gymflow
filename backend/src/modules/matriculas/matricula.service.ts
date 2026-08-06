import { buscarAlunoPorId } from "../alunos/aluno.service";
import { buscarPlanoPorId } from "../planos/plano.service";

export type Matricula = {
  id: number;
  alunoId: number;
  planoId: number;
  dataInicio: string;
  dataVencimento: string;
  status: "ATIVA" | "INATIVA";
};

export function listarMatriculas(): Matricula[] {
  return matriculas;
}

export function buscarMatriculaPorId(
  id: number
): Matricula | undefined {
  return matriculas.find((matricula) => matricula.id === id);
}

const matriculas: Matricula[] = [];

export function criarMatricula(
  dados: Omit<Matricula, "id" | "status">
): Matricula {
  const aluno = buscarAlunoPorId(dados.alunoId);

  if (!aluno) {
    throw new Error("Aluno não encontrado");
  }

  if (!aluno.ativo) {
    throw new Error("Aluno está inativo");
  }

  const plano = buscarPlanoPorId(dados.planoId);

  if (!plano) {
    throw new Error("Plano não encontrado");
  }

  if (!plano.ativo) {
    throw new Error("Plano está inativo");
  }

  const inicio = new Date(dados.dataInicio);
  const vencimento = new Date(dados.dataVencimento);

  if (vencimento <= inicio) {
    throw new Error("Data de vencimento deve ser posterior à data de início");
  }

  const matriculaAtiva = matriculas.find(
    (matricula) =>
      matricula.alunoId === dados.alunoId &&
      matricula.status === "ATIVA"
  );

  if (matriculaAtiva) {
    throw new Error("Aluno já possui uma matrícula ativa");
  }

  const novaMatricula: Matricula = {
    id: matriculas.length + 1,
    ...dados,
    status: "ATIVA",
  };

  matriculas.push(novaMatricula);

  return novaMatricula;
}

export function inativarMatricula(
  id: number
): Matricula | undefined {
  const matricula = matriculas.find(
    (matricula) => matricula.id === id
  );

  if (!matricula) {
    return undefined;
  }

  matricula.status = "INATIVA";

  return matricula;
}
