import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const MyApi = () => {
  const [pokemonData, setPokemonData]=useState([]);
  const [nextUrl, setNextUrl]=useState('');
  const [prevUrl, setPrevUrl]=useState('');
  const [loading, setLoading]=useState(true);
  const initialURL = 'https://pokeapi.co/api/v2/pokemon?limit=7'

  useEffect(()=>{
    async function fetchData() {
      let response = await getAllPokemon(initialURL)
      setNextUrl(response.next);
      setPrevUrl(response.previous);
      await loadPokemon(response.results);
      setLoading(false);
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