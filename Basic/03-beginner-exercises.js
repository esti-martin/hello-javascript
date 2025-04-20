/*
Clase 18 - Ejercicios: primeros pasos
Vídeo: https://youtu.be/1glVfFxj8a4?t=4733
*/

// 1. Escribe un comentario en una línea
    // Este es un comentario en una línea

// 2. Escribe un comentario en varias líneas
    /*
    Este es
    un comentario
    en varias líneas
    */

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos
    let myString = 'texto'; //Cadena de texto
    let myNum = 5; // número
    let myUndefined //Undefined
    let myNull = null //Null
    let myBoolean = true; //Booleano
    let mySymbol = Symbol("mySymbol"); //Symbol
    let myBigInt = BigInt (123456789123456789123456787990); //BigInt

// 4. Imprime por consola el valor de todas las variables
    console.log (myString);
    console.log (myNum);
    console.log (myUndefined);
    console.log (myNull);
    console.log (myBoolean);
    console.log (mySymbol);
    console.log (myBigInt);

// 5. Imprime por consola el tipo de todas las variables
    console.log (typeof myString);
    console.log (typeof myNum);
    console.log (typeof myUndefined);
    console.log (typeof myNull);
    console.log (typeof myBoolean);
    console.log (typeof mySymbol);
    console.log (typeof myBigInt);

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
    myString = 'otro texto'; //Cadena de texto
    myNum = 8; // número
    myUndefined //Undefined
    myNull = 5 //Null
    myBoolean = false; //Booleano
    mySymbol = Symbol("myOtherSymbol"); //Symbol
    myBigInt = BigInt (98765432109987654321098766543321); //BigInt

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
    myString = 8; //Cadena de texto
    myNum = 'otro texto'; // número
    myUndefined = 5 //Undefined
    myNull = 5 //Null
    myBoolean = 5; //Booleano
    mySymbol = 'dfgd'; //Symbol
    myBigInt = 'dfgdf'; //BigInt

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
    const myString2 = 'texto'; //Cadena de texto
    const myNum2 = 5; // número
    //const myUndefined2 //Undefined
    const myNull2 = null //Null
    const myBoolean2 = true; //Booleano
    const mySymbol2 = Symbol("mySymbol"); //Symbol
    const myBigInt2 = BigInt (123456789123456789123456787990); //BigInt

// 9. A continuación, modifica los valores de las constantes
    /*
    myString2 = 'otro texto'; //Cadena de texto
    myNum2 = 8; // número
    //myUndefined2 //Undefined
    myNull2 = null //Null
    myBoolean2 = false; //Booleano
    mySymbol2 = Symbol("myOtherSymbol"); //Symbol
    myBigInt2 = BigInt (98765432109987654321098766543321); //BigInt
    */

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse