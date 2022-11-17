class Persona {
    constructor (nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }
    set nombre (nombre){
        this._nombre = nombre;
    }
    set apellido (apellido){
        this._apellido = apellido;
    }
    nombreCompleto (){
        return this._nombre + '' +  this._apellido
    }
}

class Empleado extends Persona{
    constructor(nombre,apellido,empresa){
        super(nombre,apellido);
     this._empresa = empresa;
    }
    set empresa (empresa){
        this._empresa = empresa;
    }
    get empresa (){
        return this._empresa;
    }

}

let p1 = new Persona('Sofia', 'Vergara');
console.log(p1.nombreCompleto());

let E1 = new Empleado('Aurora', 'Beyonce', 'Saks');
console.log(E1.nombreCompleto() + ' ' + E1._empresa);