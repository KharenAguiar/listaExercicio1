let resultado = document.querySelector("#resultado");
let venda = document.querySelector("#venda");
let meta = document.querySelector("#meta");
let min = document.querySelector("#min");
let btSomar = document.querySelector("#btSomar");

function Somatoria(){
    let valor1 = Number(quantidadePessoa.value);

    let ovo = 2;
    let queijo = 50;

    let Resultado1 = (valor1 * ovo);
    let Resultado2 = (valor1 * queijo);

    resultado.innerHTML = 
    "Quantidade de zovo "+ Resultado1+ "<br>"+
    "Quantidade de queijor "+ Resultado2+ " gramas <br>";
}

btSomar.onclick = function(){
    Somatoria();
}
