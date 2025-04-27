/*
Clase 30 - Ejercicios: Bucles
Vídeo: https://youtu.be/1glVfFxj8a4?t=12732
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20
    for (let i1 = 1; i1 <= 20; i1++) {
        console.log (i1)
    }


// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
    let i2 = 0
    while (i2 <= 100) {
        console.log(i2)
        i2++
    }


// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
    for (let i3 = 0; i3 <= 50; i3++) {
        if (i3 % 2 === 0) {
            console.log(i3)
        }
    }


// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
    const nombres = ['Juan', 'Maria', 'Pedro', 'Ana', 'Luis', 'Laura', 'Javier', 'Sofia', 'Diego', 'Valeria']

    for (let i4 = 0; i4 < nombres.length; i4++) {
        console.log (nombres[i4])
    }


// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
    const cadena = '¡Hola! ¿Cómo estás?'
    let contador = 0

    for (let i5 = 0; i5 < cadena.length; i5++) {
        const letra = cadena [i5].toLowerCase()
        if (['a', 'á', 'e', 'é', 'i', 'í', 'o', 'ó', 'u', 'ú'].includes(letra)) {
            contador++
        }
    }
    
    console.log (contador)


// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto (resultado)
    let arrayNums = [1, 2, 3, 4, 5, 6]
    let contador2 = 1

    for (let i6 = 0; i6 < arrayNums.length; i6++) {
        const num = arrayNums [i6]
        contador2 *= num
    }

    console.log (contador2)


// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
    for (let i7 = 5; i7 <= 50; i7 += 5) {
        console.log (i7)

    }


// 8. Usa un bucle para invertir una cadena de texto
    let cadena2 = "¡Hola, JavaScript!"
    let cadenaInvertida = ""

    for (let i8 = cadena2.length -1; i8 >= 0; i8--) {
        cadenaInvertida += cadena2[i8]
    }

    console.log (cadenaInvertida)


// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
    //Primeros números de la secuencia de Fibonacci
    let fib1 = 0;
    let fib2 = 1;
    //Array para almacenar los números iniciacizado con el primer número (fib1 = 0)
    let fibonacci = [fib1];

    //El bucle se ejecuta 10 veces para generar los primeros 10 números de la secuencia
    for (let i9 = 0; i9 < 10; i9++) {
        //Se declara fib3 como el siguiente número de la secuencia de Fibonacci
        let fib3 = fib1 + fib2

        //Se actualizan los valores
        fib1 = fib2
        fib2 = fib3

        //Se añade el número al array
        fibonacci.push(fib1)
    }

    console.log(fibonacci)

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
    let myNums = [8, 2, 541, 54, 1, 12, 84, 4, 465]

    for (let i10 = 0; i10 < myNums.length; i10++) {
        if (myNums[i10] >= 10) {
            console.log (myNums[i10])
        }
    }



    