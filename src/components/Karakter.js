// Karakter bileşeniniz buraya gelecek
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionBody,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import Filmler from "./Filmler.js";

const ContainerKarakterler = styled.div`
  width: 50vw;
  margin-left: auto;
  margin-right: auto;
  font-family: "Star Jedi";
  font-size: medium;
`;

const KarakterBilgileri = styled.div`
  border: 1px solid white;
  background-color: rgb(25 75 50 / 0.5);
  padding: 5px;
  border-radius: 5px;
  margin-top: 10px;
`;

export default function Karakter(props) {
  const [karakterler, setKarakterler] = useState();
  const [open, setOpen] = useState("");

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people/")
      .then((response) => {
        console.log(response.data);
        setKarakterler(response.data);
      })
      .catch((error) => {
        console.log("Error!" + error);
      });
  }, []);

  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  return (
    <ContainerKarakterler>
      {karakterler ? (
        karakterler.map((karakter) => (
          <KarakterBilgileri>
            <Accordion open={open} toggle={toggle}>
              <AccordionItem>
                <AccordionHeader targetId="1">{karakter.name}</AccordionHeader>
                <AccordionBody accordionId="1">
                  <p>height : {karakter.height}</p>
                  <p>mass : {karakter.mass}</p>
                  <p>hair_color : {karakter.hair_color}</p>
                  <p>skin_color :{karakter.skin_color}</p>
                  <p>eye_color :{karakter.eye_color}</p>
                  <p>birth_year :{karakter.birth_year}</p>
                  <p>gender :{karakter.gender}</p>
                  <p>homeworld :{karakter.homeworld}</p>
                  <Filmler filmler={karakter.films} />
                </AccordionBody>
              </AccordionItem>
            </Accordion>
          </KarakterBilgileri>
        ))
      ) : (
        <h3>Yükleniyor...</h3>
      )}
    </ContainerKarakterler>
  );
}
