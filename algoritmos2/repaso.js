function suma() { 

    let num1 = 5;
    let num2 = 7;
    let resultado = (num1 + num2);
    return resultado;
}
console.log("la suma es;" + suma ());

function resta() { 

    let num1 = 15;
    let num2 = 12;
    let resultado = (num1 - num2);
    return resultado;
}
console.log("la resta es;" + resta ());

function multiplicacion() { 

    let num1 = 5;
    let num2 = 2;
    let resultado = (num1 * num2);
    return resultado;
}
console.log("la multiplicacion es" + multiplicacion ());

function division() { 

    let num1 = 5;
    let num2 = 2;
    let resultado = (num1 / num2);
    return resultado;
}
console.log("la division es" + division ());

function residuo() { 

    let num1 = 5;
    let num2 = 2;
    let resultado = (num1 % num2);
    return resultado;
}
console.log("el residuo es" + residuo ());


function incremento() { 

    let num1 = 5;
    
    let resultado = (++num1);
    return resultado;
}
console.log("el incremento es" + incremento ());

function decremento() { 

    let num1 = 5;
    
    let resultado = (--num1 );
    return resultado;
}
console.log("el residuo es" + decremento ());

function suma2(){
    let suma2 = parseInt (prompt ("El numero que vamos a sumar es; "));
    let suma3 = parseInt (prompt ("El numero que vamos a sumar es;"));
    let resultado = (suma2 + suma3) ;
    return resultado;
}
console.log("La suma es; " + suma2());

//if

/*function suma4 (){

    let num1 = 7;
    let num2 = 7;
    if (num1 == num2){
        let resultado = (num1 + num2)
        return resultado
    }
    
}
console.log ("la suma con el if es" + suma4());*/

//funcion void

function edad (){
    let miEdad = 9;
    if (miEdad >= 18){
      console.log ("eres mayor de edad");
    } else {console.log ("no eres mayor de edad");}
    
  
   }
edad()

//else es cuando la prueba logica no ha sido satisfactoria
/* la funcion esta dentro de las llaves, si la llamada
esta dentro de las llaves es como llamrte a ti mismo*/

/*los operadores logico hacen estructuras de controles mas grande 
and, or, not, and &&, or ||, not !*/

//operador and&&

function conjunciones(){

    let valor1 = false;
    let valor2 = true;
    if(valor1 && valor2) {
        console.log ("el valor1 y el valor2 son verdaderos");
    } else {
        console.log ("un valor es falso");
    }
}

conjunciones();


//operador or|| // va a ser verdadero solo que una de las variables ean verdera

function disyuncion(){

    let valor1 = false;
    let valor2 = true;
    if(valor1 || valor2) {
        console.log ("el operador or es verdadero");
    } else {
        console.log ("el operador or es falso");
    }
}

disyuncion();


//operador not !

function negacion(){

    let valor1 =  false;
if (! (!valor1)){
    console.log ("el valor es" + valor1);
} else {
    console.log("el valor negado es" + valor1);
}
}
negacion();

/*la doble negacion es una bandera*/

