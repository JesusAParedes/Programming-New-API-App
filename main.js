//variables for storing my data
let pokemonData1;
let pokemonData2;
let localArray;
let localArray2;

//paragraph created to tell user what to do
const p = document.createElement('p'); 
p.innerText = 'Choose your Pokemon! Type in names of two pokemon or their pokedex entries. (Up to 493)';
document.body.append(p);

//input for first pokemon created and put on page. Gave the input an id
const input1 = document.createElement('input'); 
input1.id = 'input1';
document.body.append(input1);

//input for second pokemon created and put on page. Gave the input an id.
const input2 = document.createElement('input'); 
input2.id = 'input2';
document.body.append(input2);

//button created that will choose pokemon by fetching the data from API
const fetchBut = document.createElement('button');
fetchBut.innerHTML = 'Choose your Pokemon!';
document.body.append(fetchBut);

//button that will load the selected data when clicked on to start battle
const battle = document.createElement('button');
battle.innerHTML = 'Start battle!'
document.body.append(battle);

//function that will fetch data from API
 const grabData = () => {
    //inp1 & inp2 are the values the user will put in the inputs to fetch the selected pokemon
    let inp1 = document.getElementById('input1').value;
    let inp2 = document.getElementById('input2').value;
    
    fetch('https://pokeapi.co/api/v2/pokemon/' + inp1)
    .then(res => res.json())
    .then(array => {
        pokemonData1 = array
    });
    fetch('https://pokeapi.co/api/v2/pokemon/' + inp2)
    .then(res => res.json())
    .then(arr => pokemonData2 = arr)
}

//Eventlistener that will fetch data from API when the button is clicked
fetchBut.addEventListener('click', grabData);

//place the sprite of the second pokemon onto the page
const frontSprite = () => {
    //create a div with an id
    const div = document.createElement('div');
    div.id = "div1"
    //create an image
    const img = document.createElement('img');
    //grab the file for the image of the pokemon and attach it to the image element. Attach that image to the div and then to the body
    img.src = pokemonData2.sprites.versions['generation-iv']['heartgold-soulsilver'].front_shiny
    div.append(img);
    document.body.append(div);
}

//place the sprite of the first pokemon onto the page
const backSprite = () => {
    //create a div with an id
    const div2 = document.createElement('div');
     //create an image
    const img = document.createElement('img');
    //grab the file for the image of the pokemon and attach it to the image element. Attach that image to the div and then to the body
    img.src = pokemonData1.sprites.versions['generation-iv']['heartgold-soulsilver'].back_shiny
    div2.append(img);
    document.body.append(div2);
}

const createTable = () => {
    const table = document.createElement('table');
    let aRow = document.createElement('tr');
    let cell = document.createElement('td');
    let empty = document.createElement('td');
    let empty2 = document.createElement('td');
    let empty3 = document.createElement('td');
    let cell1 = document.createElement('td');
    let cell2 = document.createElement('td');
    cell.innerText = 'Name';
    cell1.innerText = 'Attack Stat';
    cell2.innerText = 'Type';
    aRow.appendChild(cell);
    aRow.appendChild(empty);
    aRow.appendChild(cell1);
    aRow.appendChild(cell2);
    table.appendChild(aRow);
    document.body.append(table);

    localArray = Object.entries(pokemonData1);
    console.log(localArray)
    let names = localArray.filter(info => info[0] === 'name');
    // console.log(names);
    let name = Object.entries(names);
    let poke1Cell1 = document.createElement('td');
    poke1Cell1.innerText =  name[0][1][1].toUpperCase();
    let stats = localArray.filter(stat => stat[0] === 'stats');
    let allStats = stats[0][1];
    let attack = allStats.filter(stat => stat.stat['name'] === 'attack');
    let poke1Cell2 = document.createElement('td');
    poke1Cell2.innerText = attack[0]['base_stat'];

    let bRow = document.createElement('tr');
    bRow.appendChild(poke1Cell1);
    bRow.appendChild(empty2);
    bRow.appendChild(poke1Cell2);
    table.appendChild(bRow);
    

    
    let types = localArray.filter(type => type[0] === 'types');
    for(let i=0; i< types.length; i++) { 
        let poke1Cell3 = document.createElement('td');
        pokemonType = types[0][1][i].type['name'];
        console.log(pokemonType);
        poke1Cell3.innerText += pokemonType;
        bRow.appendChild(poke1Cell3);
    } 

    localArray2 = Object.entries(pokemonData2);
    console.log(localArray2)
    let names2 = localArray2.filter(info => info[0] === 'name');
    // console.log(names);
    let name2 = Object.entries(names2);
    let poke2Cell1 = document.createElement('td');
    poke2Cell1.innerText =  name2[0][1][1].toUpperCase();
    let stats2 = localArray2.filter(stat => stat[0] === 'stats');
    let allStats2 = stats2[0][1];
    let attack2 = allStats2.filter(stat => stat.stat['name'] === 'attack');
    let poke2Cell2 = document.createElement('td');
    poke2Cell2.innerText = attack2[0]['base_stat'];

    let cRow = document.createElement('tr');
    cRow.appendChild(poke2Cell1);
    cRow.appendChild(empty3);
    cRow.appendChild(poke2Cell2);
    table.appendChild(cRow);

    
    let types2 = localArray2.filter(type => type[0] === 'types');
    for(let i=0; i< types2.length; i++) { 
        let poke2Cell3 = document.createElement('td');
        pokemonType2 = types2[0][1][i].type['name'];
        console.log(pokemonType2);
        poke2Cell3.innerText += pokemonType2;
        cRow.appendChild(poke2Cell3);
    } 
}

