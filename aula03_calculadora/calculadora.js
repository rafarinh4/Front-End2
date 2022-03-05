import funcaoSoma from './somar.js';
import funcaoSubtrair from './subtrair.js';
import funcaoMultiplicar from './multiplicar.js';
import funcaoDividir from './dividir.js';

let operacao = prompt("Informe a operação:  '+', '-', '/' ou '*' ");
let valor1 = parseInt(prompt("Insira o primeiro número"));
let valor2 = parseInt(prompt("Insira o segundo valor"));

if (operacao === '-') {
    alert(`Resultado: ${funcaoSubtrair(valor1, valor2)}`);
}
if (operacao === '+') {
    alert(`Resultado: ${funcaoSoma(valor1, valor2)}`);
}
if (operacao === '/') {
    alert(`Resultado: ${funcaoDividir(valor1, valor2)}`);
}
if (operacao === '*') {
    alert(`Resultado: ${funcaoMultiplicar(valor1, valor2)}`);
}

