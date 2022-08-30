let nombre = "Javier"
let apellido = "Oviedo"

let estudiante = (nombre.concat(apellido))
let estudiante_Mayus = (estudiante.toUpperCase())
let estudiante_Minus = (estudiante.toLowerCase())
console.log(estudiante.length)

let inicialNombre = nombre.substring(0, 1)
let finalApellido = apellido.substring(apellido.length - 1, apellido.length)


let estudianteSinEspacios = estudiante.replace(/ /g, "")

let nombreEnEstudiante = estudiante.includes(nombre)