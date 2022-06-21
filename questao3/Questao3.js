const array = require('./dados.json');

var total = 0;
var media;
var diasFaturamentoMaior = 0;
var diasValidos = 0;
var maiorValor = array[0];
var menorValor = array[0];

array.forEach(element => {
  if (element.valor != 0){
    diasValidos++;
    total += element.valor;
    if(element.valor > maiorValor.valor) 
      maiorValor = element;
    if(element.valor < menorValor.valor) 
      menorValor = element;
  }
});

media = total / diasValidos;

array.forEach(element => {
  if (element.valor > media){
    diasFaturamentoMaior++;
  }
});

console.log(
  "Media = " + media 
  + "\nMaior faturamento = " + maiorValor.valor + ", no dia " + maiorValor.dia
  + "\nMenor faturamento = " + menorValor.valor + ", no dia " + menorValor.dia
  + "\nDias com faturamento maior que a média = " + diasFaturamentoMaior
);