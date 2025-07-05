"use strict";
//Arrays, Arreglos, Matrices

document.write("QLQ mamahuevo");

var nombre = "Juan Turriago";
var nombres = ["Juan", "Pedro", "Maria", 52, true];
// Indices        0       1       2       3    4
var lenguajes = new Array("PHP", "JS", "Java", "Go");

console.log(nombres);
//Sacar el elemento número 2 de un Array
console.log(nombres[2]);
//Para saber cuantos elementos tengo
console.log(nombres.length);

console.log(lenguajes);

//Preguntarle al usuario que elemento quiere y ese sacarlo
/*
var elemento = parseInt(prompt("¿Qué elemento voce quiere?", 0));
if (elemento >= nombres.length) {
  alert("Introduce el número correcto menor que " + nombres.length);
} else {
  console.log("Elemento escogido: " + nombres[elemento]);
}
*/

//mostrar todos los elementos del array
/*
document.write("<h1>Lista violenta</h1>");
document.write("<ul>");
for (var i = 0; i < nombres.length; i++) {
  document.write("<li>" + nombres[i] + "</li>");
}
document.write("</ul>");
*/

//Recorrer con forEach
document.write("<h1>Lista violenta</h1>");
document.write("<ul>");
lenguajes.forEach((elemento, indice, arr) => {
  document.write("<li>" + indice + " - " + elemento + "</li>");
});
document.write("</ul>");

