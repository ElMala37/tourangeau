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
        <div className="EnveloppeTexteDon">  
          <div className="TexteDon"><a href="https://le-tourangeau.fr" className="lienSite">
            le-tourangeau.fr</a> est un site de la langue tourangelle,
          libre, gratuit et sans publicité,disponible partout.</div>
          <div className="TexteDon">Votre don, aussi petit soit-il, contribue à maintenir
          ce site en ligne pour les générations futures.</div>
          <div className="TexteDon"></div>  
          <div className="TexteDon">Merci de votre soutien.</div>
        </div>
        <div className="EnveloppeFaireUnDon">
          <div className="BouttonFaireUnDon" onClick={LienPaiement}>
            Faire un don
          </div>
          <div className="TexteMoyensPaiement">
            Moyens de paiement pris en charge :{" "}
          </div>
          <div className="EspaceLogosMoyensPaiement">
            <img src="/images/Soutenir/visa.svg" alt="Visa" class="logoMoyensPaiement" />
            <img src="/images/Soutenir/mastercard.svg" alt="Mastercard" class="logoMoyensPaiement" />
            <img src="/images/Soutenir/amex.svg" alt="Amex" class="logoMoyensPaiement" />
            <img src="/images/Soutenir/bancontact.svg" alt="Bancontact" class="logoMoyensPaiement" />
            <img src="/images/Soutenir/link.svg" alt="Link" class="logoMoyensPaiement" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Soutenir;
