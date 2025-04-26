/*
Clase 23 - Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=7277
*/

//===============================================
// if, else if, else
//===============================================

    // if (si) --> Solo se ejecuta la instrucción si se cumple la condición

    let age = 37

    if (age == 37) {
        console.log("La edad es 37")
    }

    // else (si no) --> Se ejecutan diferentes acciones, en función de si se cumple o no la condición

    if (age == 37) {
        console.log("La edad es 37")
    } else {
        console.log("La edad no es 37")
    }

    // else if (si no, si) --> Se ejecutan diferentes acciones, en función de si se cumple o no la condición. Se pueden añadir tantas como queramos.
    // En este caso, si la edad es 37, se ejecuta la primera instrucción. Si no, se evalúa la siguiente condición (si es menor de 18) y se ejecuta la instrucción correspondiente. Si no se cumple ninguna de las condiciones, se ejecuta la última instrucción.

    if (age == 37) {
        console.log("La edad es 37")
    } else if (age < 18) {
        console.log("Es menor de edad")
    } else {
        console.log("La edad no es 37 ni es menor de edad")
    }

//===============================================
// Operador ternario
//===============================================

    const message = age == 37 ? "La edad es 37" : "La edad no es 37"
    console.log(message)

//===============================================
// switch
//===============================================

    let day = 3
    let dayName

    switch (day) {
        case 0:
            dayName = "Lunes"
            break
        case 1:
            dayName = "Martes"
            break
        case 2:
            dayName = "Miércoles"
            break
        case 3:
            dayName = "Jueves"
            break
        case 4:
            dayName = "Viernes"
            break
        case 5:
            dayName = "Sábado"
            break
        case 6:
            dayName = "Domingo"
            break
        default:
            dayName = "Número de día incorrecto"
    }

    console.log(dayName)