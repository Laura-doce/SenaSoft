//Ejercicio 2.
// Crear una función llamada Impuestos que reciba dos parametros edad y ingresos, en caso de que la edad sea mayor a 18 y los ingresos sean iguales a 1000 se debe sumar un 40% a los ingresos y mostrar cuanto se aunmento de impuesto. Por el contrario, mostrar el valor de los ingresos.

var edad = 11
var ingresos = 1000

function Impuesto () {
    if (edad >= 18 && ingresos == 1000){
         let tot = ingresos * 0.4
        console.log("Sus ingresos son:", tot)
    }else {
        console.log("Su ingreso es:", ingresos)
    }
}

Impuesto();