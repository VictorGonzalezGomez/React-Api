import React from "react";
import Table from 'react-bootstrap/Table';

function PokemonTable({pokemonData}) {
  return (
    <Table striped bordered hover variant="dark">
      <thead>
      <tr>
        <th>Index</th>
        <th>Image</th>
        <th>Name</th>
        <th>Types</th>
      </tr>
      </thead>
      <tbody>
      {pokemonData.map((pokemon, index )=>(
        <tr key={index}>
          <td>#{pokemon.id}</td>
          <td><img src={pokemon.sprites.front_default}/></td>
          <td>{pokemon.name}</td>
          <td>{pokemon.types.map(type =>{
            return <li>{type.type.name}</li>
          })}</td>
        </tr>
      ))
      }
      </tbody>
    </Table>
  );
}

export default PokemonTable;