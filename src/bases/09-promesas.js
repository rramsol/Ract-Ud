
import getHeroesById from '../src/bases/08-importExpor';
import heroes from './data/heroes';

/* 
const promesa = new Promise ((resolve, reject)=> {
    setTimeout(() => {
        const heroe = getHeroesById(3);
        resolve(heroe);
    }, 2000);
});

promesa.then((heroe)=>{
    console.log('heroe', heroe)
}).catch( e => console.warn(e))
 */


const getHeroByIdAsync = (id) =>{
    return  new Promise ((resolve, reject)=> {

        const heroe = getHeroesById(id);

        if(heroe === undefined){

            reject('Heroe no encontrado');

        }else{

            setTimeout(() => {
                resolve(heroe);
            }, 2000);
            
        }
       
    });
}
/* 
getHeroByIdAsync(10000)
    .then(heroe => console.log('Heroe', heroe))
    .catch(e => console.log(e)); */


getHeroByIdAsync(1)
    .then(console.log)
    .catch(console.log);