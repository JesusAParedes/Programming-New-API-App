// require('dotenv').config();

let pokemonData;
let locArray;

const button = document.createElement('button');
button.innerHTML = 'Begin Battle!'
document.body.append(button);

window.onload = () => {
    grabData();
    background();
}

const grabData = () => {
    fetch('https://pokeapi.co/api/v2/pokemon/35/')
    .then(res => res.json())
    .then(array => pokemonData = array)
    console.log(pokemonData)
}



const background = () => {
    fetch('https://pokeapi.co/api/v2/location/1/')
    .then(res => res.json())
    .then(array => locArray = array)
    console.log(locArray)
}

const backSprite = () => {
    const div = document.createElement('div');
    const img = new Image();
    
        img.src = pokemonData.sprites.versions['generation-iv']['heartgold-soulsilver'].back_shiny
    div.append(img);
    body.append(div);
        
}

button.addEventListener('onclick', backSprite());


const frontSprite = () => {
    pokemonData.map(sprite =>
        sprite.sprites.versions['generation-iv']['heartgold-soulsilver'].front_shiny);
}
