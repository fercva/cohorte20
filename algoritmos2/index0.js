//let miVariable = "Fernanda";
//alert(miVariable);

//function saludoPer () {alert(miVariable);}
//saludoPer();

//function saludoPer(miVariable = " Fer ") { alert(mi variable);}

//prompt te manda un cuadro que solucita datos
//alert solo te manda el cuadro de alerta

let miVariable = prompt("Cual es tu nombre: ");

function saludoPer(miVariable) {
  alert(miVariable);
}

//saludoPer(miVariable);

function suma() {
  let num1 = prompt("de el valor de numero 1: ");
  let num2 = prompt("de el valor de numero 2: ");
  let resultado = num1 + num2;
  alert(resultado);
}
suma();

//return: retornar valores mostrar valores
function suma() {
  //let num1 = parseInt( prompt( " de el valor del numero 1: "))
  //let num2 = parseInt ( prompt( " de el valor de nuestro numero 2:"))
  let num1 = 5;
  let num2 = 6;

  let resultado = num1 + num2;
  return resultado;
}

//let r = suma ();
//alert (suma());
console.log(suma());

alert(
  "la suma es " +
    suma() +
    "la resta es " +
    resta() +
    "la multiplicacion es " +
    multiplicacion() +
    " la division es" +
    division()
);
console.log ("el resultado de la multiplicacion " + mult());

function div() {
  let num = 30;
  let num2 = 5;
  if (true) {
    return num1 / num2;
  }
  
}
console.log ("el denominador es 0"());

function div() {
  let num = 30;
  let num2 = 0;
  if (num2 != 0) {
    ;
  }
  ;
}

console.log ("el resultado de la division es" + div());

function residuo() {
  let num1 = 7;
  let num2 = 2;
  let resultado = num1 % num2;
  return resultado;
}
console.log (!"el residuo es" + residuo());

function adicionales() {
  let num1 = 7;
  num1 /= num1 + (5 + 3);
  return num1;
}
console.log  ("el numero adicional es" + adicionales());

function logico() {
  let valido = 3;
  let valido2 = 5;
  if (valido > valido2) {
    console.log("el mayor es: " + valido2);
  }
  
}

 console.log ("el valor del boleano es: " + valido())


 function edad (){
  let miEdad = 8;
  if (miEdad >= 18){
    console.log ("eres mayor de edad");
  } else 
  console.log ("no eres mayor de edad");

 }
 //es un comentario en linea 
 /*esto es un cometario
 en bloque*/