let resultado = document.querySelector("#resultado");
let valor1 = document.querySelector("#numeroUm");
let valor2 = document.querySelector("#numeroDois");
let btSomar = document.querySelector("#btSomar");

function Somatoria(){
    let valorUm = Number(valor1.value);
    let valorDois = Number(valor2.value);

    let Resultado1 = (valorUm + valorDois);
    let Resultado2 = (valorUm - valorDois);
    let Resultado3 = (valorUm * valorDois);
    let Resultado4 = (valorUm / valorDois);

    resultado.innerHTML = 
    valorUm+" + "+valorDois+" = "+ Resultado1+ "<br>"+
    valorUm+" - "+valorDois+" = "+ Resultado2+ "<br>"+
    valorUm+" x "+valorDois+" = "+ Resultado3+ "<br>"+
    valorUm+" ÷ "+valorDois+" = "+ Resultado4+ "<br>";
}

btSomar.onclick = function(){
    Somatoria();
}
