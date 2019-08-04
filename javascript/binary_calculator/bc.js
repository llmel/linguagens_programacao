function conta (o) {
    switch (o) {
        case 0:
            res.innerHTML += "0"; 
            break;
        case 1:
            res.innerHTML += "1";
            break;
        case "+":
            res.innerHTML += "+";
            break;
        case "-":
            res.innerHTML += "-"; 
            break;
        case "*":
            res.innerHTML += "*"; 
            break;
        case "/":
            res.innerHTML += "/"; 
            break;
        default:
            res.innerHTML = ""; 
    }
}
function operar () {
    var conta = res.innerHTML;
    var sinais = new RegExp ("[*-/]","g");
    var valores_b;
    var valores_d = [];
    var operacoes;
    var resultado;
    var resposta = "";
    
    valores_b = conta.split(sinais);
    operacoes = conta.match(sinais);
    for ( c = 0 ; c < valores_b.length ; c++ ) {
        let d = 0;
        let b = valores_b[c];
        b = b.split("");
        b.reverse();
        for ( i = 0 ; i < b.length ; i++ ) {
            d += b[i] * 2**i;
        }
        valores_d.push(d);
    }
    for ( i = 0 ; i < operacoes.length ; i++ ) {
        let operacao = 0;
        if (operacoes[i] == "+") {
            operacao = valores_d[i] + valores_d[i+1];
        } else if (operacoes[i] == "-") {
            operacao = valores_d[i] - valores_d[i+1];
            } else if (operacoes[i] == "*") {
                operacao = valores_d[i] * valores_d[i+1];
                } else if (operacoes[i] == "/") {
                    operacao = valores_d[i] / valores_d[i+1];
                    }
        valores_d[i+1] = operacao;
    }
    resultado = valores_d[valores_d.length-1];
    for ( i = resultado ; i / 2 >= 1 ; ) {
        resposta += i % 2;
        i = parseInt(i / 2);
    }
    resposta += 1;
    resposta = resposta.split("");
    resposta = resposta.reverse();
    resposta = resposta.join("");
    res.innerHTML = resposta;
}