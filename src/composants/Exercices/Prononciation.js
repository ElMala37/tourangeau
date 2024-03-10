import React, { useState } from "react";
import "../../styles/Exercices/Prononciation.css";
import { useNavigate } from "react-router";
import Acceuil from "../Accueil";

const Prononciation = () => {
  const [ouvert, setOuvert] = useState(true);
  const navigate = useNavigate();
  const [validation, setValidation] = useState(false);
  const [bonneRep, setBonneRep] = useState(true);
  const [select, setSelect] = useState(0);
  const [numeroQuestion, setNumeroQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [finExo, setFinExo] = useState(false);

  const nbQuestion = 11;
  const ListeQuestion = [
    "« oabĕr » (arbre)",
    "« enargiyĕ » (énergie)",
    "« viĕquir » (vivre)",
    "« sghleus » (fleur)",
    "« ĕxembĕl » (exemple)",
    "« choaquiau » (château)",
    "« bainzĕliz » (basilic)",
    "« molimænt » (monument)",
    "« eimoagĕn » (image)",
    "« [jĕ] seug » ([je] suis)",
    "« montaighnĕ » (montagne)",
  ];
  const ListeReponse1 = [
    "/oibeur/",
    "/eunargiy/",
    "/véeuki/",
    "/sgueu/",
    "/euzgambe/",
    "/choiquio/",
    "/bainzliz/",
    "/moliment/",
    "/émâj/",
    "/seug/",
    "/montaïne/",
  ];
  const ListeReponse2 = [
    "/oib/",
    "/énargiy/",
    "/véeukir/",
    "/sleu/",
    "/egzambeul/",
    "/châquio/",
    "/bainzliy/",
    "/molimaint/",
    "/èmoijeune/",
    "/seuy/",
    "/montègne/",
  ];
  const ListeReponse3 = [
    "/âbeur/",
    "/eunargiyeu/",
    "/vieuki/",
    "/sieu/",
    "/eugzambl/",
    "/choiquiow/",
    "/bainjlij/",
    "/molimin-an/",
    "/eïmoij/",
    "/seuj/",
    "/montégue/",
  ];
  const ListeReponse4 = [
    "/âb/",
    "/énargiyeu/",
    "/vieukir/",
    "/sgleu/",
    "/ezgambeu/",
    "/châquiow/",
    "/bainslisse/",
    "/molimont/",
    "/èmâjeune/",
    "/sé-uy/",
    "/montégne/",
  ];
  const ListeAudio = [
    "/audios/prononciation/q1r1.mp3",
    "/audios/prononciation/q2r1.mp3",
    "/audios/prononciation/q3r1.mp3",
    "/audios/prononciation/q4r1.mp3",
    "/audios/prononciation/q5r1.mp3",
    "/audios/prononciation/q6r1.mp3",
    "/audios/prononciation/q7r1.mp3",
    "/audios/prononciation/q8r1.mp3",
    "/audios/prononciation/q9r1.mp3",
    "/audios/prononciation/q10r1.mp3",
    "/audios/prononciation/q11r1.mp3"
  ];
  const ListeBonneReponse = [4, 2, 1, 3, 1, 4, 2, 3, 1, 2, 4];

  const FermerPrononciation = () => {
    navigate("/exercices");
  };

  const LectureAudio1 = () => {
    const audioElement = document.getElementById("audio1");
    audioElement.currentTime = 0;
    audioElement.play();
    setSelect(1);
  };

  const LectureAudio2 = () => {
    const audioElement = document.getElementById("audio1");
    audioElement.currentTime = 0;
    audioElement.play();
    setSelect(2);
  };

  const LectureAudio3 = () => {
    const audioElement = document.getElementById("audio1");
    audioElement.currentTime = 0;
    audioElement.play();
    setSelect(3);
  };

  const LectureAudio4 = () => {
    const audioElement = document.getElementById("audio1");
    audioElement.currentTime = 0;
    audioElement.play();
    setSelect(4);
  };

  const Valider = () => {
    const audioCorrect = document.getElementById("correct");
    const audioIncorrect = document.getElementById("incorrect");
    if (select !== 0) {
      setValidation(true);
      if (select === ListeBonneReponse[numeroQuestion]) {
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
      <div className="ContenuPrononciation">
        <div className="TrameExercice">
          <div className="EnTeteExercice">
            <img
              src="/images/close.png"
              alt="OuvrirMenu"
              onClick={FermerPrononciation}
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
              <p className="TitreQuestion">
                Comment prononcer {ListeQuestion[numeroQuestion]}
              </p>
              <div className="ReponsesQuestion">
                <div
                  onClick={LectureAudio1}
                  className={
                    validation
                      ? ListeBonneReponse[numeroQuestion] === 1
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
                        ? ListeBonneReponse[numeroQuestion] === 1
                          ? "TexteAudioBonneRep"
                          : select === 1
                          ? "TexteAudioMauvRep"
                          : "TexteAudio"
                        : select === 1
                        ? "TexteAudioSelect"
                        : "TexteAudio"
                    }
                  >
                    {ListeReponse1[numeroQuestion]}
                  </strong>
                  <img
                    src="/images/audio.png"
                    alt="audio1"
                    className="LogoAudio"
                  />
                </div>
                <div
                  onClick={LectureAudio2}
                  className={
                    validation
                      ? ListeBonneReponse[numeroQuestion] === 2
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
                        ? ListeBonneReponse[numeroQuestion] === 2
                          ? "TexteAudioBonneRep"
                          : select === 2
                          ? "TexteAudioMauvRep"
                          : "TexteAudio"
                        : select === 2
                        ? "TexteAudioSelect"
                        : "TexteAudio"
                    }
                  >
                    {ListeReponse2[numeroQuestion]}
                  </strong>
                  <img
                    src="/images/audio.png"
                    alt="audio1"
                    className="LogoAudio"
                  />
                </div>
                <div
                  onClick={LectureAudio3}
                  className={
                    validation
                      ? ListeBonneReponse[numeroQuestion] === 3
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
                        ? ListeBonneReponse[numeroQuestion] === 3
                          ? "TexteAudioBonneRep"
                          : select === 3
                          ? "TexteAudioMauvRep"
                          : "TexteAudio"
                        : select === 3
                        ? "TexteAudioSelect"
                        : "TexteAudio"
                    }
                  >
                    {ListeReponse3[numeroQuestion]}
                  </strong>
                  <img
                    src="/images/audio.png"
                    alt="audio1"
                    className="LogoAudio"
                  />
                </div>
                <div
                  onClick={LectureAudio4}
                  className={
                    validation
                      ? ListeBonneReponse[numeroQuestion] === 4
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
                        ? ListeBonneReponse[numeroQuestion] === 4
                          ? "TexteAudioBonneRep"
                          : select === 4
                          ? "TexteAudioMauvRep"
                          : "TexteAudio"
                        : select === 4
                        ? "TexteAudioSelect"
                        : "TexteAudio"
                    }
                  >
                    {ListeReponse4[numeroQuestion]}
                  </strong>
                  <img
                    src="/images/audio.png"
                    alt="audio1"
                    className="LogoAudio"
                  />
                </div>
                <audio id="audio1" src={ListeAudio[numeroQuestion]} preload="auto"></audio>
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

export default Prononciation;
