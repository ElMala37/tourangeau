import React, { useState } from "react";
import "../../styles/Verbes/Verbes.css";
import Acceuil from "../Accueil";
import { useNavigate } from "react-router";

const VerbeTemplate = ({verbe_tourangeau,verbe_français,nom_verbe,description}) => {
  const [ouvert, setOuvert] = useState(true);
  const navigate = useNavigate();

  // const verbe_tourangeau = [
  //   "jĕ seug",
  //   "t'es",
  //   "il/alĕ est",
  //   "jĕs soumĕs/soms",
  //   "vos sedzĕs",
  //   "is/as sont",
  // ];
  // const verbe_français = [
  //   "je suis",
  //   "tu es",
  //   "il/elle est",
  //   "nous sommes",
  //   "vous êtes",
  //   "ils/elles sont",
  // ];
  // const nom_verbe = "ETĔR";
  // const description = "= être (du latin ESSERE)";

  const FermerTheme = () => {
    navigate("/verbes");
  };

  return (
    <div className="Fond">
      <Acceuil ouvert={ouvert} setOuvert={setOuvert} titre={nom_verbe} />
      <div className="contenuVerbe">
        <div className="EnteteVerbe">
          <img
            src="/images/close.png"
            alt="OuvrirMenu"
            onClick={FermerTheme}
            className="LogoNavMenu"
          />
        </div>
        <div className="tableauVerbe">
          <div className="titreTableauVerbe">
            <div className="verbeTitre">{nom_verbe}{" "}</div>
            <div className="verbeDescription">{description}</div>
          </div>
          {verbe_tourangeau.map((item, index) => (
            <div className="ligneVerbe">
              <div className="celluleDrapeauVerbe">
              <img
                    src="/images/drapeau.png"
                    alt="Drapeau"
                    className="ImageDrapeauVerbe"
                  />
              </div>
              <div className="celluleTexteVerbe">{item}</div>
              <div className="celluleDrapeauVerbe">
              <img
                    src="/images/drapeau_france.png"
                    alt="Drapeau"
                    className="ImageDrapeauVerbe"
                  />
              </div>
              <div className="celluleTexteVerbe">{verbe_français[index]}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VerbeTemplate;
