import { validarCpf } from "../../utils/validarCpf";

type Aluno = {
  id: number;
  nome: string;
  cpf: string;
  telefone?: string;
  email?: string;
  ativo: boolean;
};

const alunos: Aluno[] = [];

  export function listarAlunos(): Aluno[] {
  return alunos;
}

export function buscarAlunoPorId(id: number): Aluno | undefined {
  return alunos.find((aluno) => aluno.id === id);
}


export function criarAluno(dados: Omit<Aluno, "id" | "ativo">): Aluno {
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
    ativo: true,
    ...dados,
  };

  alunos.push(novoAluno);

  return novoAluno;

}

  export function atualizarAluno(
  id: number,
  dados: Partial<Omit<Aluno, "id">>
): Aluno | undefined {
  const aluno = alunos.find((aluno) => aluno.id === id);

  if (!aluno) {
    return undefined;
  }

  if (dados.cpf && dados.cpf !== aluno.cpf) {
    if (!validarCpf(dados.cpf)) {
      throw new Error("CPF inválido");
    }

    const cpfExistente = alunos.find(
      (outroAluno) => outroAluno.cpf === dados.cpf && outroAluno.id !== id
    );

    if (cpfExistente) {
      throw new Error("CPF já cadastrado");
    }
  }

  Object.assign(aluno, dados);

      return aluno;
  }

  export function inativarAluno(id: number): Aluno | undefined {
  const aluno = alunos.find((aluno) => aluno.id === id);

  if (!aluno) {
    return undefined;
  }

  aluno.ativo = false;

  return aluno;
}