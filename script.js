var botao = document.getElementById('botao');
botao.addEventListener("click", alertar);
var saida = document.getElementById("saida-de-dados");
var nome = document.getElementById("nome");
var email = document.getElementById("email");
var telefone = document.getElementById("telefone");
var cep = document.getElementById("cep");
var logradouro = document.getElementById("logradouro");
var numero_endereco = document.getElementById("numero_endereco");
var complemento = document.getElementById("complemento");
var bairro = document.getElementById("bairro");
var cidade = document.getElementById("cidade");
var estado = document.getElementById("estado")

function alertar(){
    alert("Você clicou no botão!!!!");
    saida.innerText = `Nome: ${nome.value}
    Email: ${email.value}
    Telefone: ${telefone.value}
    Cep: ${cep.value}
    Logradouro: ${logradouro.value}
    Numero: ${numero_endereco.value}
    Complemento: ${complemento.value}
    Bairro: ${bairro.value}
    Cidade: ${cidade.value}
    Estado: ${estado.value}`;
}