"use strict";

// Funciones anonimas
// Es una función que no tiene nombre

var pelicula = function (nombre) {
  return "Pelicula es : " + nombre;
};

//Callback
//funcion que se ejecuta dentro de otra funcion

function sumame(num1, num2, sumaYmuestra, sumaPorDos,) {
  var sumar = num1 + num2;

  sumaYmuestra(sumar);
  sumaPorDos(sumar);

  return sumar;
}

//Acá utilizamos dos funciones anonimas como callback
sumame(5, 7, function(dato){
  console.log("La suma es: " + dato);
},
function(dato){
    console.log("La suma por 2 es: " + dato*2);
})

//funciones de flecha
//Forma de definir funciones callback de una forma más clara
//Se quita la palabra function y pone => después del ()
// function(dato)   ==     (dato) =>