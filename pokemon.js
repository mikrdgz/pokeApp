'use strict'

function fetchReq(url){
return fetch(url)
    .then(res => res.json())
    .catch(err => console.log("Something went wrong"));
}

//array of Pokemon names to randomly populate requests
const pokemon = [
  "ditto",
  "pikachu",
  "gastly",
  "eevee",
  "psyduck",
  "squirtle",
  "bulbasaur",
  "charizard",
  "magikarp",
  "mew",
  "mewtwo",
  "articuno",
  "blastoise",
  "caterpie",
  "metapod",
  "pidgeot",
  "rattata",
  "arbok",
  "sandslash",
  "nidorina",
  "clefairy",
  "jigglypuff",
  "oddish",
  "vileplume"

];

// get two random pokemon

let randomPoke1 = pokemon[Math.floor(Math.random() * pokemon.length)];

let randomPoke2 = pokemon[Math.floor(Math.random() * pokemon.length)];


Promise.all([
 fetchReq('https://pokeapi.co/api/v2/pokemon/' + randomPoke1),
 fetchReq('https://pokeapi.co/api/v2/pokemon/' + randomPoke2)
 ]).then(data=>{
getPokemonOne(data["0"].name, data["0"].sprites.front_default, data["0"].stats["4"].base_stat)
getPokemonTwo(data["1"].name, data["1"].sprites.front_default, data["1"].stats["4"].base_stat)

})

 //functions to get data to DOM

 function getPokemonOne(name,img, attack){
     pokemonOne.innerHTML = "<h2>" + name.charAt(0).toUpperCase() + name.slice(1) + "</h2>"; 
     imgOne.innerHTML = `<img src= ${img}>`
     attackStat1.innerHTML = `Attack power: ${attack}`
    
     pokeBattle.push(attack);
 }
 
 function getPokemonTwo(name,img, attack){
    pokemonTwo.innerHTML = "<h2>" + name.charAt(0).toUpperCase() + name.slice(1) + "</h2>";
    imgTwo.innerHTML = `<img src= ${img}>`
    attackStat2.innerHTML = `Attack power: ${attack}`
    pokeBattle.push(attack);
    
}

    let pokeBattle = [];

// battle pokemon


function battle(){

    if(pokeBattle[0] > pokeBattle[1]) {
        document.getElementById("battle").innerHTML =  pokemonOne.innerHTML + " has won!"
    } else {
        document.getElementById("battle").innerHTML = pokemonTwo.innerHTML + " has won!"
    } 
}
