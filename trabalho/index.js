const botao = document.getElementById("botao");
const produto = document.getElementById("produto");
const descricao = document.getElementById("descricao");
const valor = document.getElementById("valor");
const mensagem = document.getElementById("mensagem");

function atualizarMensagem(){
    mensagem.textContent = produto.value + " - " + descricao.value + " - " + valor.value;
}

function exibeAlert(){
    alert("cadastrado");
}
produto.addEventListener("input", atualizarMensagem);
descricao.addEventListener("input", atualizarMensagem);
valor.addEventListener("input", atualizarMensagem);
botao.addEventListener("click",exibeAlert);