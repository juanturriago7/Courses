'use strict'

//Parametros REST y SPREAD

//REST... Para pasar un número indetermiando de parametros
function listadoFrutas(fruta1, fruta2, ...resto_de_frutas){
  console.log("Fruta 1: " + fruta1);
  console.log("Fruta 2: " + fruta2);
  console.log(resto_de_frutas);
}

listadoFrutas("Naranja", "Manzana", "Sandía", "Pera", "Coco");

//SPREAD... cada indice individual
var frutas = ["Naranja", "Manzana"];
listadoFrutas(...frutas, "Sandía", "Pera", "Coco");


