async function searchPokemon(id) {
  output.innerHTML = "";
  const url = "https://pokeapi.co/api/v2/pokemon/" + id;
  const response = await fetch(url).catch(err => console.error(err));
  const data = await response.json();
  const name = data.name;
  const sprites = data.sprites.front_default;
  let typeData = "";
  if (data.types.length > 1){
    typeData = String(data.types[0].type.name + ", " + data.types[1].type.name);
  }else{
    typeData = String(data.types[0].type.name);}
  const type = typeData;
  const pokemon = document.createElement('div');
  const historyPokemon = document.createElement('div');
  pokemon.innerHTML = `
    <h2 id="outputName">Name:${name}</h2>
    <p>Type:${type}</p>
    <img src=${sprites} class="pokemonImage"></img>
    <a href="https://pokemon.fandom.com/wiki/${name}" target="_blank">A link to Pokemon fandom Wiki page</a>
    `;
  historyPokemon.innerHTML = `
    <p >${name}</p>
    `;
  
  output.appendChild(pokemon);
  historySearchNames.appendChild(historyPokemon);
}
