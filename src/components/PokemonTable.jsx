import React, {useState} from "react";
import Table from 'react-bootstrap/Table';
import {Card} from "react-bootstrap";
import {FaSortAlphaDown, FaSortAlphaUpAlt} from "react-icons/fa";
function PokemonTable({pokemonData, handlerFilterAToZ, handlerFilterZtoA}) {

  const [isFilterAZ, setIsFilterAZ]= useState(true);
const onHandleAZ = () => {
  setIsFilterAZ(false)
  handlerFilterAToZ();
}
const onHandleZA = () => {
  setIsFilterAZ(true)
  handlerFilterZtoA();
}

  return (
    <Card
      bg="danger"
      key="danger"
      text="dark"
      style={{width:'70rem'}}>
      <Card.Header>Pokelist</Card.Header>
      <Card.Body>
        <Table responsive striped bordered hover variant="dark" style={{height:'100%'}}>
          <thead>
          <tr>
            <th>Index</th>
            <th>Image</th>
            <th>Name {isFilterAZ? <FaSortAlphaDown onClick={() => onHandleAZ()}/>: <FaSortAlphaUpAlt onClick={() => onHandleZA()}/>} </th>
            <th>Types</th>
          </tr>
          </thead>
          <tbody className="scrollingContainer" >
          {pokemonData.map((pokemon, index )=>(
            <tr key={index} >
              <td>#{pokemon.id}</td>
              <td><img src={pokemon.sprites.front_default}/></td>
              <td>{pokemon.name}</td>
              <td>{pokemon.types.map((type, index) =>{
                return <li key={index}>{type.type.name}</li>
              })}</td>
            </tr>
          ))
          }
          </tbody>
        </Table>
      </Card.Body>


    </Card>
      );
}

export default PokemonTable;