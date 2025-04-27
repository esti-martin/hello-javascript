/*
Clase 31 - Funciones
Vídeo: https://youtu.be/1glVfFxj8a4?t=12829
*/

// Funciones

//==========================================================
// Función Simple
//==========================================================

    //Definimos la función
        function myFunc() {
            console.log("¡Hola, función!")
        }

    //Utilizamos la función    
        for (let i = 0; i < 5; i++) {
            myFunc()
        }


//==========================================================
// Función Con parámetros
//==========================================================

    function myFuncWithParams(name) {
        console.log(`¡Hola, ${name}!`)
    }

    myFuncWithParams("Brais")
    myFuncWithParams("MoureDev")


//==========================================================
// Funciones anónimas
//==========================================================

    // Es necesario meterlas en una variable para poder utilizarlas porque no tienen nombre propio.
    const myFunc2 = function (name) {
        console.log(`¡Hola, ${name}!`)
    }

    // Para llamar a la función, tenemos que llamar a la variable.
    myFunc2("Brais Moure")


//==========================================================
// Arrow functions --> Se suelen utilizar cuando queremos usar una función en una única línea
//==========================================================

    // Versión 1 --> Más larga
    // Es necesario meterlas en una variable para poder utilizarlas porque no tienen nombre propio.
    const myFunc3 = (name) => {
        console.log(`¡Hola, ${name}!`)
    }

    //Versión 2 --> Se puede reducir para ponerla en una única línea
    // Es necesario meterlas en una variable para poder utilizarlas porque no tienen nombre propio.
    const myFunc4 = (name) => console.log(`¡Hola, ${name}!`)

    // Para llamar a la función, tenemos que llamar a la variable.
    myFunc3("Brais Moure")
    myFunc4("Brais Moure")


//==========================================================
// Parámetros de las funciones
//==========================================================

    // Para meter varios parámetros, se separan por comas
    function sum(a, b) {
        console.log(a + b)
    }

    sum(5, 10) //Devuelve 15
    sum(5) // Devuelve NaN
    sum() //Devuelve NaN

    //==========================================================
    // Por defecto
    //==========================================================

        // Si a los parámetros le metemos valores por defecto
        function defaultSum(a = 0, b = 0) {
            console.log(a + b)
        }

        defaultSum() //Devuelve 0 --> 0 + 0
        defaultSum(5) //Devuelve 5 --> 5 + 0
        defaultSum(5, 10) //Devuelve 15 --> 5 + 10
        defaultSum(b = 5) //Devuelve 5 --> 0 + 5


    //==========================================================
    // Retorno de valores --> Si no queremos ver el resultado en terminal, pero queremos tener el resultado de la función.
    //==========================================================

        function mult(a, b) {
            return a * b // No se imprime en consola, sino que se convierte en la respuesta cuando el usuario llame a la función mult.
        }

        //Aquí, se mete el resultado de mult en una variable llamada result
        let result = mult(5, 10)
        console.log(result) // Devuelve 50, el resultado de la función.


//==========================================================
// Funciones anidadas
//==========================================================

    //Una función dentro de otra
    function extern() {
        console.log("Función externa")
        function intern() {
            console.log("Función interna")
        }
        intern() // Aquí sí que se puede llamar a la función intern() porque está dentro del campo de actuación de extern()
    }

    extern()
    // intern() Error: fuera del scope --> Esto sucede si llamamos a la función intern() fuera de la función extern()


//==========================================================
// Funciones de orden superior --> Funciones que contienen otras funciones como argumento (dentro de parametros)
//==========================================================

    //Será necesario meter en parámetros tanto la función que va dentro (func), como los parámetros (param) de la función que va dentro (func) para que funcione
    function applyFunc(func, param) {
        func(param) 
    }

    applyFunc(myFunc4, "función de orden superior") // Devuelve ¡Hola, función de orden superior!. 


//==========================================================
// forEach --> Es una función que sirve para ejecutar bucles asociados a elementos iterables
//==========================================================

    myArray = [1, 2, 3, 4]

    mySet = new Set(["Brais", "Moure", "mouredev", 37, true, "braismoure@mouredev.com"])

    myMap = new Map([
        ["name", "Brais"],
        ["email", "braismoure@mouredev.com"],
        ["age", 37]
    ])

    // Esta es la versión larga
    myArray.forEach(function (value) {
        console.log(value)
    })

    //Esta es la versión corta
    myArray.forEach((value) => console.log(value)) //Devuelve 1 2 3 4 


    mySet.forEach((value) => console.log(value)) //Devuelve Brais Moure mouredev 37 true braismoure@mouredev.com

    myMap.forEach((value) => console.log(value)) //Devuelve los valores del mapa. Brais braismoure@mouredev.com 37