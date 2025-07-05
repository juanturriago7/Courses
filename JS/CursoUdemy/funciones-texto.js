//Transformación de textos

var numero = 444;
var texto1 = " QLQ mamahuevo aguante el js ";
var texto2 = "como sería";

// Convertir numero en string
var dato = numero.toString();
console.log(typeof dato);

//Convertir mayusculas y minusculas
dato = texto1.toUpperCase();
console.log(dato);

dato = texto1.toLowerCase();
console.log(dato);

//Calcular longitud

var nombre = " ";

console.log(nombre.length);

//Concatenar - Unir textos
//var textoTotal = texto1 + " " + texto2;
var textoTotal = texto1.concat(" ", texto2);

console.log(textoTotal);

//Buscar una palabra dentro de un String
// search - indexOf - lastIndexOf - match
var busqueda = texto1.search("js");
console.log(busqueda);

//Va a sacar desde la posicion que se le indique el numero de caracteres a continuacion
var text = texto1.substr(25, 2);
console.log(text);

//Saca una letra que se le indique
var letra = texto1.charAt(2);
console.log(letra);

//Buscar el inicio del texto, retorna un true o false
//también existe el metodo endsWith
var buscar = texto1.startsWith("QLQ");
console.log(buscar);

//Buscar una palabra dentro de un texto, retorna un true o false
var buscarr = texto1.includes("js");
console.log(buscarr)

//Reemplazar texto por otro
var reemplazar = texto1.replace("js", "JavaScript");
console.log(reemplazar);

//Separar el string
//Después del caracter indicado, retorna el texto
//También se puede poner el limite hasta donde cortar
var partir = texto1.slice(4);
console.log(partir);

//Recortar las palabras
var recortar = texto1.split(" ");
console.log(recortar);


//Quitar los espacios por delante y por detras que tenga el string
var cortelo = texto1.trim();
console.log(cortelo);