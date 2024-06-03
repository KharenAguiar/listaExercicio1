let resultado = document.querySelector("#resultado");
let valorDol = document.querySelector("#valor");
let btSomar = document.querySelector("#btSomar");

function Somatoria(){
    let valor1 = Number(valorDol.value);

    let taxaUm = (1/100);
    let taxaDois = (2/100);
    let taxaCinco = (5/100);
    let taxaDez = (10/100);

    let Resultado1 = ((valor1 * taxaUm)+(valor1));
    let Resultado2 = ((valor1 * taxaDois)+(valor1));
    let Resultado3 = ((valor1 * taxaCinco)+(valor1));
    let Resultado4 = ((valor1 * taxaDez)+(valor1));

    resultado.innerHTML = 
    "Valor da Taxa de 1% "+ Resultado1+ "<br>"+
    "Valor da Taxa de 2% "+ Resultado2+ "<br>"+
    "Valor da Taxa de 5% "+ Resultado3+ "<br>"+
    "Valor da Taxa de 10% "+ Resultado4+ "<br>";
}

btSomar.onclick = function(){
    Somatoria();
}