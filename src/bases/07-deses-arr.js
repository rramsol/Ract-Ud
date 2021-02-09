
/* const personajes = ['goku','Vegeta','Trunks'];
const [, , p3] = personajes;
console.log(p3) */

/* const retornaArreeglo = () => {
    return ['ABC',123];
}

const [letras,numeros] = retornaArreeglo();

console.log(letras, numeros) */


const tarea = (valor) => {
    return [valor,()=>{console.log('Hola mundo')}];
}

const [nombre,setNombre] = tarea('Goku');

console.log(nombre);
console.log(setNombre())