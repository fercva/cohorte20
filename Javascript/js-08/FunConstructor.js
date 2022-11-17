let constructor = function () {
    let valor0 = 0;
    let valor1 = 0;

    let persona = {
        nombre: 'Sofia',
        apellido: 'Jimenez',
        suma: function (a, b){
            return a+b;
        },
        get nombre (){
            return this.nombre;
        },
        set nombre (nombre1){
          this.nombre = nombre1
        }
    };
    return persona;
};
let p1 = constructor ();
p1.nombre = 'Ximena'
console.log(p1.nombre);