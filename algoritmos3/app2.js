//propiedades de arreglos
//length
const frutas= ["🍐", "Manzana", "Guayaba"];
console.log(frutas);
console.log(frutas.length);

//metodos-acciones
//push () agrega uno a mas elementos al final

frutas.push("Sandia", "Limón");
console.log(frutas);

//unshift() agrega uno o mas elementos al inicio


frutas.unshift("Guanabana")
console.log(frutas);

//metodospara quitar
//pop() quita un elemento del final 

let elemento = frutas.pop();
console.log(frutas);
console.log(elemento);


//shift() metodo para quitar del principio

let elemento2 = frutas.shift();
console.log(frutas);
console.log(elemento2);

//indexOf() para buscar un elemento dentro del arreglo
//indicarnos si hay un elento y en donde esta


console.log(frutas.indexOf("Manzana"));
console.log(frutas.indexOf("Guayaba"));


//reverse() poner al reves los datos 
//invierte el orden de los elementos 
//pasa el primero al ultimo y el ultimo al primero
//modifica el arreglo original

frutas.reverse();
console.log(frutas);

frutas.reverse();
console.log(frutas);

//sort() ordenar 

frutas.sort();
console.log(frutas);








