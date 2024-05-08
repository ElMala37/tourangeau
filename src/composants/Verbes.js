import React, { useState } from "react";
import Acceuil from "./Accueil";
import { useNavigate } from "react-router";

const Verbes = () => {
  const [ouvert, setOuvert] = useState(true);
  const navigate = useNavigate();

  const AllerVerbe = (lien) => {
    navigate(lien);
  };

  return (
    <div className="Fond">
      <Acceuil ouvert={ouvert} setOuvert={setOuvert} titre="VERBES"/>
      <div className="Contenu">
        <div className="CarteTheme" onClick={()=>AllerVerbe("/verbes/template")}>
          <text className="TitreCarteTheme">Template</text>
          <img src="/images/Vocabulaire/sepresenter.png" alt="LogoThemeSePresenter" className="LogoTheme"/>
        </div>
      </div>
    </div>
  );
};

export default Verbes;
