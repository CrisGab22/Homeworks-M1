'use strict'

const { arrayReplaceAt } = require("markdown-it/lib/common/utils");

function BinarioADecimal(num) {
  let acum = 0
  for (let i=0;i<num.length;i++){
    acum += num[num.length-i-1] * (2**i)
  }
  return (acum)
}

function DecimalABinario(num) {
let suma = []
while(num!=0){
  if(num%2 == 0){
    suma.unshift(0)
    num=num/2
  } 
  else if(num%2 ==1){
    suma.unshift(1)
    num=(num-1)/2
  }
}
return suma.join("")
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
}