const titulo = document.getElementById('titulo');
const parrafos = document.getElementsByClassName('parrafo');

titulo.textContent = "Hola"
parrafos[0].innerHTML= "Soy un parrafo"

console.log(titulo.textContent);
console.log(parrafos[1].textContent);

/*parrafos[1].style.color = "white";
parrafos[1].style.backgroundColor = "blue";*/

/*console.log (parrafos[1].classList.contains("coloresFeos"));*/

parrafos[1].classList.add("coloresFeos")



//crear elementos html//

const enlace = document.createElement("a");
enlace.href = 'https://www.google.com';
enlace.textContent = "Ir a google";

/*document.body.appendChild(enlace);*/
/*document.body.insertAdjacentElement("beforeend", enlace);*/
padre.appendChild(enlace);
console.log(enlace);
