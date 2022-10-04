const boton = document.querySelector("#btn")
//console.log(boton)

boton.addEventListener("click", () => {
   // alert("Se ha hecho click")
   //confirm("Estas de acuerdo?") && console.log("OK")
   //confirm 
   const respuesta = confirm("seguro?")
   if (respuesta) {
    console.log("estas de acuerdo")
   }else {
    console.log("NO estas de acuerdo")
   }
})

const botonInfo = document.querySelector("#info")
botonInfo.addEventListener("click", () => {
    const nombre = prompt("Cual es tu nombre")
    console.log("tu nombre es" + nombre)
})

const lista = [{
    nombre: "Javier",
    edad:35
}, {
    nombre: "leia",
    edad:2
}]
console.table(lista)