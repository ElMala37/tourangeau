import React, { useState } from "react";
import "../styles/Vocabulaire.css";
import Acceuil from "./Accueil";
import { useNavigate } from "react-router";

const Alphabet = () => {
  const [ouvert, setOuvert] = useState(true);
  const navigate = useNavigate();

  return (
    <div className="Fond">
      <Acceuil ouvert={ouvert} setOuvert={setOuvert} />
      <div className="Contenu">
        <div className="CarteTheme">
          <text className="TitreCarteTheme">Le nom des lettres</text>
        </div>
        <div className="CarteTheme">
          <text className="TitreCarteTheme">Le son des lettres</text>
        </div>
        <div className="CarteTheme">
          <text className="TitreCarteTheme">Les digraphes</text>
        </div>
      </div>
      <div className="Contenu">
        <div className="CarteTheme">
          <text className="TitreCarteTheme">Les trigraphes</text>
        </div>
        <div className="CarteTheme">
          <text className="TitreCarteTheme">La fin des mots</text>
        </div>
      </div>
    </div>
  );
};

export default Alphabet;
