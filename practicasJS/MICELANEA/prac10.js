//Ejercicio 10
// Crear una funcion llamada numeroCaracteres que reciba dos string donde un es una palabra y el otro un caracter, este debe retornar el numero de veces que aparece el caracter ingresado.

function numeroCaracteres (palabra, caracter){
    palabra = palabra.toLowerCase();
    caracter = caracter.toLowerCase();

    let count = 0;
    for (let i = 0; i < palabra.length; i++) {
        if (palabra[i] === caracter) {
            count++;
        }
    }
    return count;
    }

console.log(numeroCaracteres("cubito de queso", "u"));
