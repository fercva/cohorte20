let x =10;
console.log(x);



let persona = {
nombre: 'Fernanda',
apellido: 'Cervantes',
nombreCompleto: function (){
    return 'El nombre es ' + this.nombre + ' ' + this.apellido;
}
}
for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }
}
console.log( persona );
console.log(persona.nombre);
console.log(persona.nombreCompleto());
console.log(persona['apellido']);

//let persona1 = new Object();
//persona1.edad = 28;
//console.log(persona1);