//Ejercicio 3
// Crear un función llamada IMC el cual debe recibir el peso y la altura, por medio de la formula Peso / Altura ^ 2 y este resultado debe determinar la a que rango pertenece, los cuales son:
// Bajo (menor que 18,5), Normal (18,5 y 24,9), Sobrepeso (25,0 y 29,9) y Obeso (mayor a 30)


var peso = 50.0
var altura = 1.90

function IMC (){
    let imc = peso / altura^2
    if (imc < 18.5){
        console.log("Bajo")
    } else if (imc > 18.5 && imc < 24.9){
        console.log("Normal")
    } else if (imc > 25.0 && imc == 29.9){
        console.log("Sobre peso")
    } else if(imc > 30.0){
        console.log("Obesidad")
    } else {
        console.log("IMC no coincide")
    }
}

IMC();
