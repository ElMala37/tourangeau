import React, { useState } from "react";
import "../../styles/Conversation/GeneralConv.css";
import { useNavigate } from "react-router";
import Acceuil from "../Accueil";

const SePresenterConv = () => {
  const [ouvert, setOuvert] = useState(true);
  const navigate = useNavigate();
  const [etape, setEtape] = useState(0);
  const [Reponses, setReponses] = useState([]);
  const [Validation, setValidation] = useState(false);
  const [bonneRep, setBonneRep] = useState(true);
  const nbEtapes = 2;

  const Question = ["Comment t'appelles-tu ?", "Je m'appelle Thomas"];

  const Propositions = [
    ["Coumenque", "t'hoas-ti", "lom", "Eyouque", "tu", "?", "eul", "fraizĕr"],
    ["J'hag", "t'hoas-ti", "lom", "angs", "frarĕ", "couni", "eul", "Thomas"],
  ];

  const BonnesReponses = [
    ["Coumenque", "t'hoas-ti", "lom", "?"],
    ["J'hag", "lom", "Thomas"],
  ];

  const FermerTheme = () => {
    navigate("/conversation");
  };

  const RajouterUneReponse = (i_reponse) => {
    if (
      Reponses.length < 8 &&
      !Reponses.includes(i_reponse) &&
      Validation === false
    ) {
      setReponses([...Reponses, i_reponse]);
    }
  };

  const EnleverUneReponse = (i_reponse) => {
    if (Reponses.includes(i_reponse) && Validation === false) {
      const newReponses = Reponses.filter((reponse) => reponse !== i_reponse);
      setReponses(newReponses);
    }
  };

  const Valider = () => {
    setValidation(true);
    console.log("reponse:", Reponses);
    console.log("bonne reponses:", BonnesReponses[etape]);
    const isEqual =
      Reponses.length === BonnesReponses[etape].length &&
      Reponses.every((value, index) => value === BonnesReponses[etape][index]);
    if (isEqual) {
      setBonneRep(true);
      console.log("bonnerep");
    } else {
      setBonneRep(false);
      console.log("mauvrep");
    }
  };

  const Continuer = () => {
    setValidation(false);
    setEtape(etape + 1);
    setReponses([]);
  };

  const VoirBonneRep = () => {
    setBonneRep(true);
    setReponses(BonnesReponses[etape])
  }

  return (
    <div className="Fond">
      <Acceuil ouvert={ouvert} setOuvert={setOuvert} />
      <div className="ContenuConversation">
        <div className="TrameConversation">
          <div className="EnTeteConversation">
            <img
              src="/images/close.png"
              alt="OuvrirMenu"
              onClick={FermerTheme}
              className="LogoNavMenu"
            />
            <div className="LigneEtapeFondConv">
              <div className="LigneEtapeConvNoir"></div>
              {Array.from({ length: nbEtapes + 1 }, (_, index) => (
                <div
                  className="RondEtapeConv"
                  style={{
                    transform:
                      etape >= index + 1
                        ? `translateX(${(60 / nbEtapes) * (index + 1)}vw)`
                        : "none",
                    transition: "1s",
                  }}
                  key={index}
                ></div>
              ))}

              <div
                className="LigneEtapeConvBleu"
                style={{
                  width: `${(60.5 / nbEtapes) * etape}vw`,
                  transition: "0.9s",
                }}
              ></div>
            </div>
            <p className="ProgressionConversation">
              {etape}/{nbEtapes}
            </p>
          </div>

          <div className="EnteteQuestionConversation">
            <div className="ConsigneQuestionConversation">
              Assemble les morceaux pour traduire :
            </div>
            <div className="ChevreConversation">
              <div className="BulleConversation">
                <p className="ConversationBulle">{Question[etape]}</p>
              </div>
              <img
                src="/images/chevre.png"
                alt="mascotteChevre"
                className="LogoConversation"
              />
            </div>
          </div>

          <div className="SpaceDesReponsesConv">
            <div className="LigneDeSupportReponses"></div>
            {Reponses.map((item, index) => (
              <div>
                {Validation === true ? (
                  <div>
                    {bonneRep ? (
                      <div key={index} className="BouttonBonneReponseConv">
                        {item}
                      </div>
                    ) : (
                      <div key={index} className="BouttonMauvReponseConv">
                        {item}
                      </div>
                    )}
                  </div>
                ) : (
                  <div
                    key={index}
                    className="BouttonReponseConv"
                    onClick={() => EnleverUneReponse(item)}
                  >
                    {item}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="SpaceDesPropositionsConv">
            <div className="LignePropositionsConv">
              {Propositions[etape].slice(0, 4).map((item, index) =>
                !Reponses.includes(item) ? (
                  <div
                    key={index}
                    className="BouttonPropositionConv"
                    onClick={() => RajouterUneReponse(item)}
                  >
                    {item}
                  </div>
                ) : (
                  <div key={index} className="BouttonPropositionVideConv"></div>
                )
              )}
            </div>
            <div className="LignePropositionsConv">
              {Propositions[etape].slice(4, 8).map((item, index) =>
                !Reponses.includes(item) ? (
                  <div
                    key={index}
                    className="BouttonPropositionConv"
                    onClick={() => RajouterUneReponse(item)}
                  >
                    {item}
                  </div>
                ) : (
                  <div key={index} className="BouttonPropositionVideConv"></div>
                )
              )}
            </div>
          </div>
          <div className="SpaceValidation">
            {Validation ? (
              <div>
                {" "}
                {bonneRep ? (
                  <div className="BouttonValiderConv" onClick={Continuer}>
                    Continuer
                  </div>
                ) : (
                  <div className="SpaceValidationVoirBonnRep">
                    <div className="BouttonValiderConv" onClick={VoirBonneRep}>
                      Voir la bonne réponse
                    </div>
                    <div className="BouttonValiderConv" onClick={Continuer}>
                      Continuer
                    </div>
                  </div>
                )}{" "}
              </div>
            ) : (
              <div className="BouttonValiderConv" onClick={Valider}>
                Valider
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SePresenterConv;
