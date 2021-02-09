//desestrucutracion

const persona = {
    nombre:'Tony',
    edad:45,
    clave:'Ironman',
    //rango:'Soldado'
};

/* 
const {nombre: nombre2} = persona;

console.log(nombre2) */

const retornaPersona = ({clave,nombre, edad, rango= ' capitan'}) => {
    //console.log(nombre, edad,rango)

    return {
        nombreClave:clave,
        anios:edad,
        latLng:{
            lat: 14.1212,
            lng: -12.3232
        }
    }
}


const {nombreClave,anios, latLng:{lat,lng}} =  retornaPersona(persona);

console.log(nombreClave,anios);
console.log(lat,lng)