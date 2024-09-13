//Ejercicio 5
// Crear una función llamada Like que recibe un numero y retorna un string, con la condicion que se agregue K (mil) o M (milones) y en caso de ser menor solo retornar el string.

function Like (num){
    if (num < 1000){
        return num.toString();

    } else if (num > 1_000_000){
        return (num / 1000000).toFixed(1) + "K";

    }else {
        return (num / 1_000_000).toFixed(1) + "M";
    }
}

console.log(Like(323098));