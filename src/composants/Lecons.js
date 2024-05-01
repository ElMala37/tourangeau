import React, { useState } from "react";
import Acceuil from "./Accueil";
import { useNavigate } from "react-router";

const Lecons = () => {
  const [ouvert, setOuvert] = useState(true);
  const navigate = useNavigate();

  const SePresenter = () => {
    navigate("/lecons/template");
  };

  return (
    <div className="Fond">
      <Acceuil ouvert={ouvert} setOuvert={setOuvert} titre="LEÇONS"/>
      <div className="Contenu">
        <div className="CarteTheme" onClick={SePresenter}>
          <text className="TitreCarteTheme">Template</text>
          <img src="/images/Vocabulaire/sepresenter.png" alt="LogoThemeSePresenter" className="LogoTheme"/>
        </div>
      </div>
    </div>
  );
};

export default Lecons;
