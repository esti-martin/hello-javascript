// TIPOS DE DATOS PRIMITIVOS

    // Cadena de texto (string)
    let myName = "Esti Martin";
    let alias = 'Yuri';
    let email = `email@dominio.com`;

    // Números (number)
    let age = 35; //Entero
    let height = 1.66; //Decimal

    // Booleanos (boolean)
    let isStudent = true;
    let isTeacher = false; 

    // Undefined - Variable declarada pero que no tiene un valor definido
    let undefinedValue

    // Null - Tiene un valor nulo. Intencionadamente hay una ausencia de valor
    let nullValue = null;

    // Symbol - tipo de dato único y primitivo que se utiliza para crear identificadores únicos. Cada vez que creas un Symbol, aunque uses la misma descripción, será completamente único. Esto es útil cuando necesitas claves únicas en objetos o quieres evitar conflictos entre propiedades. como una etiqueta única que puedes usar para identificar cosas, como propiedades en un objeto, sin preocuparte de que alguien más use la misma etiqueta.
    let mySymbol = Symbol("mySymbol");

    // BigInt - Un número entero muy grande.
    let myBigInt = BigInt(1234567890123456789012345678901234567890);
    let myBigInt2 = 1234567890123456789012345678901234567890n; // La "n" al final indica que es un BigInt

    
    
    // Mostramos los tipos de datos
    console.log (typeof myName);
    console.log (typeof alias);
    console.log (typeof email);

    console.log (typeof age);
    console.log (typeof height);

    console.log (typeof isStudent);
    console.log (typeof isTeacher);

    console.log (typeof undefinedValue);

    console.log (typeof nullValue);

    console.log (typeof mySymbol);

    console.log (typeof myBigInt);
    console.log (typeof myBigInt2);