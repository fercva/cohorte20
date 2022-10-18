//alert("funciona");

let nombre = "Fernanda"

console.log(nombre);


//Arreglos nos permite guardar mas de un dato en la variable
//manera formal


let arr1 = new Array ("Fernanda", "24", "true");
console.log(arr1);


//notacion de corchetes

console.log(arr1 [0]);//fernanda
console.log(arr1 [1]);//24

//mofificar valores o agregar valores 

console.log (arr1[3]);
arr1[3] = 555;
console.log(arr1[3]);

arr1[10] = 5;
console.log(arr1);

//cambiar algun tipo de dato

arr1[10] = "MTY"
console.log(arr1);

//manera simple

let arr2 = ["Fernanda", "Mty", "1994"];
console.log(arr2);

arr2[0] = 2;
console.log(arr2);



//length la candidad de arreglos dentro de la estructura
/* la posicion de nuestros valores 
se llama indice para referenciar comienza 
a partir del 0*/ 
//sirve para guardar una colleccion grande de datos

const arr3 = [];
console.log (arr3);
arr3[4] = "hola"
console.log (arr3);

//arreglos multidimensionales, matrices
//un arreglo dentro de otro

const arr4 = [1,  "Adios", false, [1]];
console.log (arr4[2]);
console.log (arr4[3][0]);


//la principal caracteristica 
//de const no se puede cambiar


