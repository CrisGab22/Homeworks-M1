'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if(array.length ==1 || array.length == 0) return array
  let acum
  let pivote = array[Math.floor(Math.random() * array.length)]
  let menor =[], mayor = [], pivotes=[]
  for(let i = 0 ;i<array.length;i++){
    if(array[i]< pivote){
      menor.push(array[i])
    }
    if(array[i]>pivote){
      mayor.push(array[i])
    }
    if(array[i]== pivote){
      pivotes.push(array[i])
    }
  }
acum = quickSort(menor).concat(pivotes).concat(quickSort(mayor))
return acum
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
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
}
return array
}
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
