function exibirResultadoFinal(qtdCadastrados, qtdEstoqueBaixo, nomeMaisVelho, safraMaisVelha) {
    alert(`
Cadastros feitos: ${qtdCadastrados}
Vinhos em estoque baixo: ${qtdEstoqueBaixo}
Vinho mais antigo: ${nomeMaisVelho}
Safra mais antiga: ${safraMaisVelha}
    `);
}

function solicitarNumero(msg) {
    let num = prompt(msg);

    while (true) {
        if (isNaN(num) || num <= 0 || num == "") {
            num = prompt("Escreva um número válido");
        }
        else {
            break;
        }
    }

    return Number(num);
}

function solicitarTexto(msg) {
    let texto = prompt(msg);

    while (true) {
        if (texto == "") {
            texto = prompt("Escreva um texto válido");
        }
        else {
            break;
        }
    }

    return texto;
}

function classificarVinho(anoVinho) {
    let classificacao = "";

    if (anoVinho >= 2020) {
        classificacao = "jovem";
    }
    else if (anoVinho >= 2000) {
        classificacao = "amadurecido";
    }
    else {
        classificacao = "antigo";
    }

    return classificacao;
}

function estoqueBaixo(numEstoque) {
    return numEstoque < 5;
}

function mostrarDados(nome, safra, estoque, classificacao, baixo) {
    console.log(`
Nome: ${nome}
Safra: ${safra}
Estoque: ${estoque}
Classificação: ${classificacao}
    `);

    if (baixo) {
        alert(`ATENÇÃO! O vinho "${nome}" está com estoque baixo.`);
    }
}

// CÓDIGO PRINCIPAL

function main() {

    let qtdCadastrados = 0;
    let qtdEstoqueBaixo = 0;

    let safraMaisVelha;
    let nomeMaisVelho;

    let continuar;

    do {

        let nome = solicitarTexto("Digite o nome do vinho");
        let safra = solicitarNumero("Digite a safra do vinho");
        let estoque = solicitarNumero("Digite a quantidade em estoque");

        let classificacao = classificarVinho(safra);
        let estoqueEstaBaixo = estoqueBaixo(estoque);


        mostrarDados(
            nome,
            safra,
            estoque,
            classificacao,
            estoqueEstaBaixo
        );

        qtdCadastrados++;

        if (estoqueEstaBaixo) {
            qtdEstoqueBaixo++;
        }

        if (qtdCadastrados === 1) {
            safraMaisVelha = safra;
            nomeMaisVelho = nome;
        }
        else if (safra < safraMaisVelha) {
            safraMaisVelha = safra;
            nomeMaisVelho = nome;
        }

        continuar = prompt("Deseja cadastrar outro vinho? (sim/não)");

    } while (continuar === "sim");

    exibirResultadoFinal(
        qtdCadastrados,
        qtdEstoqueBaixo,
        nomeMaisVelho,
        safraMaisVelha
    );
}

main();