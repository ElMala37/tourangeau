import React, { useState } from "react";
import Acceuil from "./Accueil";
import { useNavigate } from "react-router";

const Conversation = () => {
  const [ouvert, setOuvert] = useState(true);
  const navigate = useNavigate();

  const SePresenter = () => {
    navigate("/conversation/sepresenter");
  };

  return (
    <div className="Fond">
      <Acceuil ouvert={ouvert} setOuvert={setOuvert} titre="VOCABULAIRE"/>
      <div className="Contenu">
        <div className="CarteTheme" onClick={SePresenter}>
          <text className="TitreCarteTheme">Se présenter</text>
          <img src="/images/Vocabulaire/sepresenter.png" alt="LogoThemeSePresenter" className="LogoTheme"/>
        </div>
      </div>
    </div>
  );
};

export default Conversation;
