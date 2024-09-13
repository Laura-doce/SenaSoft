import axios from 'axios'

const url = "https://pokeapi.co/api/v2/pokemon/ditto"



//PROMESAS

//const promesa = new Promise (function(resolve, rejected){
//    const num = 0
//    if (num > 1){
//        resolve("Funcionamiento Correcto")
//    } else {
//        rejected("Funcion Incorrecta")
//    }
//})

//Modo async await

const promiseAsync = async() => {
    const respose = await axios(url)
    const abilities = await respose.data.abilities
    abilities.forEach((habilidad) => {
        console.log(habilidad.ability.name);
        console.log("------------");
        
    });
}

promiseAsync();
//Modo Promise
//axios (url).then(mensaje => mensaje.data )
//            .then(datos => datos.abilities.forEach((elemento) => {
//                console.log(elemento.ability.name)
//            }))
//        .catch((error) => { console.log(error) })
