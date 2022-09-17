import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import PageContainer from "./PageContainer";

const MyApi = () => {
  const [pokemonData, setPokemonData]=useState([]);
  const [loading, setLoading]=useState(true);
  const initialURL = 'https://pokeapi.co/api/v2/pokemon?limit=151'

  useEffect(()=>{
    async function fetchData() {
      let response = await getAllPokemon(initialURL);
      await loadPokemon(response.results);
      setLoading(false);
    }
    const loadPokemon = async (data) => {
      let _pokemonData = await Promise.all(data.map(async pokemon => {
        let pokemonRecord = await getPokemon(pokemon);
        return pokemonRecord
      }))
      setPokemonData(_pokemonData);
    }
    fetchData();
  }, [])


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
  return (
    <>
      {loading? <div className="nes-container is-dark customLoadingScreen"><h1><i className="nes-ash"></i>Loading...</h1> </div>:(<PageContainer pokemonData={pokemonData}/>)}
    </>
  )
};
export default MyApi;