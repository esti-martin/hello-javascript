/*
Clase 20 - Ejercicios: Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=6458
*/

// 1. Crea una variable para cada operación aritmética
    let suma = 5 + 10;
    let resta = 5 - 10;
    let multiplicacion = 5 * 10;
    let division = 5 / 10;
    let modulo = 5 % 10;
    let exponente = 5 ** 10;
    let incremento = 5;
    incremento++;
    let decremento = 10;
    decremento--;

    console.log(suma);
    console.log(resta);
    console.log(multiplicacion);
    console.log(division);
    console.log(modulo);
    console.log(exponente);
    console.log(incremento);
    console.log(decremento);


// 2. Crea una variable para cada tipo de operación de asignación, que haga uso de las variables utilizadas para las operaciones aritméticas
    let sumaAsignacion = (suma += 5);
    let restaAsignacion = (resta -= 10);
    let multiplicacionAsignacion = (multiplicacion *= 5);
    let divisionAsignacion = (division /= 10);
    let moduloAsignacion = (modulo %= 5);
    let exponenteAsignacion = (exponente **= 5);

    console.log(sumaAsignacion);
    console.log(restaAsignacion);
    console.log(multiplicacionAsignacion);
    console.log(divisionAsignacion);
    console.log(moduloAsignacion); 
    console.log(exponenteAsignacion);
    


// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
    console.log(5 > 2);
    console.log(5 == '5');
    console.log (5 === 5);
    console.log(!(5 < 2));
    console.log(5 <= 10);

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
    console.log(5 < 2);
    console.log(5 === '5');
    console.log( 5 == 6);
    console.log(!(5 > 2));;
    console.log(5 >= 10);;

// 5. Utiliza el operador lógico and
    console.log(5 > 2 && 5 < 10);

// 6. Utiliza el operador lógico or
    console.log(5 > 2 || 5 > 10);

// 7. Combina ambos operadores lógicos
    console.log((5 > 2 && 5 < 10) ||(5 > 2 || 5 > 10)); 

// 8. Añade alguna negación
    console.log(!(5 > 2 && 5 < 10));

// 9. Utiliza el operador ternario
    const imMe = true;
    imMe ? console.log("Soy yo") : console.log("No soy yo");


// 10. Combina operadores aritméticos, de comparáción y lógicas
    let a = 5;
    let b = 10;
    let c = 15;

    console.log((a + b >= c) && (a < b)); // true
    console.log((a + b < c) || (a < b)); // true   