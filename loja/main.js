const listaProdutos = document.getElementById("lista-produtos");

//insira a categoria escolhida aqui
const categoria = "men-watches";
let produtos = [];

async function buscarProdutos() {
    const resposta = await fetch(
        `https://dummyjson.com/products/category/${categoria}`
    );
    const dados = await resposta.json();
    produtos = dados.products;
    mostrarProdutos(produtos);
}

function mostrarProdutos(lista) {
    listaProdutos.innerHTML = "";
    lista.forEach(produto => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <img src="${produto.thumbnail}">
            <h3>${produto.title}</h3>
            <p>R$ ${produto.price}</p>
        `;
        listaProdutos.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    buscarProdutos();
});