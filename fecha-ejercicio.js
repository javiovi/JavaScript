const hoy =  new Date
console.log(hoy)

const nacimiento = new Date(1987, 3, 28)

const comparacion = hoy > nacimiento

const diaNacimiento = nacimiento.getDate()
console.log(diaNacimiento)

const mesNacimiento = nacimiento.getMonth()
console.log(mesNacimiento)

const anyoNacimiento = nacimiento.getFullYear()
console.log(anyoNacimiento)