export function validarCpf(cpf: string) {
    const cpfLimpo = cpf.replace(/\D/g, "");

    if (cpfLimpo.length !== 11) {
        return false;
    }

    if (cpfLimpo.split("").every((digito) => digito === cpfLimpo[0])) {
        return false;
    }

    let soma = 0;

    for (let i = 0; i < 9; i++) {
        soma += Number(cpfLimpo.charAt(i)) * (10 - i);
    }

    let resto = (soma * 10) % 11;

    if (resto === 10) {
        resto = 0;
    }

    if (resto !== Number(cpfLimpo.charAt(9))) {
        return false;
    }

        soma = 0;

    for (let i = 0; i < 10; i++) {
        soma += Number(cpfLimpo.charAt(i)) * (11 - i);
    }

        resto = (soma * 10) % 11;

    if (resto === 10) {
        resto = 0;
    }
    
    if (resto !== Number(cpfLimpo.charAt(10))) {
        return false;
    }

        return true;
}