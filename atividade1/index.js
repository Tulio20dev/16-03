const button = document.getElementById("botao");
const campo = document.getElementById("campo");
const campo2 = document.getElementById("campo2");
const mensagem = document.getElementById("mensagem");
const error = document.getElementById("erro")


function exibeMensagem(){
    mensagem.textContent = campo.value;

}
function exibeMensagem(){
    mensagem.textContent = campo2.value;
}
function exibeAlert(){
    alert("Login Bem sucedido");
}   
function contaSenha(){
    if (campo2.value.length <= 8){
        error.innerText = "Sua senha esta curta"
    }
}
campo2.addEventListener("change",contaSenha)
botao.addEventListener("click",exibeAlert);


