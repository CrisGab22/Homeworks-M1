"use strict";

const { arrayReplaceAt } = require("markdown-it/lib/common/utils");

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
function BinarySearchTree(value) {
  this.value= value
  this.left= null
  this.right = null
}

BinarySearchTree.prototype.size = function(){
  if(this.left == null && this.right == null)  return 1
  if(this.left !== null && this.right == null) return 1 + this.left.size()
  if(this.left == null && this.right !== null ) return 1 + this.right.size()
  if(this.left !== null && this.left !== null) return 1 + this.right.size() + this.left.size()
}

BinarySearchTree.prototype.contains = function(value){
  if(this.value == value){return true}
  if(value > this.value){
      if(this.right == null) {return false}
      else{
        return this.right.contains(value)
      }
    }
    if (value < this.value){
      if(this.left == null){return false}
      else{
        return this.left.contains(value)
      } 
    }
  }
  BinarySearchTree.prototype.depthFirstForEach = function(cb,order){
  if(order =="in-order" || !order){
    if(this.left !== null)  this.left.depthFirstForEach(cb,order)
    cb(this.value)  
    if(this.right !== null )  this.right.depthFirstForEach(cb,order)
  }
  if (order == "pre-order"){
    cb(this.value)  
    if(this.left !== null)  this.left.depthFirstForEach(cb,order)
    if(this.right !== null )  this.right.depthFirstForEach(cb,order)
  } 
  if(order== "post-order"){
    if(this.left !== null)  this.left.depthFirstForEach(cb,order)
    if(this.right !== null )  this.right.depthFirstForEach(cb,order)
    cb(this.value)
  }
}
BinarySearchTree.prototype.breadthFirstForEach = function(f,aux=[]){
  if(this.left !== null) {
    aux.push(this.left)
  }
  
  if(this.right !== null ) {
    aux.push(this.right)
  } 

  f(this.value)  
  if(aux.length>0){
    aux.shift().breadthFirstForEach(f, aux)
}}
BinarySearchTree.prototype.insert = function(value){
  if(this.value !==null){
    if(value > this.value){
        if(this.right !== null){
          this.right.insert(value)
        }
        if(this.right == null){
          this.right = new BinarySearchTree(value)
        }
    }
    if (value< this.value){
        if(this.left !== null){
          this.left.insert(value)
        }
        if(this.left == null){
          this.left = new BinarySearchTree(value)
        }
    } 
  }
  if(this.value == null){
    return this.value = value
  }
}


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
