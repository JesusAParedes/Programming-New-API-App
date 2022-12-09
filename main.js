// require('dotenv').config();

let pokemonData1;
let pokemonData2;
let locArray;

const button = document.createElement('button');
button.innerHTML = 'Begin Battle!'
document.body.append(button);

window.onload = () => {
    grabData();
    background();
}

const grabData = () => {
    fetch('https://pokeapi.co/api/v2/pokemon/152/')
    .then(res => res.json())
    .then(array => {
        pokemonData1 = array
    });
    fetch('https://pokeapi.co/api/v2/pokemon/79/')
    .then(res => res.json())
    .then(arr => pokemonData2 = arr)
}



const background = () => {
    fetch('https://pokeapi.co/api/v2/location/1/')
    .then(res => res.json())
    .then(array => locArray = array)
    console.log(locArray)
}

const backSprite = () => {
    const div = document.createElement('div');
    const img = document.createElement('img');
    console.log(pokemonData1)
    img.src = pokemonData1.sprites.versions['generation-iv']['heartgold-soulsilver'].back_shiny
    div.append(img);
    document.body.append(div);
    
}

const frontSprite = () => {
    const div = document.createElement('div');
    const img = document.createElement('img');
    console.log(pokemonData2)
    img.src = pokemonData2.sprites.versions['generation-iv']['heartgold-soulsilver'].front_shiny
    div.append(img);
    document.body.append(div);
}

button.addEventListener('click', frontSprite);
button.addEventListener('click', backSprite);

