const botao = document.getElementById("botao")
const campo = document.getElementById("campo");
const mensagem = document.getElementById("mensagem");

function exibeMensagem(){
    mensagem.textContent = campo.value;
}
function exibeCupom(){
    if (campo.value === "desconto10")
        alert("Cupom validado")
    else alert("Cupom invalido");
}

campo.addEventListener("input",exibeMensagem);
botao.addEventListener("click",exibeCupom);