
let resultado = document.querySelector("#resultado");
let valor1 = document.querySelector("#numeroUm");
let valor2 = document.querySelector("#numeroDois");
let btSomar = document.querySelector("#btSomar");

function Somatoria(){
    let valorUm = Number(valor1.value);
    let valorDois = Number(valor2.value);

    if(valorUm>valorDois)
        alert("O primeiro valor "+valorUm+", é maior que "+ valorDois)
    else if(valorUm<valorDois)
        alert("O primeiro valor "+valorUm+", é menor que "+ valorDois)
    else
        alert("Os dois valores são iguais, "+valorUm+" é igual a "+valorDois)
}

btSomar.onclick = function(){
    Somatoria();
}