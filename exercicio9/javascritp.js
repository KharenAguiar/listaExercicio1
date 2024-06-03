let resultado = document.querySelector("#resultado");
let qtddalunos = document.querySelector("#qtddalunos");
let qtddturmas = document.querySelector("#turmas");
let brVerificar = document.querySelector("#brVerificar");

function Somatoria(){
    let alunos = parseInt(qtddalunos.value);
    let turmas = parseInt(qtddturmas.value);
    
    let tamanhoTurma = 50;

    if(alunos % tamanhoTurma == 0)
        alert("Uma turma foi fechada com "+ tamanhoTurma +" em "+turmas)
    
    else if(alunos % tamanhoTurma != 0){
        let restos = ((tamanhoTurma * turmas) - alunos);

        if(restos < 0){
            restos = restos*-1;
            alert("Teremos "+ turmas +" cheias e apenas "+restos+" alunos sem turma.")
        }else{
            menosUm = turmas-1;

            alert("Teremos apenas "+menosUm+" cheias e "+restos+" alunos sem turma...")
        }
    }    
   
}

brVerificar.onclick = function(){
    Somatoria();
}