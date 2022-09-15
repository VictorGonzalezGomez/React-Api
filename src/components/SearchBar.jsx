import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {DebounceInput} from "react-debounce-input";


function SearchBar({pokemondata, setData }){

  const search = (filter) => setData(pokemondata.filter((pokemon)=> { return pokemon.name.includes(filter)}));

  return(
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand>Pokesearch</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          </Nav>

            <DebounceInput
              element={Form.Control}
              minLength={2}
              debounceTimeout={600}
              type="text"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e) => search(e.target.value)}
            />

        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default SearchBar;
