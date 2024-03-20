var botao = document.getElementById('botao');
botao = addEventListener("click", alertar);
var saida = document.getElementById("saida-de-dados");
var nome = document.getElementById("nome");

function alertar(){
    alert("Você clicou no botão!!!!");
    saida.innerText = "Nome: " + nome.value;
}