import React, {useEffect, useState} from "react";
import {Card} from "react-bootstrap";
const cardDefault = {
  id:1000000,
  name:"...",
  sprites:{front_default:""},
  types:[],
  weight:"...",
  height:"..."
}
function PokemonCard({data}) {
  const [firstPokemon, setFirstPokemon]=useState(cardDefault)
  useEffect(() => {
        setFirstPokemon(data[0] === undefined ? cardDefault : data[0])
  }, [data]);
  return(
    <Card
      bg="danger"
      key="danger"
      text="dark"
      style={{ width: '18rem' }}
      className="mb-2"
    >
      <Card.Header>#{firstPokemon.id} {firstPokemon.name}</Card.Header>
      <Card.Body>
        <Card.Img variant="top" src={firstPokemon.sprites.front_default}/>
        <Card.Title> Tipos: {firstPokemon.types.map((type, index) =>{
          return <li key={index}>{type.type.name}</li>
        })}</Card.Title>
        <Card.Text>
          Peso:{firstPokemon.weight}
        </Card.Text>
        <Card.Text>
          Estatura:{firstPokemon.height}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}
export default PokemonCard;