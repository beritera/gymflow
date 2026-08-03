import { validarCpf } from "../../utils/validarCpf";

type Aluno = {
  id: number;
  nome: string;
  cpf: string;
  telefone?: string;
  email?: string;
};

const alunos: Aluno[] = [];

  export function listarAlunos(): Aluno[] {
  return alunos;
}


export function criarAluno(dados: Omit<Aluno, "id">): Aluno {
  const cpfExistente = alunos.find((aluno) => aluno.cpf === dados.cpf);

  if (!validarCpf(dados.cpf)) {
    throw new Error("CPF inválido");
  }

  if (cpfExistente) {
    throw new Error("CPF já cadastrado");
  }

  if (!dados.telefone && !dados.email) {
    throw new Error("Informe pelo menos um meio de contato");
  }

  const novoAluno: Aluno = {
    id: alunos.length + 1,
    ...dados,
  };

  alunos.push(novoAluno);

  return novoAluno;
}