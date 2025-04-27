/*
Clase 32 - Ejercicios: Funciones
Vídeo: https://youtu.be/1glVfFxj8a4?t=14146
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma
    function sum (a, b) {
        return a + b
    }

    console.log (sum (2, 4))


// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
    let myArray = [1, 2, 3, 4, 5, 32, 245, 4555]

    function maxNum(myArray) {
        let max = myArray[0];

        for (let i2 = 0; i2 < myArray.length; i2++) {
            if (myArray[i2] > max) {
                max = myArray[i2]
            }
        }
        return max;
    }

    console.log(maxNum (myArray))


// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
    let cadena = "¡Hola! ¿Cómo estás?"    

    function vocalsNum (cadena) {
        let contador = 0
        for (let i3 = 0; i3 < cadena.length; i3++) {
            const letra = cadena [i3].toLowerCase()
            if (['a', 'á', 'e', 'é', 'i', 'í', 'o', 'ó', 'u', 'ú'].includes(letra)) {
                contador++
            }
        }
        return contador
    }

    console.log (vocalsNum (cadena))


// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
    let stringsArray = ["hola, esto es un texto", "esto es otro texto", "y termino con este último"]

    function cadenaMayus (stringsArray) {
        let mayus = []

        for (let i4 = 0; i4 < stringsArray.length; i4++) {
            mayus.push(stringsArray[i4].toUpperCase())
        }
        return mayus
    }

    console.log (cadenaMayus (stringsArray))


// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario
    let num = 22

    function esPrimo (num) {
        if (num <= 1) { //Los números menores o iguales a 1 no son primos.
            return false
        }

        for ( let i5 = 2; i5 <= Math.sqrt(num); i5++) { // Recorre desde 2 hasta la raíz cuadrada de num. Solo necesitas verificar divisores hasta la raíz cuadrada del número, ya que cualquier divisor mayor a la raíz cuadrada tendrá un par menor que la raíz cuadrada.
            if (num % i5 === 0) { // Si es divisible por i, no es primo. Si el residuo de num dividido por i es 0, significa que num no es primo
                return false
            }
        }
        return true; // Si no se encontró ningún divisor, es primo
    }

    console.log (esPrimo(num))


// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos
    let array1 = [4, 4, 8, 4, 6, 7, 9]
    let array2 = [9, 2, 7, 4, 6, 5, 9]
    let newArray = []

    function sameElements (array1, array2) {
        let same = [] //Array para almacenar los elementos comunes

        for (let i6 = 0; i6 <= array1.length; i6++) {
           if (array2.includes(array1[i6]) && !same.includes(array1[i6])) {
            //Si el elemento está en el segundo array y no está ya en el array "same"
            same.push(array1[i6]); //Agrega el elemento al array "same"
           } 
        }
        return same; //Devuelve el array con los elementos comunes
    }

    console.log (sameElements(array1, array2))


// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares
    let myArray7 = [9, 2, 7, 4, 6, 5, 9]

    function sumPares (myArray7) {
        let suma = 0

        for (let i7 = 0; i7 < myArray7.length; i7++) {
            if ((myArray7[i7]) % 2 === 0) {
               suma += myArray7[i7]
            }
        }
        return suma
    }
        
   console.log (sumPares(myArray7))


// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado
    let array8 = [54, 2, 7, 4, 6, 5, 9]
    

    function numCuadrado (array8) {
        let newArray8 = []

        for (let i8 = 0; i8 < array8.length; i8++) {
            let cuadrado =  (array8 [i8]) ** 2
            newArray8.push(cuadrado)
        }
        return newArray8
    }

    console.log (numCuadrado (array8))


// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso
    let cadena9 = "¡Hola, JavaScript!"

    function cadenaInvers (cadena9) {
        let palabras = cadena9.split(" ") //Es necesario poner un espacio entre las comillas para que la división se realice por palabras y no por caracteres. Si se ponen sin el espacio, se divide por cada caracter.
        let palabrasInvertidas = palabras.reverse()
        let cadenaInvertida = palabrasInvertidas.join("")

        return cadenaInvertida
    }

    console.log(cadenaInvers(cadena9))


// 10. Crea una función que calcule el factorial de un número dado
    let num10 = 8

    function getFactorial (num10) {
        let resultado = 1 // Empieza en 1 y no en 0 porque para calcular el factorial se multiplica y cualquier número x0 es igual a 0.
        for (let i10 = 1; i10 <= num10; i10++) {
            resultado *= i10
        }
        return resultado
    }

    console.log(getFactorial(num10))