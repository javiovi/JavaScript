class Persona {
    //Private -> #
    #nombre
    #edad

    //Protected -> _
    _isDeveloper = true


    nombre;
    edad;
    isDeveloper;
    constructor(nombre, edad, ){
        this.#nombre = nombre
        this.#edad = edad
       

    }



    saludo() {
        console.log(`Hola mi nombre es ${this.nombre}, tengo ${this.edad}`)
    }
    obtenNombre() {
        return this.#nombre
    }
}


const persona = new Persona("Javier", 80)
//console.log(persona)
//console.log(persona.nombre)
persona.saludo()

console.log(persona._isDeveloper)