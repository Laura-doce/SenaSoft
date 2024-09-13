//Ejercicio 7
// Crear una función llamada contarRango la cual recibe dos numeros y se deben retornar nos numeros entre ellos menos a los numero Incial y final.

function contarRange(incio, final){
    const result = [];
    for (let i = incio + 1; i < final; i++) {
        result.push(i);
    }
    return result;
}

console.log(contarRange(1,7));