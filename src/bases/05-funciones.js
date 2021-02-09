//Funciones

//funcion normal
/* function saludar(nombre) {
    return ` hola ${ nombre}`
}
console.log(saludar('juan')) */

//******************************************************************************** 
// sobreescribir esta funccion es muy facil y por eso se usa una constante
/* const saludar2 = function saludar(nombre) {
    return ` hola ${ nombre}`
}
console.log(saludar2(`Fredy`)) */


//******************************************************************************** 
//funciones flecha
// no se usa la palabra function y si el return es de una sola linea se omite.
//const saludar3 = (nombre) => `Hola, ${ nombre }`

//******************************************************************************** 

/* const getUsuario = (nombre) =>
    ({
        uid:'ABC567',
        username:nombre
    });
 */




//Convertir a flecha

function getUsuarioActivo(nombre) {
    return {
        uid:'ABC567',
        username:nombre
    }
}

const usuarioActivo = getUsuarioActivo('fernando');
console.log(usuarioActivo);


const getUsuarioA = (nombre) => (
    {
        uid:'ABC567',
        username:nombre
    }
);

const usuarioA = getUsuarioA('Fredy');
console.log(usuarioA);