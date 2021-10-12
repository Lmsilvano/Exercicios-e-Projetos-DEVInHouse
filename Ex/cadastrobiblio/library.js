const form = document.querySelector("#formulario")

// Recebe dados dos livros do localStorage(bookdata), e converte novamente para array(caso haja dado no localStorage).
let livros = JSON.parse(localStorage.getItem('dados')) || [];


form.addEventListener("submit", function (e) {
    e.preventDefault();

    //                        AÇÃO                                                                 ---------------------------------------------

    let dadostosave = recebelivros(livros)
    salvedata(dadostosave)
    clearinpt()

    // ------------                               INICIO DAS FUNÇÕES                                --------------------------------------------
    // Limpa os inputs após enviar os dados para localStorage.

    function clearinpt() {
        form.elements["tittle"].value = '';
        form.elements["subtittle"].value = '';
        form.elements["edit"].value = '';
        form.elements["autor"].value = '';
        form.elements["pages"].value = '';
        form.elements["preco"].value = '';
        form.elements["isbn"].value = '';
        form.elements["ano"].value = '';
        form.elements["urlimg"].value = '';
    };

    // Recebe os livros(array) e adiciona dados do input da pagina.

    function recebelivros(dados) {
        let dadosdoinput = {
            titulo: form.elements["tittle"].value,
            subtittle: form.elements["subtittle"].value,
            editora: form.elements["edit"].value,
            autor: form.elements["autor"].value,
            paginas: form.elements["pages"].value,
            preco: form.elements["preco"].value,
            isbn: form.elements["isbn"].value,
            ano: form.elements["ano"].value,
            url: form.elements["urlimg"].value

        };

        dados.push(dadosdoinput)
        return dados
    };

    // Converte em string e salva no localStorage

    function salvedata(dados) {
        const dadosToString = JSON.stringify(dados);
        localStorage.setItem('dados', dadosToString);
    };


}
);



