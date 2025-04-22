/*
Clase 22 - Ejercicios: Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=7226
*/

// 1. Concatena dos cadenas de texto
    const firstName = "Esti";
    const lastName = "Martin";

    const fullName = firstName + " " + lastName;
    console.log(fullName); // Respuesta: Esti Martin

// 2. Muestra la longitud de una cadena de texto
    console.log (fullName.length); // Respuesta: 11

// 3. Muestra el primer y último carácter de un string
    console.log(fullName[0]); //Respuesta: E
    console.log(fullName[10]); //Respuesta: n

// 4. Convierte a mayúsculas y minúsculas un string
    console.log(fullName.toUpperCase()); //Respuesta: ESTI MARTIN
    console.log(fullName.toLowerCase()); //Respuesta: esti martin

// 5. Crea una cadena de texto en varias líneas
    const multilinea = `Esto es
    un String
    con varias
    líneas de texto`;

// 6. Interpola el valor de una variable en un string
    const años = 35;
    const greeting = `Hola soy ${fullName} y tengo ${años} años.`;
    console.log(greeting); // Respuesta: Hola soy Esti Martin y tengo 35 años

// 7. Reemplaza todos los espacios en blanco de un string por guiones
    console.log (greeting.replace(/ /g, "-")); // Respuesta: Hola-soy-Esti-Martin-y-tengo-35-años

// 8. Comprueba si una cadena de texto contiene una palabra concreta
    console.log(greeting.includes("Estibaliz")); //Respuesta: false
    console.log(greeting.includes("Esti")); //Respuesta: true

// 9. Comprueba si dos strings son iguales
    console.log(firstName === lastName); // Respuesta: false
    console.log(firstName === "Esti"); // Respuesta: true

// 10. Comprueba si dos strings tienen la misma longitud
    console.log(firstName.length === lastName.length); // Respuesta: false
    console.log(firstName.length === 4); // Respuesta: true