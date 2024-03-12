import React, { useState } from "react";
import "../styles/Apprendre.css";
import Acceuil from "./Accueil";
import { useNavigate } from "react-router";

const Apprendre = () => {
  const [ouvert, setOuvert] = useState(true);
  const navigate = useNavigate();

  const Famille = () => {
    navigate("/apprendre/famille");
  };

  const Vetements = () => {
    navigate("/apprendre/vetements");
  };

  return (
    <div className="Fond">
      <Acceuil ouvert={ouvert} setOuvert={setOuvert} />
      <div className="Contenu">
        <div className="CarteTheme" onClick={Famille}>
          <text className="TitreCarteTheme">La famille</text>
          <img src="/images/Apprendre/famille.png" alt="LogoThemeFamille" className="LogoTheme"/>
        </div>
        <div className="CarteTheme" onClick={Vetements}>
          <text className="TitreCarteTheme">Les vêtements</text>
          <img src="/images/Apprendre/vetements.png" alt="LogoThemeFamille" className="LogoTheme"/>
        </div>
        <div className="CarteTheme" onClick={Famille}>
          <text className="TitreCarteTheme">Le verbe être</text>
          <img src="/images/Apprendre/lecon.png" alt="LogoThemeFamille" className="LogoTheme"/>
        </div>
      </div>
    </div>
  );
};

export default Apprendre;
