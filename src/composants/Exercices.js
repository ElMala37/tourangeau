import React from "react";
import "../styles/Lecons.css";
import Acceuil from "./Accueil";

const Lecons = () => {
  return (
    <div className="Fond">
      <Acceuil/>
      <div className="Contenu">
        <div className="Carte">
          <text className="TitreCarte">Exercice n°1: Alphabet</text>
        </div>
      </div>
    </div>
  );
};

export default Lecons;
