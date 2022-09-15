import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const MyApi = () => {
  const [pokemonData, setPokemonData]=useState([]);
  const initialURL = 'https://pokeapi.co/api/v2/pokemon?limit=151'

  useEffect(()=>{
    async function fetchData() {
      let response = await getAllPokemon(initialURL)
      await loadPokemon(response.results);
    }
    fetchData();
  }, [])

  const loadPokemon = async (data) => {
    let _pokemonData = await Promise.all(data.map(async pokemon => {
      let pokemonRecord = await getPokemon(pokemon) 
      return pokemonRecord
    }))
    setPokemonData(_pokemonData);
  }
  
 async function getPokemon({ url }) {
  return new Promise((resolve, reject) => {
      fetch(url).then(res => res.json())
          .then(data => {
              resolve(data)
          })
  });
}
async function getAllPokemon(url) {
  return new Promise((resolve, reject) => {
      fetch(url).then(res => res.json())
          .then(data => {
              resolve(data)
          })
  });
}

  return pokemonData;
};
export default MyApi;