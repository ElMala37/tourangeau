import React, { useState } from "react";
import "../../styles/Conversation/GeneralConv.css";
import { useNavigate } from "react-router";
import Acceuil from "../Accueil";
import { Chart } from "react-google-charts";

const SePresenterConv = () => {
  const [ouvert, setOuvert] = useState(true);
  const navigate = useNavigate();
  const [etape, setEtape] = useState(0);
  const [Reponses, setReponses] = useState([]);
  const [Validation, setValidation] = useState(false);
  const [bonneRep, setBonneRep] = useState(true);
  const [score, setScore] = useState(0);
  const nbEtapes = 8;

  const Question = [
    "Comment t'appelles-tu ?",
    "Je m'appelle Thomas",
    "Quel âge as-tu ?",
    "J'ai 20 ans",
    "Comment t'appelles-tu ?",
    "Je m'appelle Fernand",
    "Quel âge as-tu ?",
    "J'ai 17 ans",
  ];

  const Propositions = [
    ["Coumenque", "t'hoas-ti", "lom", "Eyouque", "tu", "?", "eul", "fraizĕr"],
    ["J'hag", "t'hoas-ti", "lom", "angs", "frarĕ", "couni", "eul", "Thomas"],
    [
      "Quiĕlĕ",
      "ĕoagĕ",
      "que",
      "t'hoas-ti",
      "?",
      "seinĕriyĕ",
      "chaisiau",
      "lom",
    ],
    ["J'hag", "vinz", "lom", "t'hoas-ti", "ĕoagĕ", "Jĕ", "rĕssĕ", "angs"],
    [
      "?",
      "sghleutĕ",
      "t'hoas-ti",
      "tu",
      "lom",
      "Coumenque",
      "Quiĕlĕ",
      "pouesĕ",
    ],
    ["Je", "J'hag", "Jĕ", "Fernand", "cimarrĕ", "margouh", "paizĕr", "lom"],
    ["que", "tu", "dissouep", "t'hoas-ti", "?", "Quiĕlĕ", "ĕoagĕ", "angs"],
    [
      "J'ai",
      "angs",
      "ans",
      "dizouez",
      "dissouep",
      "J'hag",
      "ĕoagĕ",
      "chaisiau",
    ],
  ];

  const BonnesReponses = [
    ["Coumenque", "t'hoas-ti", "lom", "?"],
    ["J'hag", "lom", "Thomas"],
    ["Quiĕlĕ", "ĕoagĕ", "que", "t'hoas-ti", "?"],
    ["J'hag", "vinz", "angs"],
    ["Coumenque", "t'hoas-ti", "lom", "?"],
    ["J'hag", "lom", "Fernand"],
    ["Quiĕlĕ", "ĕoagĕ", "que", "t'hoas-ti", "?"],
    ["J'hag", "dissouep", "angs"],
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
    const audioCorrect = document.getElementById("correct");
    const audioIncorrect = document.getElementById("incorrect");
    setValidation(true);
    console.log("reponse:", Reponses);
    console.log("bonne reponses:", BonnesReponses[etape]);
    const isEqual =
      Reponses.length === BonnesReponses[etape].length &&
      Reponses.every((value, index) => value === BonnesReponses[etape][index]);
    if (isEqual) {
      setBonneRep(true);
      setScore(score + 1);
      audioCorrect.play();
    } else {
      setBonneRep(false);
      audioIncorrect.play();
    }
  };

  const Continuer = () => {
    const audioFinExo = document.getElementById("finexo");
    setValidation(false);
    setEtape(etape + 1);
    setReponses([]);
    console.log("etape : ", etape);
    if (etape === nbEtapes - 1) {
      audioFinExo.play();
    }
  };

  const VoirBonneRep = () => {
    setBonneRep(true);
    setReponses(BonnesReponses[etape]);
  };

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
          {etape === nbEtapes ? (
            <div className="SpaceResultatConv">
              <div className="SpaceResultatTexteConv">
                <div className="ResultatTexteConv">Conversation terminée !</div>
              </div>
              <Chart
                chartType="PieChart"
                data={[
                  ["Réponses", "score"],
                  ["Bonnes réponses", score],
                  ["Mauvaises réponses", nbEtapes - score],
                ]}
                options={{
                  backgroundColor: "transparent",
                  colors: ["#50a641", "#a64141"],
                }}
                width={"80vw"}
                height={"30vw"}
              />
            </div>
          ) : (
            <div>
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
                      <div
                        key={index}
                        className="BouttonPropositionVideConv"
                      ></div>
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
                      <div
                        key={index}
                        className="BouttonPropositionVideConv"
                      ></div>
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
                        <div
                          className="BouttonValiderConv"
                          onClick={VoirBonneRep}
                        >
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
          )}
        </div>
      </div>
      <audio id="correct" src="/audios/bruitages/correct.mp3"></audio>
      <audio id="incorrect" src="/audios/bruitages/incorrect.mp3"></audio>
      <audio id="finexo" src="/audios/bruitages/finexercice.mp3"></audio>
    </div>
  );
};

export default SePresenterConv;
