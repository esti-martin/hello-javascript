/*
Clase 28 - Ejercicios: Estructuras
Vídeo: https://youtu.be/1glVfFxj8a4?t=11451
*/

// 1. Crea un array que almacene cinco animales
    let arrayAnimales = ["Perro", "Gato", "Elefante", "Tigre", "León"]

    console.log(arrayAnimales) // Devuelve --> [ 'Perro', 'Gato', 'Elefante', 'Tigre', 'León' ]


// 2. Añade dos más. Uno al principio y otro al final
    arrayAnimales.push("Cebra") // Añade al final del array
    arrayAnimales.push("Panda") // Añade al final del array

    console.log(arrayAnimales) // Devuelve --> [ 'Perro', 'Gato', 'Elefante', 'Tigre', 'León', 'Cebra', 'Panda' ]


// 3. Elimina el que se encuentra en tercera posición
    arrayAnimales.splice(2, 1) // Elimina el elemento que se encuentra en la posición 2. En este caso, "Elefante".

    console.log(arrayAnimales) // Devuelve --> [ 'Perro', 'Gato', 'Tigre', 'León', 'Cebra', 'Panda' ]


// 4. Crea un set que almacene cinco libros
    let libros = new Set(["El Quijote", "Cien años de soledad", "Crimen y castigo", "Orgullo y prejuicio", "1984"]);

    console.log(libros) // Devuelve --> Set(5) { 'El Quijote', 'Cien años de soledad', 'Crimen y castigo', 'Orgullo y prejuicio', '1984' }


// 5. Añade dos más. Uno de ellos repetido
    let libros2 = new Set(["El Quijote", "Cien años de soledad", "Crimen y castigo", "Orgullo y prejuicio", "1984"]);

    libros2.add("Lo que el viento se llevó")
    libros2.add("El Quijote")

    console.log(libros2) // Devuelve --> Set(6) { 'El Quijote', 'Cien años de soledad', 'Crimen y castigo', 'Orgullo y prejuicio', '1984', 'Lo que el viento se llevó' }


// 6. Elimina uno concreto a tu elección
    libros2.delete("1984")

    console.log(libros2) // Devuelve --> Set(5) { 'El Quijote', 'Cien años de soledad', 'Crimen y castigo', 'Orgullo y prejuicio', 'Lo que el viento se llevó' }


// 7. Crea un mapa que asocie el número del mes a su nombre
    let mes = new Map ()
    
    mes = new Map ([
        [1, "Enero"],
        [2, "Febrero"],
        [3, "Marzo"],
        [4, "Abril"],
        [5, "Mayo"],
        [6, "Junio"],
        [7, "Julio"],
        [8, "Agosto"],
        [9, "Septiembre"],
        [10, "Octubre"],
        [11, "Noviembre"],
        [12, "Diciembre"]
    ]);

    console.log(mes) // Devuelve --> Map(12) { 1 => 'Enero', 2 => 'Febrero', 3 => 'Marzo', 4 => 'Abril', 5 => 'Mayo', 6 => 'Junio', 7 => 'Julio', 8 => 'Agosto', 9 => 'Septiembre', 10 => 'Octubre', 11 => 'Noviembre', 12 => 'Diciembre' }

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
    
    if (mes.has(5)) {
        console.log(mes.get(5)) // Devuelve --> Mayo
    }
    

// 9. Añade al mapa una clave con un array que almacene los meses de verano
    mes.set("verano", ["Junio", "Julio", "Agosto"])

    console.log(mes) // Devuelve --> Map(13) { 1 => 'Enero', 2 => 'Febrero', 3 => 'Marzo', 4 => 'Abril', 5 => 'Mayo', 6 => 'Junio', 7 => 'Julio', 8 => 'Agosto', 9 => 'Septiembre', 10 => 'Octubre', 11 => 'Noviembre', 12 => 'Diciembre', 'verano' => [ 'Junio', 'Julio', 'Agosto' ] }


// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
    let arrayAnimales2 = ["Perro", "Gato", "Elefante", "Tigre", "León"]
    let setAnimales
    setAnimales = new Set (arrayAnimales2)

    console.log(setAnimales) // Devuelve --> Set(5) { 'Perro', 'Gato', 'Elefante', 'Tigre', 'León' }