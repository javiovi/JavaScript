const sup = ["Agua", "Queso", "Banana", "Leche"]
sup.push("Aceite de girasol")
console.log(sup)
sup.pop("Aceite de girasol")

const peliculas = [
    {
        titulo: "Star Wars",
        director: "George Lucas",
        fecha: new Date(1970, 3, 30)
    },
    {
        titulo: "Doctor Strange 2",
        director: "Sam Reimi",
        fecha: new Date(2022, 6, 16)
    },
    {
        titulo: "Avatar",
        director: "Cameron",
        fecha: new Date(2006, 0, 13)
    }
]
const peliculasNuevas = peliculas.filter(pelicula => pelicula.fecha > new Date(2010, 0, 1))
console.log(peliculasNuevas)
const directores = peliculas.map(pelicula => {
    return pelicula.director
})
const titulos = peliculas.map(pelicula => {
    return pelicula.titulo
})

const directores_titulos = directores.concat(titulos)
console.log(directores_titulos)

const directores_titulos_prop = [...directores, ...titulos]
console.log(directores_titulos_prop)