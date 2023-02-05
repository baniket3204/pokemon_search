let p = fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1279");
p.then((response) => {
  return response.json();
}).then((value) => {
  const pokemon = value.results;
  pokemon.forEach( (pokemon) => {
    let url = pokemon.url;
    let name = pokemon.name;
    console.log(name);
    getNamesPhotos(url);
  });
  return value;
});

function getNamesPhotos(url) {
  let val = fetch(url);
  val
    .then((response) => {
      return response.json();
    })
    .then((value) => {
      
      const pokediv = document.createElement("div")
      pokediv.setAttribute("id" , "pokediv");

      // name start
      
      let name = value.species.name;
      const head = document.createElement("h4");
      head.innerText = name;
      head.setAttribute("id" , "head");
      

      // name end

      // image start
      
      let imageVal = value.sprites.front_default;
      const photo = document.createElement("img");
      photo.src = imageVal;
      photo.setAttribute("id" , "photo");
    
    
      // image end

      // type of Pokemon start

      let typeOfPokemon = value.types[0].type.name;
      const type = document.createElement("h4");
      type.innerText = typeOfPokemon;
      type.setAttribute("id" , "type");
      
      // type of pokemon end
      pokediv.appendChild(photo);
      pokediv.appendChild(head);
      pokediv.appendChild(type);
      document.getElementById("pokemon").appendChild(pokediv);
       
      return value;
    });
}
