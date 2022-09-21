'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  var  array = [1], i = 2
    while(num!== 1){
      if(num%i== 0){
        array.push(i)
        num = num/i
      }
      else{
        i++
      }
    }
  return array
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  for(let n= 1;n<array.length;n++){
    for(let i= 0;i<array.length;i++)
    if(array[i]> array[i+1]){
      let aux= array[i]
      array[i] = array[i+1]
      array[i+1] = aux
    }
  }
 return array
}


function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
let res 
let control = 0
if(array.length==0 ||array.length==1) return array
let primeraParte = array.slice(0,Math.floor(array.length / 2))
let segundaParte = array.slice(Math.floor(array.length / 2))  
if(control!=1){
  let a = mergeSort(primeraParte).concat(mergeSort(segundaParte))
  for(let i=1;i<a.length;i++){
  if(Math.min(array) == array[0]&&Math.min(array) == array[array.length-1]){
    control++
  }
  else{

    for(let n=0;n<a.length-1;n++){
      if(array[n]>array[n+1]){
        let max = array[n]
        array[n] = array[n+1]
        array[n+1] = max 
      }
    }
  }
  control++
  res = a
}
return array
}
return res
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
for(let n = 0; n< array.length;n++){
  let min = array[n]
  let location
    for(let i =n+1;i<array.length;i++){
      if(min>array[i]){
        min = array[i]
        location = i
      }
  }
  if(location){
    array[location] = array[n]
    array[n] = min   
  }
    
  }
  return array
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
