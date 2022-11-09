/*const foo = () => console.log ("First");
const bar = () => setTimeout(()=> console.log("Second"), 500);
const baz = () => console.log("Third");

bar();
foo();
baz();*/

const nombre = () => {
    const nombres = ["Jesus", "Maria", "Jose"];
    /*setTimeout(() => {
    return nombres;
    }, 3000);*/
    return new Promise((resolve, reject) => { //resolve--proceso exitoso//
        setTimeout(() => {                   //reject -- proceso no exitoso//
        resolve(nombres);
        }, 3000)
    });
}

console.log(nombre()[0]);
 
/*const url = 'https://pokeapi.co/api/v2/pokemon/25';

const pokedex = () => {
    fetch(url)
    .then(datos => datos.json())
    .then(pokemon =>  console.log(pokemon))
    .catch(error => console.log(error))
};


pokedex();*/