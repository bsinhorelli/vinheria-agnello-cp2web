// variaveis de contagem

let = qtdCadastrados =0;
let = qtdEstoqueBaixo =0;
let = safraMaisVelha =0;

// declaração de funções

function exibirValores(nomeVinho, tipoVinho, safraVinho, qtdEstoque){
    console.log(`
    Vinho: ${nomeVinho} 
    Tipo de vinho: ${tipoVinho} 
    Safra: ${safraVinho} 
    Quantidade em estoque: ${qtdEstoque}
    `);
}

function exibirResultadoFinal(){
    alert(`
    cadastros feitos:${qtdCadastrados}
    vinhos em estoque baixo:${qtdEstoqueBaixo}
    O vinho com a safra mais antiga${safraMaisVelha}
    `)
}

function solicitarNumero(msg){
    num = prompt(msg)
    
    while (true){
        if(isNaN(num) || num <= 0|| num==""){
            num = prompt("escreva um numero valido")
        }
        else{
            break;
        }
    }
    
    return num;
}

function solicitarTexto(msg){
    texto = prompt(msg)
    
    while (true){
        if(texto == ""){
            texto = prompt("escreva um texto valido")
        }
        else{
            break;
        }
    }
    
    return texto;
}

function classificarVinho(anoVinho){
    let = classficacao = "";
    if (anoVinho>=2020){
        classficacao = "jovem"
    }
    else if(anoVinho>=2000){
        classficacao = "amadurecido"
    }
    else{
        classficacao = "velho"
    }
}

function estoqueBaixo(numEstoque){
    if(numEstoque<5){
        return true
    }
    else{
        return false
    }
}

// codigo principal

