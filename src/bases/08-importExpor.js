import  heroes, {owner} from "../data/heroes"

//el metodo find recorre el arreglo de heroes y cuando encuentra una coicidencia por id regresa el objeto.

/* const getHeroById = (id) => {
    return heroes.find((heroe)=>{
        if(heroe.id===id){
            return true;
        }else{
            return false;
        }
    });
} */

const  getHeroesById = (id) => {
    return heroes.find((heroe) => heroe.id === id);
}

//console.log(getHeroesById(3));

//el metodo filter recorre el arreglo y devuleve todos los objetos con coicidencia en este caso por owner 
const getHeroesByOwner = ( owner ) => heroes.filter((heroe) => heroe.owner === owner);

//console.log(getHeroesByOwner('Marvel'));


export default getHeroesById;

