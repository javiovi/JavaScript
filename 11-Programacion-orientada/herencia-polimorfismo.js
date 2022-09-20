
// Getter -> metodos que nos permiten optener atriburtos privados
//Setter -> metodos que nos permiten cambiar el valor de los atributos privados

// Inheritance - Herencia
class Persona {constructor(nombre, edad){
    this.nombre = nombre
    this.edad = edad
}
}
class Desarrollador extends Persona {
    constructor(nombre, edad, lenguaje){
        super(nombre, edad)
        this.lenguaje = lenguaje
    }
   
}

const nuevodev = new Desarrollador("Javier", 35, "Javascript")
console.log(nuevodev)


//Polimorfismo



