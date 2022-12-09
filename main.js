// require('dotenv').config();

let pokemonData1;
let pokemonData2;
let locArray;

const button = document.createElement('button');
button.innerHTML = 'Determine who wins!';
document.body.append(button);

window.onload = () => {
    grabData();
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

const frontSprite = () => {
    const div = document.createElement('div');
    div.id = "div1"
    const img = document.createElement('img');
    console.log(pokemonData2)
    img.src = pokemonData2.sprites.versions['generation-iv']['heartgold-soulsilver'].front_shiny
    div.append(img);
    document.body.append(div);
}

const backSprite = () => {
    const div2 = document.createElement('div');
    const img = document.createElement('img');
    console.log(pokemonData1)
    img.src = pokemonData1.sprites.versions['generation-iv']['heartgold-soulsilver'].back_shiny
    div2.append(img);
    document.body.append(div2);
    
}

const showStats = () => {
    const but = document.createElement('button');
    but.id = "but";
    const but2 = document.createElement('button');
    but2.id = "but2";
    but.innerHTML = 'Chikorita Stats';
    but2.innerHTML = 'Slowpoke Stats';
    document.body.append(but);
    document.body.append(but2);
}

button.addEventListener('click', frontSprite);
button.addEventListener('click', backSprite);
button.addEventListener('click', showStats);

// pokemonData1.types[0].type['name']  "pokemon's type"

//pokemonData1.name  "pokemon name"

//pokemonData1.stats[1].stat['name'] "pokemon base attack stat name"

//pokemonData1.stats[1].base_stat "pokemon base attack stat"


