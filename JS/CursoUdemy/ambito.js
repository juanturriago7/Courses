'use strict';

//Variables creadas dentro de la funciones solo se pueden llamar dentro de la funcion
//Variables de afuera se pueden llamar en las funciones

function text(texto){

  var texto_funcion = "Texto dentro de la funcion"

  console.log(texto);
  console.log(typeof nume.toString());
  console.log(texto_funcion);


}

//  da error
//console.log(texto_funcion);

var nume = 1
var texto ="Variable global";
text(texto);