class Estudiante  {
     nombre = "Javier"
     asignaturas = ["Javascript", "Html", "Css"]

     obtenDatos() {
        return {
            nombre: this.nombre,
            asignaturas: this.asignaturas
        }
     }

}

const estudiante = new Estudiante()

console.log(estudiante.obtenDatos())
