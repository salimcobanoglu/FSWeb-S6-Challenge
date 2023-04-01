import React from "react";
import { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionBody,
} from "reactstrap";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

const Films = styled.div`
  background-color: rgb(10 75 25 / 0.5);
  color: white;
`;

export default function Filmler(props) {
  const { filmler } = props;
  const [open, setOpen] = useState("");

  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  return (
    <div className="ContainerFilmler">
      <Accordion open={open} toggle={toggle}>
        <AccordionItem>
          <AccordionHeader targetId="1">FILMS</AccordionHeader>
          <AccordionBody accordionId="1">
            {filmler &&
              filmler.map((film) => (
                <Films>
                  {" "}
                  <p>{film}</p>{" "}
                </Films>
              ))}
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
