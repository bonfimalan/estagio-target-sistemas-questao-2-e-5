const array = require('./dados.json');

var total = 0;
var media;
var diasFaturamentoMaior = 0;
var diasValidos = 0;
var maiorValor = array[0];
var menorValor = array[0];

// percorre os elemotos do vetor de dados
// calcula o total, para a média
// calcula o mes com maior faturamento
// calcula o mes com menor faturamento
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

// calcula a média, ignorando os dias que o faturamento foi 0
media = total / diasValidos;

// conta os dias com faturamento maior que a média
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