function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value
    campoPesquisa  = campoPesquisa.toLowerCase();
    let resultados = "";
    let titulo  = "";
    let descricao = "";
    let tags = "";

    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();

        if(!campoPesquisa){
            section.innerHTML = "<p>Busque por nome ou estilo de jogo</p>"
            return
        }
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            resultados += `
            <div class="item-resultado">
            <h2>${dado.titulo}</h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href="${dado.link}" target="_blank">Página da Steam</a>
            </div>
            `;
        }
        if (!resultados) { 
            section.innerHTML = "<p>Não possuimos esse jogo em nossa base de dados :(</p>"
            return
        }
    }
    section.innerHTML = resultados
}

