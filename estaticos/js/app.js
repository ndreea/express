

//Creamos una costante para el body
const body = document.querySelector("body");

fetch("/color")
.then(respuesta => respuesta.json())
.then(({r,g,b}) => {
    body.style.backgroundColor = `rgb(${[r,g,b].join(",")})`;
})