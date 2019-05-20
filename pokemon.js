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
  "magikarp"
];

// get two random pokemon

let randomPoke1 = pokemon[Math.floor(Math.random() * pokemon.length)];

let randomPoke2 = pokemon[Math.floor(Math.random() * pokemon.length)];


Promise.all([
 fetchReq('https://pokeapi.co/api/v2/pokemon/' + randomPoke1),
 fetchReq('https://pokeapi.co/api/v2/pokemon/' + randomPoke2)
 ]).then(data=>{
getPokemonOne(data["0"].name, data["0"].sprites.front_default)
getPokemonTwo(data["1"].name, data["1"].sprites.front_default)

})

 //functions to get data to DOM

 function getPokemonOne(name,img){
     pokemonOne.innerHTML = name;
     imgOne.innerHTML = `<img src= ${img}>`
     

 }

 function getPokemonTwo(name,img){
    pokemonTwo.innerHTML = name;
    imgTwo.innerHTML = `<img src= ${img}>`
    

}