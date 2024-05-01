import React, { useState } from "react";
import Acceuil from "./Accueil";
import "../styles/Soutenir.css";

const Soutenir = () => {
  const [ouvert, setOuvert] = useState(true);

  const LienPaiement = () => {
    window.open("https://buy.stripe.com/00gaHD6Jc0A81W0eUV", "_blank");
  };

  return (
    <div className="Fond">
      <Acceuil ouvert={ouvert} setOuvert={setOuvert} titre="SOUTENIR" />
      <div className="ContenuSoutenir">
        <div className="BouttonFaireUnDon" onClick={LienPaiement}>
          Faire un don
        </div>
      </div>
    </div>
  );
};

export default Soutenir;
