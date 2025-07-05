'use strict'

//Plantillas de texto 

var nombre = prompt("Mete tu nombre");
var apellido = prompt("Mete tu apellido");

//var texto = "Mi nombre es: " + nombre + " <br/> Mi apellido es : " + apellido;


var textoPlantilla = `
    <h1> Charleme Rei </h1>
    <h3> Mi nombre es: ${nombre} </h3>
    <h3> Mi apellido es: ${apellido} </h3>

`;

document.write(textoPlantilla);