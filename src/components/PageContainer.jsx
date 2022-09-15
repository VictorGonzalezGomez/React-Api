import React, {useState} from "react";
import PokemonTable from "./PokemonTable";
import PokemonCard from "./PokemonCard";
import {Stack} from "react-bootstrap";
import SearchBar from "./SearchBar";

const PageContainer = ({pokemonData}) => {
  const [data, setData]=useState(pokemonData);
  console.log(data)
  return(
    <>
        <SearchBar pokemondata={pokemonData} setData={setData}/>
        <Stack direction="horizontal" gap={3} className="justify-content-center text-center my-1 mx-1">
            <PokemonCard/>
            <PokemonTable pokemonData={data}/>
        </Stack>

    </>
  )
}
export default PageContainer;