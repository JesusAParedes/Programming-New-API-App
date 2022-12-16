// require('dotenv').config();

let pokemonData1;
let pokemonData2;
let localArray;
let localArray2;

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

    const but2 = document.createElement('button');
    but2.id = "but2";
    but2.innerHTML = 'Slowpoke Stats';
    document.body.append(but2);

    but2.addEventListener('click', createTable2);

}

const backSprite = () => {
    const div2 = document.createElement('div');
    const img = document.createElement('img');
    console.log(pokemonData1)
    img.src = pokemonData1.sprites.versions['generation-iv']['heartgold-soulsilver'].back_shiny
    div2.append(img);
    document.body.append(div2);
    
    const but = document.createElement('button');
    but.id = "but";
    but.innerHTML = 'Chikorita Stats';
    document.body.append(but);

    but.addEventListener('click', createTable);

}

const createTable = (localArray) => {
    const table = document.createElement('table');
    const di = document.getElementById('something');
    localArray = Object.values(pokemonData1);
    // console.log(localArray)

    localArray.forEach(info => {
        let aRow = document.createElement('tr');
        Object.values(info).filter((name, pos) => {
            // console.log(name)
            if((name === pokemonData1.name) && (Object.values(info).indexOf(name) === pos)) {
                let cell = document.createElement('td');
                cell.innerText = name
                aRow.appendChild(cell);
            }})

        let bRow = document.createElement('tr');
        Object.values(info).forEach((typesObject, pos) => {
            if(typesObject !== null) {
                Object.values(typesObject).forEach(typeObject => {
                    Object.values(typeObject).filter(type => {
                        // console.log(type);
                        if((type === pokemonData1.types[0].type['name']) && (Object.values(typeObject).indexOf(type) === pos)) {
                        let cell = document.createElement('td');
                        cell.innerText = type
                        bRow.appendChild(cell);
                    }})})}})

        let cRow = document.createElement('tr');
        Object.values(info).forEach((typesObject, pos) => {
            // console.log(typesObject)
            if(typesObject !== null) {
                Object.values(typesObject).filter((baseStat,index) => {
                // console.log(baseStat)
                    if((baseStat === pokemonData1.stats[1].base_stat) && (Object.values(typesObject).indexOf(baseStat) === index)) {
                    let cell = document.createElement('td');
                    cell.innerText = baseStat
                    cRow.appendChild(cell)
                }})}})

        table.appendChild(aRow);
        table.appendChild(bRow);
        table.appendChild(cRow);
    })
    di.append(table);
}

const createTable2 = (localArray2) => {
    const table = document.createElement('table');
    const di = document.getElementById('something');
    localArray2 = Object.values(pokemonData2);
    console.log(localArray2)

    localArray2.forEach(info => {
        let aRow = document.createElement('tr');
        Object.values(info).filter((name, pos) => {
            // console.log(name)
            if((name === pokemonData2.name) && (Object.values(info).indexOf(name) === pos)) {
                let cell = document.createElement('td');
                cell.innerText = name
                aRow.appendChild(cell);
            }})

        let bRow = document.createElement('tr');
        Object.values(info).forEach((typesObject, pos) => {
            if(typesObject !== null) {
                Object.values(typesObject).forEach(typeObject => {
                    Object.values(typeObject).filter(type => {
                        // console.log(type);
                        if((type === pokemonData2.types[0].type['name']) && (Object.values(typeObject).indexOf(type) === pos)) {
                        let cell = document.createElement('td');
                        cell.innerText = type
                        bRow.appendChild(cell);
                    }})})}})

        let cRow = document.createElement('tr');
        Object.values(info).forEach((typesObject, pos) => {
            // console.log(typesObject)
            if(typesObject !== null) {
                Object.values(typesObject).filter((baseStat,index) => {
                console.log(baseStat)
                    if((baseStat === pokemonData2.stats[1].base_stat) && (Object.values(typesObject).indexOf(baseStat) === index)) {
                    let cell = document.createElement('td');
                    cell.innerText = baseStat
                    cRow.appendChild(cell)
                }})}})

        table.appendChild(aRow);
        table.appendChild(bRow);
        table.appendChild(cRow);
    })
    di.append(table);
}

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

const pokemonInfo1 = () => {
    const li = document.createElement('li');

    localArray = Object.values(pokemonData1);

    const text = document.createTextNode(`Pokemon's Type: ${localArray[16][0].type.name}
    Base Attack Stat: ${localArray[15][1].base_stat}`)
        console.log(text);
        li.appendChild(text);
        but.append(li);

    }
    



const pokemonInfo2 = () => {
    const li = document.createElement('li');

    localArray2 = Object.values(pokemonData2);

    const text = document.createTextNode(`Pokemon's Type: ${localArray2[16][0].type.name}
    Base Attack Stat: ${localArray2[15][1].base_stat}`)
        console.log(text);
        li.appendChild(text);
        but2.append(li);
}




button.addEventListener('click', frontSprite);
button.addEventListener('click', backSprite);




