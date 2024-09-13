//Ejercicio 8
// Crear una función llamada sumarRango la cual debe sumar los numeros del rango que reciba incluyendo los valores incial y final.

function sumarRango(incio, final){
    let suma = 0;
    for (let i = incio; i <= final; i++) {
        suma += i;
    }
    return suma;
}

console.log(sumarRango(1,4));