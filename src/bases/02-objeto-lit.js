//Objeto literal

const persona = {
    nombre:'Tony',
    apellido:'Stark',
    edad:45,
    direccion:{
        ciudad:'New York',
        zip:23212112,
        lat:12.121221,
        lon:14.41212
    }
}

console.log(persona);


//forma correcta de crear otra persona con 3 puntos

const persona2 = {...persona};

persona2.nombre = 'peter';

console.log(persona2);