class OperacionesAritmeticas {
    numero0 = 0;
    numero1 = 0;

    constructor (valor0, valor1){
        this.numero0 = valor0;
        this.numero1 = valor1;
    }

    sumar (a,b) {
        return a + b;
    }
    
}
let obj1;
obj1 = new OperacionesAritmeticas(12,24);
console.log( obj1.sumar());

let obj2 = new OperacionesAritmeticas();

console.log( obj2.sumar(2,4) );