const dados = document.querySelector(".content")
const livros = !JSON.parse(localStorage.getItem('dados')) ? [] : JSON.parse(localStorage.getItem('dados'));


window.addEventListener("load", function (e) {
    
    function estruturaDIV(elem, elem2, elem3) {
        let element = document.createElement(elem);
        element.setAttribute('class', elem2);
        return elem3 === '#section' ? document.querySelector(elem3).appendChild(element) : elem3.appendChild(element)
    };

    for (let i = 0; i < livros.length; i++) {

        let div = estruturaDIV("div", "content", "#section");
        let divIMG = estruturaDIV("div", "imgct", div);
        let divC = estruturaDIV("div", "dados", div);
        // Conteudo da DIV de IMG
        divIMG.insertAdjacentHTML("afterbegin", `<img src="${livros[i].url}">`);
        // Contéudo da DIV de conteudo
        divC.insertAdjacentHTML("afterbegin", `<p>Paginas: ${livros[i].paginas}</p> <p>Preço: R$${livros[i].preco}</p> <p>ISBN: ${livros[i].isbn}</p> 
        <p>Ano de publicação: ${livros[i].ano}</p> `);
        divC.insertAdjacentHTML("afterbegin", `<p>Autor: ${livros[i].autor}</p> <p>Subtítulo: ${livros[i].subtittle}</p> 
        <p>Editora: ${livros[i].editora}</p>`);
        divC.insertAdjacentHTML("afterbegin", `<h2 class="title">${livros[i].titulo}</h2> `);
    };

});

