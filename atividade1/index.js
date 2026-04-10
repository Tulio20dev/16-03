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
function vereficaEmail(){
    if (!campo.value.includes("@"))
        error.innerText = "seu email nao esta compelto"
        
    }

campo.addEventListener("input",vereficaEmail);
campo2.addEventListener("input",contaSenha);
botao.addEventListener("click",exibeAlert);


