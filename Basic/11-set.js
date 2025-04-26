/*
Clase 26 - Sets 
Vídeo: https://youtu.be/1glVfFxj8a4?t=9952
*/

// Set --> Listado de datos ordenados, pero sin acceso a los índices de selección. Se trabaja diferente a un array.

//==============================================================================
// Declaración
//==============================================================================

    // Set es necesario crearlo con new Set()

    let mySet = new Set()

    console.log(mySet) // --> Devuelve Set(0) {}. Entre paréntesis el número de elementos que tiene el set. En este caso, 0.

    /*
    let mySet2 = {} // Esto no es un set, es un objeto.
    */


//==============================================================================
// Inicialización
//==============================================================================

    /*
    // Esta no es la forma de inicializar un Set con datos. Solo tiene en cuenta el primer dato y los elementos que este tiene e ignora lo demás.

    mySet = new Set("Brais", "Moure", "mouredev", 37, true, "braismoure@mouredev.com")

    console.log(mySet) // Devuelve --> Set(5) {'B', 'r', 'a', 'i', 's'}
    */


    //La forma correcta de inicializar un Set con datos es la siguiente:

    mySet = new Set(["Brais", "Moure", "mouredev", 37, true, "braismoure@mouredev.com"]) // El conjunto de datos debe ir entre corchetes.

    console.log(mySet) // Devuelve --> Set(6) {'Brais', 'Moure', 'mouredev', 37, true, 'braismoure@mouredev.com'}


//==============================================================================
// Métodos comunes
//==============================================================================

    //==============================================================================
    // add y delete
    //==============================================================================


        // add: Añadir un elemento al final del set.

            mySet.add("https://moure.dev")

            console.log(mySet) // Devuelve --> Set(7) {'Brais', 'Moure', 'mouredev', 37, true, 'braismoure@mouredev.com', 'https://moure.dev'}


        // delete: Eliminar un elemento del set, pero hay que especificar qué elemento concreto hay que eliminar. 
            /*
            - No va a eliminar el último elemento, sino el que le digamos. 
            - No vale mySet.delete(). Esto no existe.
            - Si ponemos mySet.delete(6) no lo va a eliminar porque no funciona con índices y no existe el 6. Si le decimos que elimine el 6, lo que va a hacer es eliminar el elemento que tenga el valor 6.
            */

            mySet.delete("https://moure.dev")

            console.log(mySet) // Devuelve --> Set(6) {'Brais', 'Moure', 'mouredev', 37, true, 'braismoure@mouredev.com

            console.log(mySet.delete("Brais")) // Devuelve --> Elimina el elemento 'Brais' y devuelve true porque lo ha encontrado en el listado y lo ha eliminado.
            console.log(mySet.delete(4)) // Devuelve --> false porque no existe el elemento 4 en el listado y no lo ha eliminado.

            console.log(mySet) 


    //==============================================================================    
    // has
    //==============================================================================

        // No existe un índice, pero podemos comprobar si un elemento existe.

        console.log(mySet.has("Moure")) // Devuelve --> true porque existe el elemento "Moure" en el listado.
        console.log(mySet.has("Brais")) // Devuelve --> false porque no existe el elemento "Brais" en el listado porque lo hemos eliminado antes.


    //==============================================================================
    // size
    //==============================================================================

        // Devuelve el número de elementos que tiene el set.

        console.log(mySet.size) // Devuelve --> 5 porque tiene 5 elementos.


    //==============================================================================    
    // Convertir un set a array
    //==============================================================================
        
    let myArray = Array.from(mySet)
        console.log(myArray) // Devuelve un array con los elementos del set.


    //==============================================================================    
    // Convertir un array a set
    //==============================================================================

        mySet = new Set(myArray)
        console.log(mySet) // Devuelve un set con los elementos del array.


    //==============================================================================
    // No admite duplicados
    //==============================================================================

        mySet.add("braismoure@mouredev.com")
        mySet.add("braismoure@mouredev.com")
        mySet.add("braismoure@mouredev.com")
        mySet.add("BraisMoure@mouredev.com") // Tiene que entrar exactamente igual. Aquí, al meter dos mayusculas que en el otro elemento están en minúsculas, el elemento se añadiría.
        console.log(mySet) // Devuelve --> {"Brais", "Moure", "mouredev", 37, true, "braismoure@mouredev.com", "BraisMoure@mouredev.com"}