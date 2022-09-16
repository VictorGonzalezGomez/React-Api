import React from "react";
import {Card} from "react-bootstrap";
import "nes.css/css/nes.min.css";
function Footer() {

  return(
    <Card className="nes-container is-dark">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            {' '}
          "Aqui podras encontrar la informacion basica de cada pokemon en la region de Kanto..."{' '}
          </p>
          <footer className="blockquote-footer">
            Profesor Oak <cite title="Source Title">Inventor de la Pokedex</cite>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  )
}

export default Footer;