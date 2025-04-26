/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/

//===============================================
// if/else/else if/ternaria
//===============================================

// 1. Imprime por consola tu nombre si una variable toma su valor
    let name = "Manolo"

    const myName = name == "Esti" ? "Mi nombre es Esti" : "Mi nombre no es Esti"
    console.log(myName)

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
    let usuario = "esti-martin"
    let password = "1234"

    const user = (usuario == "esti-martin" && password == "1234") ? "El usuario y la contraseña son correctos" : "El usuario y/o la contraseña no son correctos"

    console.log(user);

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
    let num = 1;

    if (num < 0) {
        console.log ("El número es negativo")
    } else if (num > 0) {
        console.log ("El número es positivos")
    } else if (num == 0) {
        console.log ("El número es cero")
    }

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
    let edad = 15;

    if (edad >= 18) {
        console.log ("Puede votar")
    }
    if (edad <18) {
        console.log ('No puede votar, le faltan ' + (18 - edad) + ' años para poder votar')
    }

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 
    let edad2 = 14;

    const message = edad2 >= 18 ? "Adulto" : "Menor"
    console.log(message)

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
    let mes = 'agosto';

    if (mes == 'abril' || mes == 'mayo' || mes == 'junio') {
        console.log ('Es primavera')
    } else if (mes == 'julio' || mes == 'agosto' || mes == 'septiembre') {
        console.log ('Es verano')
    } else if (mes == 'octubre' || mes == 'noviembre' || mes == 'diciembre') {
        console.log ('Es otoño')
    } else if (mes == 'enero' || mes == 'febrero' || mes == 'marzo') {
        console.log ('Es invierno')
    } else {
        console.log ('El dato introducido no es un mes')
    }

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
    if (mes == 'enero' || 'marzo'  || 'mayo' || 'julio' || 'agosto' || 'octubre' || 'diciembre') {
        console.log ('El mes tiene 31 días')
    } else if (mes == 'abril' || 'junio' || 'septiembre' || 'noviembre') {
        console.log ('El mes tiene 30 días')
    } else if ( mes == 'febrero') {
        console.log ('El mes tiene 28 días')
    } else {
        console.log ('El dato introducido no es un mes')
    }
    

//===============================================
// switch
//===============================================

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
    let lang = 'en';
    let message2

    switch (lang) {
        case 'es':
            message2 = "Hola"
            break
        case 'en':
            message2 = "Hello"
            break
        case 'fr':
            message2 = "Bonjour"
            break
        default:
            message2 = "Idioma no soportado" 
    }

    console.log(message2);

// 9. Usa un switch para hacer de nuevo el ejercicio 6
    let estacion

    switch (mes) {
        case 'abril':
        case 'mayo':
        case 'junio':
            estacion = "Primavera"
            break
        case 'julio':
        case 'agosto':
        case 'septiembre':
            estacion = "Verano"
            break
        case 'octubre':
        case 'noviembre':
        case 'diciembre':
            estacion = "Otoño"
            break
        case 'enero':
        case 'febrero':
        case 'marzo':
            estacion = "Invierno"
            break
        default:
            estacion = "El dato introducido no es un mes"
    }
    console.log(estacion);

// 10. Usa un switch para hacer de nuevo el ejercicio 7
    let message3

    switch (mes) {
        case 'enero':
        case 'marzo':
        case 'mayo':
        case 'julio':
        case 'agosto':
        case 'octubre':
        case 'diciembre':
            message3 = "El mes tiene 31 días"
            break
        case 'abril':
        case 'junio':
        case 'septiembre':
        case 'noviembre':
            message3 = "El mes tiene 30 días"
            break
        case 'febrero':
            message3 = "El mes tiene 28 días"
            break
        default:
            message3 = "El dato introducido no es un mes"
    }

    console.log(message3);