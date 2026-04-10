const botao = document.getElementById("botao");
const campo = document.getElementById("campo");
const mensagem = document.getElementById("mensagem");

function exibeMensagem(){
    mensagem.textContent = campo.value;
}
function exibeAlert(){
    alert("uma mensagem!");
}
campo.addEventListener("campo",exibeMensagem);
botao.addEventListener("click",exibeAlert);

