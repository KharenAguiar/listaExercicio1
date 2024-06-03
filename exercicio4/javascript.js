let resultado = document.querySelector("#resultado");
let qtddrefri = document.querySelector("#refri");
let saborUm = document.querySelector("#saborUm");
let saborDois = document.querySelector("#saborDois");
let saborTres = document.querySelector("#saborTres");
let saborQuarto = document.querySelector("#saborQuarto");
let btSomar = document.querySelector("#btSomar");

function Somatoria(){
    let qtdd = String(qtddrefri.value);
    let um = String(saborUm.value);
    let dois = String(saborDois.value);
    let tres = String(saborTres.value);
    let quatro = String(saborQuarto.value);

    let valorPizza = 57;

    let valorRefri = (qtdd*7);

    let Total = (valorPizza + valorRefri);

    resultado.innerHTML = 
    " Sabores escolhido:<br> "+
    um+"<br>"+
    dois+ "<br>"+
    tres+" <br> "+
    quatro+"<br> Valor total: "+ Total+" Reais";
}

btSomar.onclick = function(){
    Somatoria();
}