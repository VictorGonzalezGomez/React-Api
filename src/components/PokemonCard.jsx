import React, {useEffect, useState} from "react";
import {Badge, Card, ListGroup, ListGroupItem} from "react-bootstrap";
import missingno from "../assets/img/MissingNO.webp"

const cardDefault = {
  id:"??????",
  name:"MISSIGNO",
  sprites:{front_default:missingno },
  types:[{slot:1,
  type: {name:"????"}}],
  weight:"10",
  height:"1"
}

function PokemonCard({data}) {
  const [firstPokemon, setFirstPokemon]=useState(cardDefault)
  useEffect(() => {
        setFirstPokemon(data[0] === undefined ? cardDefault : data[0])
  }, [data]);
  console.log(data)
  return (
    <Card
      bg="danger"
      key="danger"
      text="dark"
      style={{width: '18rem'}}
      className="mb-2"
    >
      <Card.Header>
        <Badge bg="primary">#{firstPokemon.id}</Badge>
        <Badge bg="dark">{firstPokemon.name}</Badge>
      </Card.Header>
      <Card.Body>
        <div className="nes-container is-dark">
          <Card.Img variant="top" src={firstPokemon.sprites.front_default} alt={firstPokemon.name} className="customImgBg"/>
        </div>

        <ListGroup>
          <ListGroupItem variant="dark"> Tipos: {firstPokemon.types.map((type, index) => {
          return <Badge key={index}>{type.type.name}</Badge>
        })}</ListGroupItem>
          <ListGroupItem variant="primary">
            Peso:{firstPokemon.weight}.
          </ListGroupItem>
          <ListGroupItem variant="success">
            Estatura:{firstPokemon.height}.
          </ListGroupItem>
        </ListGroup>

      </Card.Body>
    </Card>
  );
}
export default PokemonCard;