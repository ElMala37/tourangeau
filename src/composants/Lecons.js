import React, { useState } from "react";
import "../styles/Lecons.css";
import Acceuil from "./Accueil";

const Lecons = () => {
  const [detail, setDetail] = useState(false);
  const [ouvert, setOuvert] = useState(true);

  const VoirDetail = () => {
    setDetail(true);
    if (ouvert===false){
        setOuvert(true);
    }
  };

  const FermerDetail = () => {
    setDetail(false);
  };

  return (
    <div className="Fond">
      <Acceuil ouvert={ouvert} setOuvert={setOuvert}/>
      {detail ? (
        <div className="Contenu">
            <img
              src="/images/close.png"
              alt="OuvrirMenu"
              onClick={FermerDetail}
              className="LogoNavMenu"
            />
        </div>
      ) : (
        <div className="Contenu">
          <div className="Carte" onClick={VoirDetail}>
            <text className="TitreCarte">Leçon n°1: Alphabet</text>
          </div>
        </div>
      )}
    </div>
  );
};

export default Lecons;
