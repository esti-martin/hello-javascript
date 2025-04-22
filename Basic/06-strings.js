/*
Clase 21 - Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=6565
*/

// Strings (cadenas de texto)

// Concatenación de cadenas de texto

let myName = "Brais"
let greeting = "Hola, " + myName + "!" //greeting = saludo
console.log(greeting) // Respuesta: Hola, Brais!
console.log(typeof greeting) // Respuesta: string

// Longitud. Cantidad de caracteres con espacios

console.log(greeting.length) // Respuesta: 12

// Acceso a caracteres

console.log(greeting[0]) // Respuesta: H
console.log(greeting[11]) // Respuesta: !

// Métodos comunes

console.log(greeting.toUpperCase()) // Mayúsculas
console.log(greeting.toLowerCase()) // Minúsculas
console.log(greeting.indexOf("Hola")) // Índice donde encuentra la palabra. Respuesta: 0.
console.log(greeting.indexOf("Brais")) // Índice donde encuentra la palabra. Respuesta: 6.
console.log(greeting.indexOf("MoureDev")) // Índice donde encuentra la palabra. Respuesta: -1 (no existe).
console.log(greeting.includes("Hola")) // Incluye esta palabra? Respuesta: true
console.log(greeting.includes("Brais")) // Incluye esta palabra? Respuesta: true
console.log(greeting.includes("MoureDev")) // Incluye esta palabra? Respuesta: false
console.log(greeting.slice(0, 10)) // Sección. Un trozo de la cadena que engloba entre el caracter 0 y el 10. Respuesta: Hola, Brai (excluye el último número, es decir, utiliza los caracteres del 0 al 9).
console.log(greeting.replace("Brais", "MoureDev")) // Reemplazo. Respuesta: Hola, MoureDev!

// Template literals (plantillas literales)

    // Strings en varias líneas. Se hace con comillas invertidas (backticks) ``.
    let message = `Hola, este
    es mi
    curso de
    JavaScript`
    console.log(message)

    // Interpolación de valores. Se hace con comillas invertidas (backticks) `` y ${} para insertar variables.
    let email = "braismoure@mouredev.com"
    console.log(`Hola, ${myName}! Tu email es ${email}.`)