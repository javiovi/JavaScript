const persona = {
    nomnbre: "Javier",
    edad: 35,
    isDeveloper: true,
    saludo: function() {
        console.log('Hola')
    }
}
console.log(persona)

const otra_persona = {
    nombre: "Miguel",
    edad: 15,
    isDeveloper: false,
    saludo: function() {
        console.log('Hola')
    }
}
otra_persona.saludo()
//Funcion factory
const creaPersona = (nombre, edad, isDeveloper) => {
    return {
        nombre: nombre,
        edad: edad,
        isDeveloper: isDeveloper,
        saludo: function(){
            console.log('Hello')
        }
    }
}

const nueva_persona = creaPersona("Juan", 23, true)
console.log(nueva_persona)

const nueva_persona2 = creaPersona("Maria", 35, false)