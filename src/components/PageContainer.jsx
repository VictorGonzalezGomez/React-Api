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
  const sortData= data.sort(function (a, z) {
      if (a.name > z.name) return 1;
      if (a.name < z.name) return -1;
      return 0;
    });
    setData([...sortData]);
  }
  const handlerFilterZtoA = () => {
    const sortData = data.sort(function (a, z) {
      if (a.name < z.name) return 1;
      if (a.name > z.name) return -1;
      return 0;
    });
    setData([...sortData]);
  }
  const handlerFilter1To9 = () => {
  const sortData = data.sort(function (one, nine) {
      if (one.id > nine.id) return 1;
      if (one.id < nine.id) return -1;
      return 0;
    });
    setData([...sortData]);
  }
  const handlerFilter9to1 = () => {
    const sortData = data.sort(function (a, b) {
      if (a.id < b.id) return 1;
      if (a.id > b.id) return -1;
      return 0;
    });
    setData([...sortData]);
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