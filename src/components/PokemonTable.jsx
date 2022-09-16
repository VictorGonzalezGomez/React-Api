import React, {useState} from "react";
import Table from 'react-bootstrap/Table';
import {Badge, Card} from "react-bootstrap";
import {FaSortAlphaDown, FaSortAlphaUpAlt, FaSortNumericDown, FaSortNumericDownAlt} from "react-icons/fa";

function PokemonTable({pokemonData, handlerFilterAToZ, handlerFilterZtoA, handlerFilter1To9, handlerFilter9to1}) {

  const [isFilterAZ, setIsFilterAZ] = useState(true);
  const [isFilter1to9, setIsFilter1to9] = useState(false);

  const onHandleAZ = () => {
    setIsFilterAZ(false)
    handlerFilterAToZ();
  }
  const onHandleZA = () => {
    setIsFilterAZ(true)
    handlerFilterZtoA();
  }
  const onHandle1to9 = () => {
    setIsFilter1to9(false)
    handlerFilter1To9();
  }
  const onHandle9to1 = () => {
    setIsFilter1to9(true)
    handlerFilter9to1();
  }

  return (
    <Card
      bg="danger"
      key="danger"
      text="dark"
      style={{
        width: '70rem',
        height: '500px'
      }}>
      <Card.Header>
        <Badge bg="primary">Pokelist</Badge>
        <Badge bg="dark">.</Badge>
        <Badge bg="warning">.</Badge>
        <Badge bg="success">.</Badge>
      </Card.Header>
      <Card.Body>

        <div id="customTable" className="customStickyTableHead">

          <Table striped bordered hover variant="dark" bg="dark" className="nes-container">
            <thead className="text-center" style={{
              position: 'sticky',
              top: '0'
            }}>
            <tr>
              <th style={{
                position: 'sticky',
                top: '0'
              }}>Index {isFilter1to9 ? <FaSortNumericDownAlt onClick={() => onHandle1to9()}/> :
                <FaSortNumericDown onClick={() => onHandle9to1()}/>}</th>
              <th style={{
                position: 'sticky',
                top: '0'
              }}>Image
              </th>
              <th style={{
                position: 'sticky',
                top: '0'
              }}>Name {isFilterAZ ? <FaSortAlphaDown onClick={() => onHandleAZ()}/> :
                <FaSortAlphaUpAlt onClick={() => onHandleZA()}/>} </th>

            </tr>
            </thead>
            <tbody>
            {pokemonData.map((pokemon, index) => (
              <tr key={index}>
                <td>#{pokemon.id}</td>
                <td><img src={pokemon.sprites.front_default} alt={pokemon.name}/></td>
                <td>{pokemon.name}</td>
              </tr>
            ))
            }
            </tbody>
          </Table>
        </div>
      </Card.Body>
    </Card>
  );
}

export default PokemonTable;