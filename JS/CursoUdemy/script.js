'use strict';

document.write("asdas");

//String
var nombre = "qlq mamahuevo";
console.log(nombre);
//Dato Numerico
var culenumerobacano = 69;
console.log(culenumerobacano);
// Tipo de dato object

var objeto = {
  nombre: "Turri",
  sexo: "Por favor",
  numero: "Anda para allá gorda",
};
console.log(objeto);

var seleda = true;

function miFuncion() {}

class Persona {
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
  }
}

var x;

//-------------------------------
//type of - ver tipo de dato
console.log(typeof nombre);
console.log(typeof culenumerobacano);
console.log(typeof objeto);
console.log(typeof seleda);
console.log(typeof miFuncion);
console.log(typeof Persona);
console.log(typeof x);

//-----------------------
//Arrelos violentos

var autos = ["BMW", "Mercedes", "Audi", "Ferrari"];
console.log(autos);
console.log(typeof autos);

let persona = "negra";
console.log(persona);
persona = "blanca";
console.log(persona);

let a = 3,
  b = 2;
let c = a + b;
console.log(c);

c = ++a;
console.log(c);
console.log(a);

console.log("_---------------------");
//Let y var
//prueba con VAR

var numero = 40;
console.log(numero); //valor 40
if (true) {
  var numero = 50;
  console.log(numero); //valor 40
}
console.log(numero); //valor 50

console.log("_---------------------");
console.log("prueba con LET");
let numero2 = 40;
console.log(numero2); //valor 40
if (true) {
  let numero2 = 50;
  console.log(numero2); //valor 40
}
console.log(numero2); //valor 50
console.log("_---------------------");

var miNombre = "Juan";
var miEdad = 11;

if (miEdad >= 18) {
  console.log(miNombre + " tiene " + miEdad + " años y puede conducir");
} else {
  console.log(miNombre + "tiene " + miEdad + " años y no puede conducir");
}

/* 
Operadores logicos
AND(Y): &&
OR(O): ||
NEGATION: !
*/

var edadd = 40;
var imprime = "";
switch (edadd) {
  case 18:
    imprime = "Ya mayor de edad";
    break;
  case 25:
    imprime = "Ya un sr";
    break;
  case 40:
    imprime = "Prostata";
    break;
  default:
    imprime = "Tu edad es neutra";
    break;
}
console.log(imprime);

//Bucles violentos ----------------------
var numeroo = 100;
for (var i = 0; i < numeroo; i++) {
  // console.log(i);
}

var year = 2018;
while (year <= 2051) {
  console.log("Estamos en el año: " + year);

  if (year == 2030) {
    break;
  }

  year++;
}

var years = 30;

do {
  //alert("Solo cuando sea diferente de 20");
  years--;
} while (years > 25);
console.log(years);

//alert
//alert("Hola");

//Confirmaacion
//var resultado_anunciante = confirm("ar yu sur?");
//console.log(resultado_anunciante);

//Ingreso de datos
//var nombre_usuario = prompt("Ingrese su nombre", 18);
//console.log(nombre_usuario);

console.log("-------------------------------------------");
//Ejercicio-1
//Pedir dos numeros, validar que sean numeros, decir cual es mayor y si son iguales
/*
var num1 = parseInt(prompt("Ingrese numero 1:", 0));
var num2 = parseInt(prompt("Ingrese numero 2:", 0));

while (num1 <= 0 || num2 <= 0 || isNaN(num1) || isNaN(num2)) {
  num1 = parseInt(prompt("Ingrese numero 1:", 0));
  num2 = parseInt(prompt("Ingrese numero 2:", 0));
}

if (num1 > num2) {
  console.log("El numero: " + num1 + " es mayor que el numero: " + num2);
} else if (num1 < num2) {
  console.log("El numero: " + num2 + " es mayor que el numero: " + num1);
} else if (num1 == num2) {
  console.log("Los numeros son iguales");
}
*/

//Ejercicio 2
//Mostrar todos los números introducidos entre dos numeros
/*
var nume1 = parseInt(prompt("Ingrese numero 1:", 0));
var nume2 = parseInt(prompt("Ingrese numero 2:", 0));

document.write("<h1>De " +nume1 + " a " + nume2 + " están estos números: </h1>");
for(var i = nume1; i <= nume2;){
  i++;
  console.log(i);
  document.write(i+"</br>");
}
*/

//Ejercicio 3
//Mostrar los números impares entre dos numeros
/*
var nume1 = parseInt(prompt("Ingrese numero 1:", 0));
var nume2 = parseInt(prompt("Ingrese numero 2:", 0));

document.write(
  "<h1>De " + nume1 + " a " + nume2 + " estos son los siguientes impares </h1>",
);

while (nume1 < nume2) {
  nume1++;
  if (nume1 % 2 != 0) {
    console.log(nume1);
    document.write(nume1 + "</br>");
  }
}
*/

//Ejercicio 4
//Todos los numeros divisores de un numero introducido en un prompt
/*
var nume = parseInt(prompt("Número para buscar divisores: ", 1));
document.write("<h1>Los divisores de: " + nume + " son: </h1>");
for (var i = 0; i <= nume; i++) {
  if (nume % i == 0) {
    console.log(i);
    document.write(i + "</br>");
  }
}
*/

//Ejercicio 5
//Que nos diga si un numero es par o impar
//Ventana prompt que pida el número
//Comprobar que sea valido, que pida de nuevo

/*
while (isNaN(nume)){
  var nume = parseInt(prompt("Ingrese el numero: ", 0));
}

if(nume % 2 == 0){
  document.write("<h1> El numero: " + nume + " es par </h1>");
 console.log("El numero: " + nume + " es par");
}else{
  document.write("<h1> El numero: " + nume + " es impar </h1>");
  console.log("Metio un impar");
}
*/

//Ejercicio 6
//Tabla de multiplicar de un numero introducido en pantalla
/*
while (isNaN(nume) || nume == 0) {
  var nume = parseInt(prompt("Ingrese un numero : "));
}

for (var i = 1; i <= 10; i++) {
  document.write(
    "<h1> El numero:  " +
      nume +
      " multiplicado por: " +
      i +
      " es igual: " +
      i * nume +
      "</h1>",
  );
}
*/

//Ejercicio 7
/* Hacer una calculadora 
-Pedir dos numeros por pantalla, si metemos uno mal que nos lo vuelva a pedir
y mostrar el resultado de de sumar, restar, multiplicar y dividir esas dos cifras
*/

while (isNaN(nume) || nume < 0) {
  var nume = parseInt(prompt("Ingrese el primer numero : ", 0));
  var nume2 = parseInt(prompt("Ingrese el segundo numero : ", 0));
}
var suma = nume + nume2;
var resta = nume - nume2;
var mult = nume * nume2;
var div = nume / nume2;

document.write("<h1> La suma de: " + nume + " + " + nume2 + " es igual a: " + suma + " </br> La resta de: " + nume + " - " + nume2 + " es igual a: " + resta + "</br> La multiplicación de: " + nume + " * " + nume2 + " es igual a: " + mult + " </br> La division de: " + nume + " / " + nume2 + " es igual a: " + div + "</h1>")

