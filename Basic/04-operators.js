/*
Clase 19 - Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=4937
*/

//======================================================
// OPERADORES ARITMÉTICOS
//======================================================

    let a = 5
    let b = 10

    console.log(a + b) // Suma
    console.log(a - b) // Resta
    console.log(a * b) // Multiplicación
    console.log(a / b) // División

    console.log(a % b) // Módulo. Resto de una división
    console.log(a ** b) // Exponente. Al cuadrado

    a++ // Incremento +1
    console.log(a)

    b-- // Decremento -1
    console.log(b)



//======================================================
// OPERADORES DE ASIGNACIÓN
//======================================================

    let myVariable = 2
    console.log(myVariable) //Devuelve 2
    myVariable += 2 //Suma con asignación. Sería lo mismo que --> myVariable = myVariable + 2
    console.log(myVariable) //Devuelve 4

    myVariable -= 2 // Resta con asignación
    myVariable *= 2 // Multiplicación con asignación
    myVariable /= 2 // División con asignación
    myVariable %= 2 // Módulo con asignación
    myVariable **= 2 // Exponente con asignación


//======================================================
// OPERADORES DE COMPARACIÓN
//======================================================

    console.log(a > b) // Mayor que --> Resultado: false
    console.log(a < b) // Menor que --> Resultado: true

    console.log(a >= b) // Mayor o igual que --> Resultado: false
    console.log(a <= b) // Menor o igual que --> Resultado: true

    console.log(a == b) // Igualdad por valor --> Resultado: false
    console.log(a == 6) // Igualdad por valor --> Resultado: true. Es 6 y no 5 porque antes se ha hecho un a++, lo que hace que a sea 6.
    console.log(a == "6") // Igualdad por valor --> Resultado: true. Es 6 y no 5 porque antes se ha hecho un a++, lo que hace que a sea 6.
    console.log(a == a) // Igualdad por valor --> Resultado: true
    //Como se está trabajando con "==", no se tiene en cuenta el tipo de dato. Por eso, 6 == "6" devuelve true.

    console.log(a === a) // Igualdad por identidad (por tipo y valor) o igualdad estricta --> Resultado: true
    console.log(a === 6) // Igualdad por identidad (por tipo y valor) o igualdad estricta --> Resultado: true
    console.log(a === "6") // Igualdad por identidad (por tipo y valor) o igualdad estricta --> Resultado: false
    // Como se está trabajando con "===", se tiene en cuenta el tipo de dato. Por eso, 6 === "6" devuelve false.

    console.log(a != 6) // Desigualdad por valor --> Resultado: false
    console.log(a !== "6") // Desigualdad por identidad (por tipo y valor) o desigualdad estricta --> Resultado: true

        //======================================================
        // COSAS RARAS DE JS
        //=======================================================
        console.log(0 == false) // Resultado: true
        console.log(1 == false) // Resultado: false
        console.log(2 == false) // Resultado: false
        console.log(0 == "") // Resultado: true
        console.log(0 == " ") // Resultado: true
        console.log(0 == '') // Resultado: true
        console.log(0 == "Hola") // Resultado: false
        console.log(0 === "") // Resultado: false
        console.log(undefined == null) // Resultado: true
        console.log(undefined === null) // Resultado: false

            /*
            Truthy values (valores verdaderos)
            - Todos los numeros positivos y negativos menos el cero
            - Todas las cadenas de texto menos las vacías
            - El boolean true
            */

            /*
            Falsy values (valores falsos)
            - 0
            -  0n
            - null
            - undefined
            - NaN (Not a Number)
            - El boolean false
            - Cadenas de texto vacías 
            */

//======================================================
// OPERADORES LÓGICOS
//======================================================

    // and (&&)
    console.log(5 > 10 && 15 > 20) // Resultado: false
    console.log(5 < 10 && 15 < 20) // Resultado: true
    console.log(5 < 10 && 15 > 20) // Resultado: false
    console.log(5 > 10 && 15 > 20 && 30 > 40) // Resultado: false

    // or (||)
    console.log(5 > 10 || 15 > 20) // Resultado: false
    console.log(5 < 10 || 15 < 20) // Resultado: true
    console.log(5 < 10 || 15 > 20) // Resultado: true
    console.log(5 > 10 || 15 > 20 || 30 > 40) // Resultado: false

    console.log(5 > 10 && 15 > 20 || 30 < 40) // Resultado: true --> El && no se cumple, pero comom el || sí, devuelve true

    // not (!)
    console.log(!true) // Resultado: false
    console.log(!false) // Resultado: true
    console.log(!(5 > 10 && 15 > 20)) // Resultado: true --> El && no se cumple, por lo que el ! lo convierte en true
    console.log(!(5 > 10 || 15 > 20)) // Resultado: true --> El || no se cumple, por lo que el ! lo convierte en true



//======================================================    
// OPERARORES TERNARIOS
//======================================================
const isRaining = false
isRaining ? console.log("Está lloviendo") : console.log("No está lloviendo")

/*
? --> Si la condición es true, se ejecuta la primera parte
: --> Si la condición es false, se ejecuta la segunda parte

Se puede hacer de la siguiente manera también:
    const isRaining2 = true
    isRaining2 ? console.log("Está lloviendo") : console.log("No está lloviendo")
*/
