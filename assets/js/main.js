
const pokemonList = document.getElementById('pokemonList');
const LoadMoreButton = document.getElementById('LoadMoreButton');
const LoadLessItens = document.getElementById('LoadLessItens');

const gen1 = document.getElementById('gen1');
const gen2 = document.getElementById('gen2');
const gen3 = document.getElementById('gen3');
const gen4 = document.getElementById('gen4');
const gen5 = document.getElementById('gen5');
const gen6 = document.getElementById('gen6');
const gen7 = document.getElementById('gen7');
const gen8 = document.getElementById('gen8');


const maxRecords = 151
const minLess = 20
const limit = 12;
let offset = 0;





function loadPokemonItens(offset, limit) {    
    pokeapi.getPokemons(offset, limit).then( (pokemons = []) => {
        const newHtml = pokemons.map((pokemon) => `
            <li class="pokemon ${pokemon.type}">
                        <span class="number">#${pokemon.number}</span>
                        <span class="name">${pokemon.name}</span>       
                        
                        <div class="detail">
                            <ol class="types">
                                ${pokemon.types.map((type => `<li class="type ${type}">${type}</li>`)).join('')}
                            </ol>

                        <img src="${pokemon.photo}"
                         alt="${pokemon.name}">
                        </div>
                        <div class= detailAbs>
                            <ol class="abilities">
                                ${pokemon.abilities.map((ability => `<li class"ability ${ability}">${ability}`)).join('')}
                            </ol>
                        </div>
                           
                    </li>
                    `
        ).join('')
            pokemonList.innerHTML += newHtml
        })
    }
    

loadPokemonItens(offset, limit)



LoadMoreButton.addEventListener('click' , () => {
    offset += limit

    const qtdRecordMaxPage = offset + limit

    if (qtdRecordMaxPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)

        LoadMoreButton.parentElement.removeChild(LoadMoreButton)

    } else {
        loadPokemonItens(offset, limit)
    }
})

LoadLessItens.addEventListener('click' , () => {
    location.reload()
})

function reloadPokemonItems(offset, limit) {
    
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
    
        pokemonList.innerHTML = loadPokemonItens;
    
    });
}


gen1.addEventListener('click',() => {
    if (maxRecords !== 151) {
    offset = 0;
    maxRecords = 151;
    loadPokemonItens(offset, limit);
    }
});

gen2.addEventListener('click',() => {
    if (maxRecords !== 251) { 
    offset = 151;
    maxRecords = 251;
    loadPokemonItens(offset, limit);
    }
});

gen3.addEventListener('click',() => {
    if (maxRecords !== 386) {
    offset = 251;
    maxRecords = 386;
    loadPokemonItens(offset, limit);
    }
});

gen4.addEventListener('click',() => {
    if (maxRecords !== 493) {
    offset = 386;
    maxRecords = 493;
    loadPokemonItens(offset, limit);
    }
});

gen5.addEventListener('click',() => {
    if (maxRecords !== 649) {
    offset = 493;
    maxRecords = 649;
    loadPokemonItens(offset, limit);
    }
});

gen6.addEventListener('click',() => {
    if (maxRecords !== 721) { 
    offset = 649;
    maxRecords = 721;
    loadPokemonItens(offset, limit);
    }
});

gen7.addEventListener('click',() => {
    if (maxRecords !== 809) { 
    offset = 721;
    maxRecords = 809;
    loadPokemonItens(offset, limit);
    }
});

gen8.addEventListener('click',() => {
    if (maxRecords !== 905) {
    offset = 809;
    maxRecords = 905;
    loadPokemonItens(offset, limit);
    }
});