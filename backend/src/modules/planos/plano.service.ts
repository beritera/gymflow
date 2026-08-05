export type Plano = {
  id: number;
  nome: string;
  valor: number;
  ativo: boolean;
};

const planos: Plano[] = [];

export function criarPlano(
  dados: Omit<Plano, "id" | "ativo">
): Plano {
  const novoPlano: Plano = {
    id: planos.length + 1,
    ...dados,
    ativo: true,
  };

  planos.push(novoPlano);

  return novoPlano;
}

export function listarPlanos(): Plano[] {
  return planos;
}

export function buscarPlanoPorId(id: number): Plano | undefined {
  return planos.find((plano) => plano.id === id);
}

export function atualizarPlano(
  id: number,
  dados: Partial<Omit<Plano, "id" | "ativo">>
): Plano | undefined {
  const plano = planos.find((plano) => plano.id === id);

  if (!plano) {
    return undefined;
  }

  Object.assign(plano, dados);

  return plano;
}

export function inativarPlano(id: number): Plano | undefined {
  const plano = planos.find((plano) => plano.id === id);

  if (!plano) {
    return undefined;
  }

  plano.ativo = false;

  return plano;
}

export function ativarPlano(id: number): Plano | undefined {
  const plano = planos.find((plano) => plano.id === id);

  if (!plano) {
    return undefined;
  }

  plano.ativo = true;

  return plano;
}