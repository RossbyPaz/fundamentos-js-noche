document.getElementById("demo").innerHTML = "Hello JavaScript";
document.getElementById("demo").style.fontSize = "35px";

//Salida de datos
window.alert("Hola, como estas?");
window.alert(5+2);
console.log(6+2);

//declaracion de variables
let a, b, c; //las variables
const M = 8; // las constantes
a = 5;
b = 6;
c = a + b + M;
document.getElementById("demo").innerHTML = c;

//Tipos de datos
let num = 24
let name = "Luis Vejarano"; // Cadena de caacteres
let km = 14.5;  // Numero Decimal
let persona = {firstName:"Ana", lastName:"Perez"}; //objeto

let y = 17 + "POO";  //js trata al numero como una cadena
let q = "17" + "POO"
document.getElementById("demo").innerHTML = y, q;


//Operadores aritmeticos
let num1 = 8; num2 = 4;
let suma, resta, multiplicacion, division;
suma = num1 + num2;
resta = num1 - num2;
multiplicacion = num1 * num2;
division = num1 / num2;
document.getElementById("Operaciones").innerHTML = "la suma es : "+suma + "la resta es: "
 + resta + "La multiplicacion es: " +multiplicacion + " La division es:" + division;

 //operadores comparacion

 let edad = 24;
 document.getElementById("comparacion").innerHTML = (edad >= 18);

 //Operadores lógicos
 let num4 = 6, num5 = 3;
 document.getElementById("comparacion").innerHTML =
  (num4 < 10 && num5 > 1 ) + "<br>" + (num4 < 10 && num5 < 1); //br salto de liner


  //Funciones
function myFunction(){
    document.getElementById("demo").innerHTML = "New paragraph";
}
