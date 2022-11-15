
const pokemonList = document.getElementById('pokemonList');
const LoadMoreButton = document.getElementById('LoadMoreButton');
const LoadLessItens = document.getElementById('LoadLessItens');

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


   
