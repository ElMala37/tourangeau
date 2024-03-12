import React, { useState } from "react";
import "../styles/Vocabulaire.css";
import Acceuil from "./Accueil";
import { useNavigate } from "react-router";

const Vocabulaire = () => {
  const [ouvert, setOuvert] = useState(true);
  const navigate = useNavigate();

  const Famille = () => {
    navigate("/vocabulaire/famille");
  };

  const Vetements = () => {
    navigate("/vocabulaire/vetements");
  };

  const Animaux = () => {
    navigate("/vocabulaire/animaux");
  };

  return (
    <div className="Fond">
      <Acceuil ouvert={ouvert} setOuvert={setOuvert} />
      <div className="Contenu">
        <div className="CarteTheme" onClick={Famille}>
          <text className="TitreCarteTheme">La famille</text>
          <img src="/images/Vocabulaire/famille.png" alt="LogoThemeFamille" className="LogoTheme"/>
        </div>
        <div className="CarteTheme" onClick={Vetements}>
          <text className="TitreCarteTheme">Les vêtements</text>
          <img src="/images/Vocabulaire/vetements.png" alt="LogoThemeFamille" className="LogoTheme"/>
        </div>
        <div className="CarteTheme" onClick={Animaux}>
          <text className="TitreCarteTheme">Les animaux</text>
          <img src="/images/Vocabulaire/animaux.png" alt="LogoThemeFamille" className="LogoTheme"/>
        </div>
      </div>
    </div>
  );
};

export default Vocabulaire;