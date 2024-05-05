import React, { useState } from "react";
import Acceuil from "./Accueil";
import { useNavigate } from "react-router";

const Conversation = () => {
  const [ouvert, setOuvert] = useState(true);
  const navigate = useNavigate();

  const SePresenter = () => {
    navigate("/conversation/sepresenter");
  };

  const SePresenter2 = () => {
    navigate("/conversation/sepresenter2");
  };

  const Restaurant = () => {
    navigate("/conversation/restaurant");
  };

  const PasseTemps = () => {
    navigate("/conversation/passetemps");
  };

  return (
    <div className="Fond">
      <Acceuil ouvert={ouvert} setOuvert={setOuvert} titre="CONVERSATIONS"/>
      <div className="Contenu">
        <div className="CarteTheme" onClick={SePresenter}>
          <text className="TitreCarteTheme">Se présenter 1</text>
          <img src="/images/Conversations/sepresenter.png" alt="LogoThemeSePresenter" className="LogoTheme"/>
        </div>
        <div className="CarteTheme" onClick={SePresenter2}>
          <text className="TitreCarteTheme">Se présenter 2</text>
          <img src="/images/Conversations/sepresenter.png" alt="LogoThemeSePresenter2" className="LogoTheme"/>
        </div>
        <div className="CarteTheme" onClick={Restaurant}>
          <div className="EtiquetteDifficile">difficile</div>
          <text className="TitreCarteTheme">Au restaurant</text>
          <img src="/images/Conversations/restaurant.png" alt="LogoThemeRestaurant" className="LogoTheme"/>
        </div>
      </div>
      <div className="Contenu">
        <div className="CarteTheme" onClick={PasseTemps}>
          <text className="TitreCarteTheme">Les passe-temps</text>
          <img src="/images/Conversations/les-passe-temps.png" alt="LogoThemePasseTemps" className="LogoTheme"/>
        </div>
      </div>
    </div>
  );
};

export default Conversation;
