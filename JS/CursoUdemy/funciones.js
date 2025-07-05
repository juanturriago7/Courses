'use strict';
document.write("test");

function porConsola(a,b){
  console.log("Suma :" + (a+b));
  console.log("Resta :" + (a-b));
  console.log("Mult :" + (a*b));
  console.log("Div :" + (a/b));
}

//Funciones
function calculadora(a,b){
  porConsola(a,b);

  return "cule calculo manin";
}

calculadora(25,5);