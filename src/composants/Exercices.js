import React, { useState } from "react";
import Acceuil from "./Accueil";
import { useNavigate } from "react-router";

const Exercices = () => {
  const [ouvert, setOuvert] = useState(true);
  const navigate = useNavigate();

  const VoirPrononciation = () => {
    navigate("/exercices/prononciation");
  };

  return (
    <div className="Fond">
      <Acceuil ouvert={ouvert} setOuvert={setOuvert} titre="EXERCICES"/>
        <div className="Contenu">
          <div className="CarteTheme" onClick={VoirPrononciation}>
            <text className="TitreCarteTheme">Exercice de prononciation</text>
          </div>
        </div>
    </div>
  );
};

export default Exercices;
