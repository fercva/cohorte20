/* Control de flujo */

let edad = Number (prompt("Escribe tu edad"));

/*if( condicion === true ){
bloque 
codigo
}*/
//console.log(edad === 18);
//console.log(18 === "18");

//== operador de comparacion 
//=== comparacion estricta 

/*if(edad == 18){
    document.write("Eres mayor de edad");
}else{
    document.write("Tas chiquito");
}*/
 /*if(( edad > 0) && (edad <= 17)){
    document.write("tas chiquito");
 }else if(edad === 18){
    document.write("Eres Mayor de edad");
  } else if(edad > 18){
        document.write("Tas ruco");
 } else if(edad > 0){
    document.write("Este es un numero negativo");
} else{
    document.write("Eso no es un numero valido");
 }

 //console.log (edad < 17 && edad > 0 );



 console.log(isNaN(edad));
 console.log(typeof edad);*/

let dia = 1;
if (dia === 1){
    document.write("Lunes")
}else if (dia === 2){
    document.write("Martes")
}else if (dia === 3){
    document.write("Miercoles")
}else if (dia === 4){
    document.write("Jueves")
}else if (dia === 5){
    document.write("Viernes")
}else if (dia === 6){
    document.write("Sabado")
}else if (dia === 7){
    document.write("Domingo")
}else{
    document.write("No es un numero valido")
}
