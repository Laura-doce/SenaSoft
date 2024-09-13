//Ejercicio 6
// Crear una funcion llamada Fuzzbuzz la cual recibe un numero y debe pasarlo a string, con las siguientes condiciones:
// Multiplo de 3 (Fuzz), Multiplo 5 (Buzz), Multiplo de 3 y 5 (FuzzBuzz) y sino aplica debe mostar al numero.

function Fuzzbuzz(number) {
    if (number % 3 === 0 && number % 5 === 0) {
        return 'FuzzBuzz';
    } else if (number % 3 === 0) {
        return 'Fuzz';
    } else if (number % 5 === 0) {
        return 'Buzz';
    } else {
        return number.toString();
    }
}

// Ejemplos de uso:
console.log(Fuzzbuzz(80));
