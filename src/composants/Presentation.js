import React, { useState } from "react";
import "../styles/Lecons.css";
import Acceuil from "./Accueil";

const Presentation = () => {
  const [ouvert, setOuvert] = useState(true);

  return (
    <div className="Fond">
      <Acceuil ouvert={ouvert} setOuvert={setOuvert}/>
    </div>
  );
};

export default Presentation;
