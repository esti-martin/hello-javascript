/*
Clase 27 - Maps
Vídeo: https://youtu.be/1glVfFxj8a4?t=10755
*/

// Map --> Tienen una estructura de clave-valor. ["name", "Brais"] --> ["clave", "valor"]. La clave no puede repetirse. El valor puede repetirse.

//==============================================================================
// Declaración
//==============================================================================

    let myMap = new Map()

    console.log(myMap) // Devuelve --> Map(0) {}. Entre paréntesis el número de elementos que tiene el map. En este caso, 0.

//==============================================================================
// Inicialiación
//==============================================================================

    //Inicializamos ya con valores

    myMap = new Map([ // El conjunto se mete dentro de parentesis + corchetes ([ ]).
        ["name", "Brais"], // Cada elemento del conjunto va dentro de unos corchetes y separados por coma [x, y].
        ["email", "braismoure@mouredev.com"],
        ["age", 37] // Cuando es un string se pone entre comillas, pero si es un número no es necesario.
    ])

    console.log(myMap) // Devuelve --> Map(3) {'name' => 'Brais', 'email' => 'braismoure@mouredev.com', 'age' => 37}

//==============================================================================
// Métodos y propiedades
//==============================================================================

    //==============================================================================
    // set
    //==============================================================================

        // Set: Añade o actualiza un elemento

        myMap.set("alias", "mouredev") // Añade el elemento alias al map. --> Map(4) {'name' => 'Brais', 'email' => 'braismoure@mouredev.com', 'age' => 37, 'alias' => 'mouredev'}
        myMap.set("name", "Brais Moure") // Al meter una clave ya existente, no crea un elemento nuevo, sino que modifica el valor de dicha clave. --> Map(4) {'name' => 'Brais Moure', 'email' => 'braismoure@mouredev.com', 'age' => 37, 'alias' => 'mouredev'}

        console.log(myMap)


    //==============================================================================
    // get
    //==============================================================================

        // Get: Obtener el valor de una clave. Si no existe, devuelve undefined.

        console.log(myMap.get("name")) // Devuelve --> Brais Moure
        console.log(myMap.get("surname")) // Devuelve --> undefined. No existe la clave "surname" en el map.


    //==============================================================================
    // has
    //==============================================================================

        // Has: Comprobar si existe una clave en el map. Devuelve true o false.

        console.log(myMap.has("surname")) // Devuelve --> false. No existe la clave "surname" en el map.
        console.log(myMap.has("age")) // Devuelve --> true. Existe la clave "age" en el map.


    //==============================================================================
    // delete
    //==============================================================================

        // Delete: Eliminar un elemento del map. Devuelve true o false.

        myMap.delete("email") // Elimina el elemento "email" del map. --> Map(3) {'name' => 'Brais Moure', 'age' => 37, 'alias' => 'mouredev'}

        console.log(myMap)

    
    //==============================================================================
    // keys, values y entries
    //==============================================================================

        console.log(myMap.keys()) // Devuelve --> [Map Iterator] { 'name', 'age', 'alias' }. Devuelve un iterador con las claves del map.
        console.log(myMap.values()) // Devuelve --> [Map Iterator] { 'Brais Moure', 37, 'mouredev' }. Devuelve un iterador con los valores del map.
        console.log(myMap.entries()) // Devuelve --> [Map Iterator] { [ 'name', 'Brais Moure' ], [ 'age', 37 ], [ 'alias', 'mouredev' ] }. Devuelve un iterador con las entradas del map. Cada entrada es un array con la clave y el valor.

    
    //==============================================================================
    // size
    //==============================================================================

        console.log(myMap.size) // Devuelve --> 3. Devuelve el número de elementos que tiene el map. En este caso, 3.

    
    //==============================================================================
    // clear
    //==============================================================================

        // Clear: Elimina todos los elementos del map.
        // Se queda vacío, pero no se elimina el map. --> Map(0) {}.

        myMap.clear()

        console.log(myMap)



