const primeiroNome = document.querySelector("#primeiroTexto");
const segundoNome = document.querySelector("#segundoTexto");
const enviar = document.querySelector("#send");

enviar.addEventListener("click", function(e){
    e.preventDefault(e);
    var nome = primeiroNome.value;
    var sobrenome = segundoNome.value;
    var container = document.querySelector(".container");



    container.innerHTML = `
    <p>trim() - ${nome.trim()}</p>
    <p>toUpperCase() - ${nome.toUpperCase() + " " + sobrenome.toUpperCase()}</p>
    <p>toLowerCase() ${nome.toLowerCase() + " " + sobrenome.toLowerCase()}</p>
    <p>concat() - ${nome.concat(' ', sobrenome)}</p>
    <p>replaceAll() - ${nome.replaceAll('a', '@').replaceAll('e', '3') + " " + sobrenome.replaceAll('a', '@').replaceAll('e', '3')}</p>
    `
});