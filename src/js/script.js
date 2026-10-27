// variaveis de contagem

var qtdCadastrados =0;
var qtdEstoqueBaixo =0;
var safraMaisVelha =0;

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
    var classficacao = "";
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

// teste funções ***APAGAR DPS BRUNÃO***
exibirValores("nome", "tipo", "safra", "qtdEstoque")
var testeNum = solicitarNumero("entre com um numero");
console.log(testeNum)
var testeTxt = solicitarTexto("entre com um texto");
console.log(testeTxt)

// codigo principal
