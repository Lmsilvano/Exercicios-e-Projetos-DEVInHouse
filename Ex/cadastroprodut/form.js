const form = document.querySelector("#formulario")

form.addEventListener("submit", function (e) {

    e.preventDefault();
    const name = form.elements["nome"].value;
    const modelos = form.elements["modelos"].value
    const marca = form.elements["Marcas"].value;
    const descricao = form.elements["descricao"].value;
    const quantidade = form.elements["quantidade"].value;
    const preco = form.elements["preco"].value;
    const custo = form.elements["custo"].value;
    const data = new Date(form.elements["data"].value);
    dataForm = data.toLocaleDateString('pt-BR', { timeZone: 'UTC' })
    document.querySelector(".nome").innerHTML = name;
    document.querySelector(".modelo").innerHTML = modelos;
    document.querySelector(".marca").innerHTML = marca;
    document.querySelector(".descricao").innerHTML = descricao;
    document.querySelector(".preco").innerHTML = preco * quantidade;
    document.querySelector(".custo").innerHTML = custo * quantidade;
    document.querySelector(".margem").innerHTML = (preco * quantidade) - (custo * quantidade);
    document.querySelector(".quantidade").innerHTML = quantidade;
    document.querySelector(".data").innerHTML = dataForm;
    form.reset()

});




