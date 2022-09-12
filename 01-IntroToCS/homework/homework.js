'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let acum = 0;
  for (let i = 0; i < num.length; i++) {
    acum+= num[i] * 2 ** (num.length-i-1)
  }
  return acum;

}

function DecimalABinario(num) {
  // tu codigo aca
  let numero = num;
  let resultado=[]
  while(numero>=1){
    resultado.unshift(numero%2)
    if(numero%2 == 1){
      numero= (numero-1)/2
    }
    else{
      numero/= 2 
    }
  }
  
  return resultado.join("")
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
}