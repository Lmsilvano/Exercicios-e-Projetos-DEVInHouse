const recebe = document.querySelector("#formulario");

recebe.addEventListener("submit", function (e) {
    e.preventDefault();

    //   Recebe o Input, cria objeto alunos com arrays.
    let alunos = {
        nome: recebe.elements["aluno"].value.split(';'),
        nota1: recebe.elements["nota1"].value.split(';'),
        nota2: recebe.elements["nota2"].value.split(';'),
        nota3: recebe.elements["nota3"].value.split(';'),
    };

    //   Caculo das médias e definiçã da situacao.
    for (let i = 0; i < alunos.nome.length; i++) {

        let media = (Number(alunos.nota1[i]) + Number(alunos.nota2[i]) + Number(alunos.nota3[i])) / 3;
        let situacao;
        if (media < 7) {
            situacao = "Reprovado";
        } else if (media >= 7) {
            situacao = "Aprovado";
        };

        //   Saída no HTML.
        document.querySelector(".aluno").innerHTML += `<hr></br> Aluno: ${alunos.nome[i]} </br>  
        Media: ${media.toFixed(1)} </br> Situação: ${situacao} </br></br><hr></br>`;
    }
    recebe.reset()
});