const checkWinner =() => {
    let userInput = document.getElementById('typeWinner').value;
    let checkInput = userInput.toLowerCase();
    if((pokemonData1.stats[1].base_stat > pokemonData2.stats[1].base_stat) && (pokemonData1.name === checkInput)) {
        return window.alert(`${pokemonData1.name} will win!`)
    }
    if((pokemonData1.stats[1].base_stat < pokemonData2.stats[1].base_stat) && (pokemonData2.name === checkInput)) {
        return window.alert(`${pokemonData2.name} will win!`)
    } 
    if((pokemonData1.stats[1].base_stat === pokemonData2.stats[1].base_stat)) {
        return window.alert(`Attack Stat equal. Try Again`)
    }
    if((checkInput !== pokemonData1.name) && (checkInput !== pokemonData2.name)) {
        return window.alert(`Pokemon Name Incorrect. Try Again.`)}
    else {return window.alert(`Try Again.`)}

}

const winnerInput = () => {
    const p = document.createElement('p');
    p.innerText = "Type in Pokemon's name to check."
    document.body.append(p);

    const typeWinner = document.createElement('input');
    typeWinner.id = 'typeWinner';
    document.body.append(typeWinner);

    const winner = document.createElement('button');
    winner.innerHTML = 'Who wins based off attack stat?';
    document.body.append(winner);

    winner.addEventListener('click', checkWinner);

}

battle.addEventListener('click', () => {
    frontSprite();
    backSprite();
    createTable();
    winnerInput();
})

// pokemonData1.types[0].type['name']  "pokemon's type"

//pokemonData1.name  "pokemon name"

//pokemonData1.stats[1].stat['name'] "pokemon base attack stat name"

//pokemonData1.stats[1].base_stat "pokemon base attack stat"\






















// const generateTableHead = (table, data) => {
//     let thead = table.createTHead();
//     let row = thead.insertRow();
//     for (let key of data) {
//         let th = document.createElement("th");
//         let text = document.createTextNode(key);
//         th.appendChild(text);
//         row.appendChild(th);
//     }
// }

// const generateTable = (table, data) => {
//     for (let element of data) {
//         let row = table.insertRow();
//         for (key in element) {
//             let cell = row.insertCell();
//             let text = document.createTextNode(element[key]);
//             cell.appendChild(text);
//         }
//     }
// }

// let table = document.querySelector("table");
// generateTable(table);

// const pokemonInfo1 = () => {
//     const li = document.createElement('li');

//     localArray = Object.values(pokemonData1);

//     const text = document.createTextNode(`Pokemon's Type: ${localArray[16][0].type.name}
//     Base Attack Stat: ${localArray[15][1].base_stat}`)
//         console.log(text);
//         li.appendChild(text);
//         but.append(li);

//     }
    



// const pokemonInfo2 = () => {
//     const li = document.createElement('li');

//     localArray2 = Object.values(pokemonData2);

//     const text = document.createTextNode(`Pokemon's Type: ${localArray2[16][0].type.name}
//     Base Attack Stat: ${localArray2[15][1].base_stat}`)
//         console.log(text);
//         li.appendChild(text);
//         but2.append(li);
// }









