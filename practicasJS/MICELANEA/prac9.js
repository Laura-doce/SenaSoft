//Ejercicio 9
// Crear una funcion llamada numerosDeA la cual debe retornar el numero de A que aparezcan en el string que recibe

function numerosDeA(palabra) {
    palabra = palabra.toUpperCase();
    const count = palabra.split('A').length - 1;
    return count;
}

console.log(numerosDeA("Sapito feliz, comiendo pan"));