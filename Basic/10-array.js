/*
Clase 25 - Arrays
Vídeo: https://youtu.be/1glVfFxj8a4?t=8741
*/

// Array

//==============================================================================
// Declaración. Las dos opciones hacen lo mismo pero de diferente forma.
//==============================================================================

    let myArray = [] // Más recomendado, se escribe menos. 
    let myArray2 = new Array() 

    console.log(myArray) // --> Devuelve [ ]
    console.log(myArray2) // --> Devuelve [ ]

//==============================================================================
// Inicialización. Empezar a usar el array.
//==============================================================================

    // Inicialización con números.

        myArray = [3] // Cada parámentro se convierte, directamente, en una parte del array.
        myArray2 = new Array(3) // Para inicializar este array, es necesario meter un número entre paréntesis que será el número de elementos que tendrá el array.

        console.log(myArray) // --> Devuelve [ 3 ]
        console.log(myArray2) // --> Devuelve [ <3 empty items> ]

        myArray = [1, 2, 3, 4]
        myArray2 = new Array(1, 2, 3, 4)

        console.log(myArray) // --> Devuelve [ 1, 2, 3, 4 ]
        console.log(myArray2) // --> Devuelve [ 1, 2, 3, 4 ]


    // Inicialización con cadenas de texto.

        myArray = ["Brais", "Moure", "mouredev", 37, true] // Se pueden combinar diferentes tipos de datos y funciona igual.
        myArray2 = new Array("Brais", "Moure", "mouredev", 37, true) // Se pueden combinar diferentes tipos de datos y funciona igual.

        console.log(myArray) // --> Devuelve [ 'Brais', 'Moure', 'mouredev', 37, true ]
        console.log(myArray2) // --> Devuelve [ 'Brais', 'Moure', 'mouredev', 37, true ]


    // Se puede meter un dato en un hueco específico.

        myArray2 = new Array(3) // Se inicializa el array con 3 huecos vacíos.
        myArray2[2] = "Brais" // Se le asigna el valor "Brais" al hueco 2.
        // myArray2[0] = "Moure" // Se le asigna el valor "Moure" al hueco 0. pero como está comentado, en el hueco 0 no hay nada y devuelve <empty items>
        myArray2[1] = "mouredev" // Se le asigna el valor "mouredev" al hueco 1.
        myArray2[4] = "mouredev" // Se le asigna el valor "mouredev" al hueco 4. Lo añade nuevo, se sobredimensiona el tamaño.

        console.log(myArray2) // --> Devuelve [ 'mouredev', 'Brais', <empty items>, 'mouredev' ]


        myArray = []
        myArray[2] = "Brais"
        // myArray[0] = "Moure"
        myArray[1] = "mouredev"

        console.log(myArray)

//==============================================================================
// Métodos comunes
//==============================================================================

    myArray = [] // Inicializamos el array vacío.

    //==========================================================================
    // push y pop 
    //==========================================================================
    
        // Push: introduce elementos en el array

            myArray.push("Brais") // Como el array lo hemos inicializado vacío, añade el elemento en la posición 0 del array
            myArray.push("Moure") // Añade el elemento en la posición 1 del array
            myArray.push("mouredev") // Añade el elemento en la posición 2 del array
            myArray.push(37) // Añade el elemento en la posición 3 del array

            console.log(myArray) // Devuelve [ 'Brais', 'Moure', 'mouredev', 37 ]


        // Pop: elimina el último elemento del array y lo devuelve.

            console.log(myArray.pop()) // Devuelve 37. El elemento que va a eliminar.
            myArray.pop()

            console.log(myArray) // Devuelve [ 'Brais', 'Moure' ]


    //==========================================================================
    // shift y unshift 
    //==========================================================================

        // Shift: elimina el primer elemento del array y lo devuelve.

            console.log(myArray.shift()) // Devuelve Brais. El elemento que va a eliminar.
            console.log(myArray) // Devuelve [ 'Moure' ]. Por que en la acción anterior hemos eliminado el primer elemento del array y solo queda el segundo.


        // Unshift: añade un elemento al principio del array.

            myArray.unshift("Brais", "mouredev") // Añade los elementos al principio del array. En este caso, añade "Brais" y "mouredev" en la posición 0 y 1 respectivamente.
            console.log(myArray) // Devuelve [ 'Brais', 'mouredev', 'Moure' ]


    //==========================================================================
    // length 
    //==========================================================================

        // ¿Cuánto mide el array?

            console.log(myArray.length) // Devuelve 3. Por que hay 3 elementos en el array. 


    //==========================================================================
    // clear 
    //==========================================================================

        // Limpiar el array. Hay varias formas de hacerlo.

            // 1. Inicializarlo vacío.
            myArray = []

            // 2. Asignar el valor de longitud 0. Pero no es lo más recomendado.
            myArray.length = 0 // alternativa
            console.log(myArray)


    //========================================================================
    // slice
    //=======================================================================

        // Slice: devuelve una copia de una parte del array. No modifica el array original.

            myArray = ["Brais", "Moure", "mouredev", 37, true]

            let myNewArray = myArray.slice(1, 3) // Devuelve una copia del array desde la posición 1 hasta la posición 3 (sin incluir la posición 3). En este caso, devuelve [ 'Moure', 'mouredev' ].

            console.log(myArray) // Devuelve [ 'Brais', 'Moure', 'mouredev', 37, true ]. Por que no se ha modificado el array original.
            console.log(myNewArray) // Devuelve [ 'Moure', 'mouredev' ]. Los elementos 1 y 2 del array original (el 3 no se incluye).


    //========================================================================
    // splice 
    //=======================================================================

        // Splice: cambia el contenido de un array eliminando o reemplazando elementos existentes y/o agregando nuevos elementos en su lugar. Modifica el array original.

        myArray = ["Brais", "Moure", "mouredev", 37, true]

        myArray.splice(1, 3) // Elimina desde la posición 1, los siguientes 3 elementos. "Moure", "mouredev" y 37.
        console.log(myArray) // Devuelve [ 'Brais', true ]. Por que ha eliminado los elementos desde la posición 1 hasta la posición 3 (sin incluir la posición 3). En este caso, ha eliminado "Moure", "mouredev" y 37.

        myArray = ["Brais", "Moure", "mouredev", 37, true]

        myArray.splice(1, 2, "Nueva entrada")
        console.log(myArray) // Devuelve [ 'Brais', 'Nueva entrada', 37, true ]. Por que ha eliminado los elementos desde la posición 1 hasta la posición 2 (sin incluir la posición 2). En este caso, ha eliminado "Moure" y "mouredev" y ha añadido "Nueva entrada" en la posición 1.