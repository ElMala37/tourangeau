import React, { useState } from "react";
import "../../styles/Conversation/GeneralConv.css";
import { useNavigate } from "react-router";
import Acceuil from "../Accueil";
import { Chart } from "react-google-charts";

const PasseTempsConv = () => {
  const [ouvert, setOuvert] = useState(true);
  const navigate = useNavigate();
  const [etape, setEtape] = useState(0);
  const [Reponses, setReponses] = useState([]);
  const [Validation, setValidation] = useState(false);
  const [bonneRep, setBonneRep] = useState(true);
  const [score, setScore] = useState(0);
  const nbEtapes = 12;

  const Question = [
    "Qu'aimes-tu faire ?",
    "J'aime bien sortir avec mes amis",
    "J'aime bien jouer de la musique",
    "Détestes-tu certaines activités ?",
    "Je déteste aller à la plage",
    "Je déteste faire du sport",
    "Et toi, qu'aimes-tu faire ?",
    "J'aime bien aller à la plage",
    "J'aime bien faire du sport",
    "Et détestes-tu certaines activités ?",
    "Je déteste jouer de la musique",
    "Je déteste sortir avec mes amis",
  ];

  const Propositions = [
    ['?', 'que', "t'agrĕyĕs-ti", 'Queique-dung', 'rĕssĕs-ti', "t'hoas-ti", 'faizĕr', 'tu'],
['meuns', 'les', "d'anque", 'saighlir', "J'agrĕyĕ", "d'amiys", 'faizĕr', 'ben'],
['saighlir', 'terhlutrair', 'de', 'meusiquĕ', 'ben', 'la', "J'agrĕyĕ", "J'hag"],
['que', "d'auquieunĕs", "t'hoas-ti", '?', 'rĕssĕs-ti', "T'haguis-ti-dung", 'accions', 'tu'],
['falosierĕ', 'la', 'vadair', "J'haguig", 'loa ', 'sus', 'rĕssĕ', 'Jĕ'],
['pherucalĕ', 'la', 'de', 'quieulturĕ', "J'agrĕyĕ", 'ben', 'faizĕr', "J'haguig"],
["T'haguis-ti-dung", 'queique-dung', '?', 'que', 'faizĕr', 'E', 'toue-dung,', "t'agrĕyĕs-ti"],
['vadair', 'ben', "J'hag", "J'agrĕyĕ", 'terhlutrair', 'falosierĕ', 'loa', "J'haguig"],
['de', 'la', 'quieulturĕ', 'ben', 'vadair', "J'agrĕyĕ", 'pherucalĕ', 'faizĕr'],
["d'auquieunĕs", "t'haguis-ti-dung", 'rĕssĕs-ti', 'accions', 'tu', "t'hoas-ti", '?', 'E'],
['la', 'meusiquĕ', 'faizĕr', 'saighlir', 'de', 'ersghlentir', "J'haguig", 'terhlutrair'],
["J'agrĕyĕ", "d'amiys", 'les', "J'haguig", "d'anque", 'saighlir', 'ben', 'meuns'],
  ];

  const BonnesReponses = [
    ["Queique-dung","que","t'agrĕyĕs-ti","faizĕr","?"],
    ["J'agrĕyĕ","ben","saighlir","d'anque","les","meuns","d'amiys"],
    ["J'agrĕyĕ","ben","terhlutrair","de","la","meusiquĕ"],
    ["T'haguis-ti-dung","d'auquieunĕs","accions","?"],
    ["J'haguig","vadair","loa ","falosierĕ"],
    ["J'haguig","faizĕr","de","la","quieulturĕ","pherucalĕ"],
    ["E","toue-dung,","queique-dung","que","t'agrĕyĕs-ti","faizĕr","?"],
    ["J'agrĕyĕ","ben","vadair","loa","falosierĕ"],
    ["J'agrĕyĕ","ben","faizĕr","de","la","quieulturĕ","pherucalĕ"],
    ["E","t'haguis-ti-dung","d'auquieunĕs","accions","?"],
    ["J'haguig","terhlutrair","de","la","meusiquĕ"],
    ["J'haguig","saighlir","d'anque","les","meuns","d'amiys"],
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

export default PasseTempsConv;
