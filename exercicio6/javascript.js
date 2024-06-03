let resultado = document.querySelector("#resultado");
let valor1 = document.querySelector("#numeroUm");
let btSomar = document.querySelector("#btSomar");

function Somatoria(){
    let valorUm = Number(valor1.value);

    if(valorUm < 6 && valorUm > 4)
        alert("Precisa fazer uma prova substitutiva");
    
    else if(valorUm >= 6)
        alert("Aprovado");

    else
        alert("Reprovado");
}

btSomar.onclick = function(){
    Somatoria();
}