/*
Clase 29 - Bucles
Vídeo: https://youtu.be/1glVfFxj8a4?t=11575
*/

// Loops o bucles

// ==========================================================================
// for
// ==========================================================================

    // Se ejecuta según se lanza.
    //Cada vez que se recorre el bucle si la condición es "true" se ejecuta el bloque de código.

    // i = 0 --> indica que el bucle empieza en 0
    // i < 5 --> indica que el bucle termina cuando i sea menor que 5
    // i++ --> indica que el bucle va a incrementar en 1 la variable i cada vez que se recorra el bucle.

    for (let i = 0; i < 5; i++) {
        console.log(`Hola ${i}`)
    }

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8]

    for (let i = 0; i < numbers.length; i++) {
        console.log(`Elemento: ${numbers[i]}`) // Devuelve --> Elemento: 1  Elemento: 2  Elemento: 3  Elemento: 4  Elemento: 5  Elemento: 6  Elemento: 7  Elemento: 8
    }

// ==========================================================================
// while
// ==========================================================================

    // Se ejecuta mientras la condición sea "true"
    // i <5 --> Indica el periodo de tiempo que va a estar el bucle en ejecución.

    let i = 0 // Crea una variable i y le asigna el valor 0
    while (i < 5) {
        console.log(`Hola ${i}`)
        i++ // Incrementa la variable i en 1 cada vez que corre el bucle
    }
    // Devuelve --> Hola 0  Hola 1  Hola 2  Hola 3  Hola 4


    // Bucle infinito. El código dentro de las llaves se ejecutará indefinidamente hasta el que se cierre el programa o se detenga la ejecución.
    // while(true) {
    // }


// ==========================================================================
// do while
// ==========================================================================

    // Se ejecuta al menos una vez y luego comprueba la condición.

    i = 6
    do {
        console.log(`Hola ${i}`)
        i++
    } while (i < 5)

    // Devuelve --> Hola 6 a pesar de no cumplir la condición y después, no se vuelve a ejecutar.


// ==========================================================================
// for of
// ==========================================================================

    // Se utilizar para recorer valores de algo que es iterable (estructuras de datos como arrays, strings, sets, maps, etc.)

    const myArray = [1, 2, 3, 4]

    const mySet = new Set(["Brais", "Moure", "mouredev", 37, true, "braismoure@mouredev.com"])

    const myMap = new Map([
        ["name", "Brais"],
        ["email", "braismoure@mouredev.com"],
        ["age", 37]
    ])

    const myString = "¡Hola, JavaScript!"

    for (let value of myArray) {
        console.log(value) // Devuelve --> 1 2 3 4
    }

    for (let value of mySet) {
        console.log(value) // Devuelve --> Brais Moure mouredev 37 true braismoure@mouredev.com
    }

    for (let value of myMap) {
        console.log(value) // Devuelve --> [ 'name', 'Brais' ] [ 'email', 'braismoure@mouredev.com' ] [ 'age', 37 ]
    }

    for (let value of myString) {
        console.log(value) // Devuelve --> ¡ H o l a ,   J a v a S c r i p t ! (Cada letra por separado)
    }

// ==========================================================================
// Buenaas prácticas: break y continue
// ==========================================================================

    for (let i = 0; i < 10; i++) {
        if (i == 5) {
            continue // Salta el número 5 y continúa con el siguiente número
        } else if (i == 7) {
            break // Termina el bucle cuando llega al número 7
        }
        console.log(`Hola ${i}`)
    }