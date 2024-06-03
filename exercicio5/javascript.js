let resultado = document.querySelector("#resultado");

let nomeUm = document.querySelector("#nomeUm");
let anoUm = document.querySelector("#idadeUm");

let nomeDois = document.querySelector("#nomeDois");
let anoDois = document.querySelector("#idadeDois");

let nomeTres = document.querySelector("#nomeTres");
let anoTres = document.querySelector("#idadeTres");

let btSomar = document.querySelector("#btSomar");

function Somatoria(){
    
    let anoAtual = 2024;

    let nome1 = String(nomeUm.value);
    let ano1 = Number(anoUm.value);

    let nome2 = String(nomeDois.value);
    let ano2 = Number(anoDois.value);
    
    let nome3 = String(nomeTres.value);
    let ano3 = Number(anoTres.value);

    let idadeUm = anoAtual - ano1;
    let idadeDois = anoAtual - ano2;
    let idadeTres = anoAtual - ano3;
    
    if(idadeUm > idadeDois && idadeUm > idadeTres){
        if(idadeDois > idadeTres){
            resultado.innerHTML = 
            "Da pessoa mais velha para a mais nova: <br> "+
            "Primeira pessoa: "+nome1+" Idade: "+idadeUm+"<br>"+
            "Segunda pessoa: "+nome2+" Idade: "+idadeDois+"<br>"+
            "Terceira pessoa: "+nome3+" Idade: "+idadeTres+"<br>";
        }else{
            resultado.innerHTML = 
            "Da pessoa mais velha para a mais nova: <br> "+
            "Primeira pessoa: "+nome1+" Idade: "+idadeUm+"<br>"+
            "Segunda pessoa: "+nome3+" Idade: "+idadeTres+"<br>"+
            "Terceira pessoa: "+nome2+" Idade: "+idadeDois+"<br>";
        }
    }else if(idadeDois > idadeUm && idadeDois > idadeTres){
        if(idadeUm > idadeTres){
            resultado.innerHTML = 
            "Da pessoa mais velha para a mais nova: <br> "+
            "Primeira pessoa: "+nome2+" Idade: "+idadeDois+"<br>"+
            "Segunda pessoa: "+nome1+" Idade: "+idadeUm+"<br>"+
            "Terceira pessoa: "+nome3+" Idade: "+idadeTres+"<br>";
        }else{
            resultado.innerHTML = 
            "Da pessoa mais velha para a mais nova: <br> "+
            "Primeira pessoa: "+nome2+" Idade: "+idadeDois+"<br>"+
            "Segunda pessoa: "+nome3+" Idade: "+idadeTres+"<br>"+
            "Terceira pessoa: "+nome1+" Idade: "+idadeUm+"<br>";
        }
    }else if(idadeTres > idadeUm && idadeTres > idadeDois){
        if(idadeUm > idadeTres){
            resultado.innerHTML = 
            "Da pessoa mais velha para a mais nova: <br> "+
            "Primeira pessoa: "+nome3+" Idade: "+idadeTres+"<br>"+
            "Segunda pessoa: "+nome1+" Idade: "+idadeUm+"<br>"+
            "Terceira pessoa: "+nome2+" Idade: "+idadeDois+"<br>";
        }else{
            resultado.innerHTML = 
            "Da pessoa mais velha para a mais nova: <br> "+
            "Primeira pessoa: "+nome3+" Idade: "+idadeTres+"<br>"+
            "Segunda pessoa: "+nome2+" Idade: "+idadeDois+"<br>"+
            "Terceira pessoa: "+nome1+" Idade: "+idadeUm+"<br>";
        }
    }

    
}

btSomar.onclick = function(){
    Somatoria();
}