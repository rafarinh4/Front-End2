let bg = document.querySelector("h1");
let background = document.querySelector('.background');
let dados = document.querySelectorAll('.dados');

bg.style.color = 'red';

background.style.background = 'white';

dados.forEach(elemento => {elemento.classList.add('dadosAlterados')});