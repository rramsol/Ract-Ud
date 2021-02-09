//

const apiKey = '072intNhupQfrNzwe8z55FhTjY41astW';

const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);

peticion.then((resp) => {
    console.log(resp)
}).catch(console.warn)