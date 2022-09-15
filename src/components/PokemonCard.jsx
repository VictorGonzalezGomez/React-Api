import React from "react";
import {Card} from "react-bootstrap";

function PokemonCard({pokemons}) {
  return(
    <Card
      bg="danger"
      key="danger"
      text="dark"
      style={{ width: '18rem' }}
      className="mb-2"
    >
      <Card.Header>#</Card.Header>
      <Card.Body>
        <Card.Img variant="top" src=""/>
        <Card.Title> Tipo:</Card.Title>
        <Card.Text>
          Peso:
        </Card.Text>
        <Card.Text>
          Estatura:
        </Card.Text>
      </Card.Body>
    </Card>
  )

}
export default PokemonCard;