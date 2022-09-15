import React, {useEffect, useState} from "react";
import PokemonTable from "./PokemonTable";
import PokemonCard from "./PokemonCard";
import {Stack} from "react-bootstrap";
import SearchBar from "./SearchBar";

const PageContainer = ({pokemonData}) => {
  const [data, setData]=useState([]);
  useEffect(() => {
      setData(pokemonData)
  }, [pokemonData]);

  const handlerFilterAToZ = (data) => {
    setData(data.sort());
  }
  const handlerFilterZtoA = () => {
    setData(data.sort().reverse());
  }
  return(
    <>
        <SearchBar pokemondata={pokemonData} setData={setData}/>
        <Stack direction="horizontal" gap={3} className="justify-content-center text-center my-1 mx-1">
            <PokemonCard data={data}/>
            <PokemonTable pokemonData={data} handlerFilterAToZ={handlerFilterAToZ}  handlerFilterZtoA={handlerFilterZtoA}/>
        </Stack>

    </>
  )
}
export default PageContainer;