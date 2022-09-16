import React, {useEffect, useState} from "react";
import PokemonTable from "./PokemonTable";
import PokemonCard from "./PokemonCard";
import {Stack} from "react-bootstrap";
import SearchBar from "./SearchBar";
import Footer from "./Footer";

const PageContainer = ({pokemonData}) => {
  const [data, setData]=useState([]);
  useEffect(() => {
      setData(pokemonData)
  }, [pokemonData]);

  const handlerFilterAToZ = () => {
  const sortAZ = data.sort(function (a, b) {
      if (a.name > b.name) return 1;
      if (a.name < b.name) return -1;
      return 0;
    });
    setData([...sortAZ]);
  }
  const handlerFilterZtoA = () => {
    const sortZA = data.sort(function (a, b) {
      if (a.name < b.name) return 1;
      if (a.name > b.name) return -1;
      return 0;
    });
    setData([...sortZA]);
  }
  const handlerFilter1To9 = () => {
  const sortAZ = data.sort(function (a, b) {
      if (a.id > b.id) return 1;
      if (a.id < b.id) return -1;
      return 0;
    });
    setData([...sortAZ]);
  }
  const handlerFilter9to1 = () => {
    const sortZA = data.sort(function (a, b) {
      if (a.id < b.id) return 1;
      if (a.id > b.id) return -1;
      return 0;
    });
    setData([...sortZA]);
  }
  return(
    <>
        <SearchBar pokemondata={pokemonData} setData={setData}/>
        <Stack direction="horizontal" gap={3} className="justify-content-center my-1 mx-1 nes-container is is-dark">
            <PokemonCard data={data}/>
            <PokemonTable pokemonData={data} handlerFilterAToZ={handlerFilterAToZ}  handlerFilterZtoA={handlerFilterZtoA} handlerFilter1To9={handlerFilter1To9} handlerFilter9to1={handlerFilter9to1}/>
        </Stack>
        <Footer/>
    </>
  )
}
export default PageContainer;