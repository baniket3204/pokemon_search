let p = fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=50");
p.then(response => {
    return response.json()
}).then((value) =>{
    const pokemon = value.results;
    pokemon.forEach(pokemon =>{
        let url = pokemon.url;
        getNamesPhotos(url);
        
    })
    return value;
});

function getNamesPhotos(url)
{
  let val = fetch(url);
  val.then(response =>{
    return response.json()
  }).then((value) =>{

    
    // name start
    let name = value.species.name
    const head = document.createElement("h3");
    head.innerText = name;
    document.getElementById("pokemon").appendChild(head);
    // name end
    
    // type of Pokemon start
    let typeOfPokemon = value.types[0].type.name;
    const type = document.createElement("h3");
    type.innerText = typeOfPokemon;
    document.getElementById("pokemon").appendChild(type);
    console.log(typeOfPokemon);
    // type of pokemon end
    



    // image start
    let imageVal = value.sprites.front_default;
    const photo = document.createElement("img");
    photo.src = imageVal;
    document.getElementById("pokemon").appendChild(photo);
    // image end
   
    
    return value;
  })
}