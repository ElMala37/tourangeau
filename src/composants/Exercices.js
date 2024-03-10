import React, { useState } from "react";
import "../styles/Exercices.css";
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
      <Acceuil ouvert={ouvert} setOuvert={setOuvert} />
        <div className="Contenu">
          <div className="Carte" onClick={VoirPrononciation}>
            <text className="TitreCarte">Exercice de prononciation</text>
          </div>
        </div>
    </div>
  );
};

export default Exercices;
