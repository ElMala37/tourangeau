import React, { useState, useEffect } from "react";
import "../../styles/Apprendre/Famille.css";
import { useNavigate } from "react-router";
import Acceuil from "../Accueil";

const Famille1 = () => {
  const [ouvert, setOuvert] = useState(true);
  const navigate = useNavigate();
  const [validation, setValidation] = useState(false);
  const [bonneRep, setBonneRep] = useState(true);
  const [select, setSelect] = useState(0);
  const [numeroQuestion, setNumeroQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [finExo, setFinExo] = useState(false);
  const [ordre, setOrdre] = useState([]);

  const nbQuestion = 10;
  const ListeQuestion = [
    "la famille",
    "le frère",
    "la soeur",
    "la mère",
    "le père",
    "la maizĕr",
    "la quiaulaiyĕ",
    "eul fraizĕr",
    "eul paizĕr",
    "la seusĕr",
  ];
  const ListeReponse1 = [
    "la maizĕr",
    "eul fraizĕr",
    "la seusĕr",
    "la quiaulaiyĕ",
    "eul fraizĕr",
    "la soeur",
    "la mère",
    "le père",
    "la famille",
    "le frère",
  ];
  const ListeReponse2 = [
    "la quiaulaiyĕ",
    "la seusĕr",
    "la quiaulaiyĕ",
    "eul fraizĕr",
    "la seusĕr",
    "le père",
    "la famille",
    "le frère",
    "la soeur",
    "la mère",
  ];
  const ListeReponse3 = [
    "eul paizĕr",
    "la quiaulaiyĕ",
    "eul paizĕr",
    "la maizĕr",
    "eul paizĕr",
    "le frère",
    "la soeur",
    "la mère",
    "le père",
    "la famille",
  ];
  const ListeReponse4 = [
    "la seusĕr",
    "la maizĕr",
    "eul fraizĕr",
    "eul paizĕr",
    "la maizĕr",
    "la mère",
    "le père",
    "la famille",
    "le frère",
    "la soeur",
  ];
  const ListeBonneReponse = [2, 1, 1, 3, 3, 4, 2, 2, 3, 4];

  useEffect(() => {
    const generateRandomNumbers = () => {
      const randomNumbers = Array.from(
        { length: 10 },
        (_, index) => index
      ).sort(() => Math.random() - 0.5);
      setOrdre(randomNumbers);
    };

    generateRandomNumbers();
  }, []);

  const FermerTheme = () => {
    navigate("/apprendre");
  };

  const Select1 = () => {
    setSelect(1);
  };

  const Select2 = () => {
    setSelect(2);
  };

  const Select3 = () => {
    setSelect(3);
  };

  const Select4 = () => {
    setSelect(4);
  };

  const Valider = () => {
    const audioCorrect = document.getElementById("correct");
    const audioIncorrect = document.getElementById("incorrect");
    console.log(ordre);
    if (select !== 0) {
      setValidation(true);
      if (select === ListeBonneReponse[ordre[numeroQuestion]]) {
        setBonneRep(true);
        setScore(score + 1);
        audioCorrect.play();
      } else {
        setBonneRep(false);
        audioIncorrect.play();
      }
    }
  };

  const Continuer = () => {
    const audioFinExo = document.getElementById("finexo");
    if (numeroQuestion < nbQuestion - 1) {
      setValidation(false);
      setSelect(0);
      setNumeroQuestion(numeroQuestion + 1);
    } else {
      setNumeroQuestion(numeroQuestion + 1);
      audioFinExo.play();
      setFinExo(true);
    }
  };

  return (
    <div className="Fond">
      <Acceuil ouvert={ouvert} setOuvert={setOuvert} />
      <div className="ContenuTheme">
        <div className="TrameExercice">
          <div className="EnTeteExercice">
            <img
              src="/images/close.png"
              alt="OuvrirMenu"
              onClick={FermerTheme}
              className="LogoNavMenu"
            />
            <div className="BarreFond">
              <div
                className="BarreProgression"
                style={{ width: `${(numeroQuestion / nbQuestion) * 100}%` }}
              ></div>
            </div>
            <p className="Progression">
              {numeroQuestion}/{nbQuestion}
            </p>
          </div>

          {finExo ? (
            <div className="Resultat">
              <div className="CaseFin">
                <p className="FinExerciceTitre">Exercice terminé !</p>
                <p className="FinExerciceTitre">
                  Score : {score}/{nbQuestion}
                </p>
              </div>
              {(score / nbQuestion) * 100 > 50 ? (
                <div
                  className="Statistique"
                  style={{
                    background: `linear-gradient(0deg, #50a641 50%, transparent 50%), linear-gradient(${
                      180 - (score / nbQuestion) * 180
                    }deg, #a64141 50%, #50a641 50%)`,
                  }}
                ></div>
              ) : (
                <div
                  className="Statistique"
                  style={{
                    background: `linear-gradient(0deg, transparent 50%, #a64141 50%), linear-gradient(${
                      360 - (score / nbQuestion) * 180
                    }deg, #a64141 50%, #50a641 50%)`,
                  }}
                ></div>
              )}
            </div>
          ) : (
            <div>
              <div className="EnteteQuestion">
                <p className="TitreQuestion">Choisis la bonne traduction: </p>
                <div className="Chevre">
                  <div className="BulleQuestion">
                    <p className="QuestionBulle">
                      {ListeQuestion[ordre[numeroQuestion]]}
                    </p>
                  </div>
                  <img
                    src="/images/chevre.png"
                    alt="mascotteChevre"
                    className="LogoQuestion"
                  />
                </div>
              </div>
              <div className="ReponsesQuestion">
                <div
                  onClick={Select1}
                  className={
                    validation
                      ? ListeBonneReponse[ordre[numeroQuestion]] === 1
                        ? "BouttonAudioBonneRep"
                        : select === 1
                        ? "BouttonAudioMauvRep"
                        : "BouttonAudio"
                      : select === 1
                      ? "BouttonAudioSelect"
                      : "BouttonAudio"
                  }
                >
                  <strong
                    className={
                      validation
                        ? ListeBonneReponse[ordre[numeroQuestion]] === 1
                          ? "TexteAudioBonneRep"
                          : select === 1
                          ? "TexteAudioMauvRep"
                          : "TexteAudio"
                        : select === 1
                        ? "TexteAudioSelect"
                        : "TexteAudio"
                    }
                  >
                    {ListeReponse1[ordre[numeroQuestion]]}
                  </strong>
                </div>
                <div
                  onClick={Select2}
                  className={
                    validation
                      ? ListeBonneReponse[ordre[numeroQuestion]] === 2
                        ? "BouttonAudioBonneRep"
                        : select === 2
                        ? "BouttonAudioMauvRep"
                        : "BouttonAudio"
                      : select === 2
                      ? "BouttonAudioSelect"
                      : "BouttonAudio"
                  }
                >
                  <strong
                    className={
                      validation
                        ? ListeBonneReponse[ordre[numeroQuestion]] === 2
                          ? "TexteAudioBonneRep"
                          : select === 2
                          ? "TexteAudioMauvRep"
                          : "TexteAudio"
                        : select === 2
                        ? "TexteAudioSelect"
                        : "TexteAudio"
                    }
                  >
                    {ListeReponse2[ordre[numeroQuestion]]}
                  </strong>
                </div>
                <div
                  onClick={Select3}
                  className={
                    validation
                      ? ListeBonneReponse[ordre[numeroQuestion]] === 3
                        ? "BouttonAudioBonneRep"
                        : select === 3
                        ? "BouttonAudioMauvRep"
                        : "BouttonAudio"
                      : select === 3
                      ? "BouttonAudioSelect"
                      : "BouttonAudio"
                  }
                >
                  <strong
                    className={
                      validation
                        ? ListeBonneReponse[ordre[numeroQuestion]] === 3
                          ? "TexteAudioBonneRep"
                          : select === 3
                          ? "TexteAudioMauvRep"
                          : "TexteAudio"
                        : select === 3
                        ? "TexteAudioSelect"
                        : "TexteAudio"
                    }
                  >
                    {ListeReponse3[ordre[numeroQuestion]]}
                  </strong>
                </div>
                <div
                  onClick={Select4}
                  className={
                    validation
                      ? ListeBonneReponse[ordre[numeroQuestion]] === 4
                        ? "BouttonAudioBonneRep"
                        : select === 4
                        ? "BouttonAudioMauvRep"
                        : "BouttonAudio"
                      : select === 4
                      ? "BouttonAudioSelect"
                      : "BouttonAudio"
                  }
                >
                  <strong
                    className={
                      validation
                        ? ListeBonneReponse[ordre[numeroQuestion]] === 4
                          ? "TexteAudioBonneRep"
                          : select === 4
                          ? "TexteAudioMauvRep"
                          : "TexteAudio"
                        : select === 4
                        ? "TexteAudioSelect"
                        : "TexteAudio"
                    }
                  >
                    {ListeReponse4[ordre[numeroQuestion]]}
                  </strong>
                </div>
              </div>
              {validation ? (
                <div className="ValidationReponse">
                  <div
                    className={
                      bonneRep
                        ? "BouttonValider"
                        : "BouttonContinuerMauvaiseReponse"
                    }
                    onClick={Continuer}
                  >
                    <strong
                      className={
                        bonneRep
                          ? "TexteValider"
                          : "TexteContinuerMauvaiseReponse"
                      }
                    >
                      Continuer
                    </strong>
                  </div>
                </div>
              ) : (
                <div className="ValidationReponse">
                  <div className="BouttonValider" onClick={Valider}>
                    <strong className="TexteValider">Valider</strong>
                  </div>
                </div>
              )}
            </div>
          )}
          <audio id="correct" src="/audios/bruitages/correct.mp3"></audio>
          <audio id="incorrect" src="/audios/bruitages/incorrect.mp3"></audio>
          <audio id="finexo" src="/audios/bruitages/finexercice.mp3"></audio>
        </div>
      </div>
    </div>
  );
};

export default Famille1;
