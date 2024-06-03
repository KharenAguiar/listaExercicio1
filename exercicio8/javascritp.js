let resultado = document.querySelector("#resultado");
let numero1 = document.querySelector("#numero1");
let brVerificar = document.querySelector("#brVerificar");

function Somatoria(){
    let valor1 = Number(numero1.value);
    if((valor1 % 2) != 0){
        alert("O valor "+valor1+" é impar.");
    }else{
        alert("Esse valor "+valor1+" é par");
    }
}

brVerificar.onclick = function(){
    Somatoria();
}