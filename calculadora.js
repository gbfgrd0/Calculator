const tela = document.getElementById('Tela');
let calcNum = "";
let calcOperacao = "";

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function clickado(text) {
    (isNumeric(text) || text == ".") ? tela.innerHTML += text : 0

    switch(text){
        case "+":
            calcOperacao = text;
            calcNum = tela.innerHTML
            tela.innerHTML = ""
            break;
        case "-":
            calcOperacao = text;
            calcNum = tela.innerHTML
            tela.innerHTML = ""
            break;
        case "*":
            calcOperacao = text;
            calcNum = tela.innerHTML
            tela.innerHTML = ""
            break;
        case "/":
            calcOperacao = text;
            calcNum = tela.innerHTML
            tela.innerHTML = ""
            break;
        case "=":
            tela.innerHTML = eval(calcNum + calcOperacao + tela.innerHTML);
            break;
        case "ce":
            tela.innerHTML = "";
            calcNum = "";
            calcOperacao = "";
            break;
        case "%":
            tela.innerHTML = String(parseFloat(tela.innerHTML) / 100.0)
    }
}