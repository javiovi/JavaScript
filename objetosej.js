const datos = {
    nombre : "Javier",
    apellido : "Oviedo",
    edad: 35,
    altura: 170,
    eresDesarrollador: true
}

const edad = datos.edad
const lista = [
    { 
        ...datos
    },
    {
        nombre: "Sebastian",
        apellido: "Coso",
        edad: "33",
        altura: 190,
        eresDesarrollador: false
    },{
        nombre: "Sara",
        apellido: "Castelli",
        edad: "25",
        altura: 150,
        eresDesarrollador: false
    }
]

const listaOrdenada = lista.sort((a, b) => b.edad - a.edad)
console.log(listaOrdenada)