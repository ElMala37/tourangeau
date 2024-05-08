import React, { useState } from "react";
import "../../styles/Verbes/Verbes.css";
import Acceuil from "../Accueil";
import { useNavigate } from "react-router";

const VerbeTemplate = () => {
  const [ouvert, setOuvert] = useState(true);
  const navigate = useNavigate();
  const [exercice, setExercice] = useState(false);

  const verbe = [
    "jĕ seug",
    "t'es",
    "il/alĕ est",
    "jĕs soumĕs/soms",
    "vos sedzĕs",
    "is/as sont",
  ];
  const nom_verbe = "ETĔR";
  const description = "= être (du latin ESSERE)";

  const FermerTheme = () => {
    navigate("/verbes");
  };

  const CommencerExercice = () => {
    setExercice(true);
  };

  return (
    <div className="Fond">
      <Acceuil ouvert={ouvert} setOuvert={setOuvert} titre={nom_verbe} />

      {exercice ? (


        <div className="contenuVerbe">
          <div className="EnteteVerbe">
            <img
              src="/images/close.png"
              alt="OuvrirMenu"
              onClick={FermerTheme}
              className="LogoNavMenu"
            />
          </div>
          <div className="EspaceVerbeExercice">
            <div className="BulleQuestionVerbe">
              <div className="QuestionBulleVerbe">
                Remplis le tableau du verbe "{nom_verbe}" :
              </div>
            </div>
            <img
              src="/images/chevre.png"
              alt="ChevreCommencerExercice"
              className="ChevreVerbeDebut"
            />
          </div>
          <div className="ligneVerbe">
            <div className="celluletitreVerbe">
              <div className="verbeTitre">{nom_verbe}</div>
              <div className="verbeDescription">{description}</div>
            </div>
          </div>
          <div className="ligneVerbe">
            {verbe.map((item, index) => (
                <input className="inputVerbeExercice" placeholder="jĕ ..." type="text">
                </input>
            ))}
          </div>
          <div className="bouttonValiderVerbe" onClick={CommencerExercice}>
            Valider
          </div>
          <div className="bouttonValiderVerbe" onClick={CommencerExercice}>
            Retour
          </div>
        </div>


      ) : (


        <div className="contenuVerbe">
          <div className="EnteteVerbe">
            <img
              src="/images/close.png"
              alt="OuvrirMenu"
              onClick={FermerTheme}
              className="LogoNavMenu"
            />
          </div>
          <div className="ligneVerbe">
            <div className="celluletitreVerbe">
              <div className="verbeTitre">{nom_verbe}</div>
              <div className="verbeDescription">{description}</div>
            </div>
          </div>
          <div className="ligneVerbe">
            {verbe.map((item, index) => (
              <div className="celluleLigneVerbe">
                <div className="verbeConjugaisons">{item}</div>
              </div>
            ))}
          </div>
          <div className="EspaceVerbeExerciceDebut">
            <div className="BulleQuestionVerbe">
              <div className="QuestionBulleVerbe">
                Es tu prêt à t'exercer sur le verbe "{nom_verbe}" ?
              </div>
            </div>
            <img
              src="/images/chevre.png"
              alt="ChevreCommencerExercice"
              className="ChevreVerbeDebut"
            />
          </div>
          <div className="bouttonCommencerExercice" onClick={CommencerExercice}>
            Commencer l'exercice
          </div>
        </div>
      )}


    </div>
  );
};

export default VerbeTemplate;
