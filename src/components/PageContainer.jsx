import React from "react";
import PokemonTable from "./PokemonTable";

const PageContainer = ({pokemonData}) => {

  return(
    <>
      <PokemonTable pokemonData={pokemonData}/>
    </>
  );
}

export default PageContainer;