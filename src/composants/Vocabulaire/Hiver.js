import React, { useState, useEffect } from "react";
import "../../styles/Vocabulaire/Famille.css";
import { useNavigate } from "react-router";
import Acceuil from "../Accueil";
import { Chart } from "react-google-charts";

const Hiver = () => {
  const [ouvert, setOuvert] = useState(true);
  const navigate = useNavigate();
  const [validation, setValidation] = useState(false);
  const [bonneRep, setBonneRep] = useState(true);
  const [select, setSelect] = useState(0);
  const [numeroQuestion, setNumeroQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [finExo, setFinExo] = useState(false);
  const [ordre, setOrdre] = useState([]);

  const nbQuestion = 16;
  const ListeQuestion = ["le vent","le chocolat chaud","le flocon","un hiver","l'écharpe","la glace","les gants","le traîneau","la leuroagĕ","eul choucoloaz chaus","la fairluchĕ","eun hivarrĕ","la geaboquierĕ","eul gghloaz","lais mitoussĕs","eul trighnau"];
  const ListeReponse1 = ['lais mitoussĕs', 'eul trighnau', 'lais mitoussĕs', 'la leuroagĕ', 'eul choucoloaz chaus', 'la geaboquierĕ', 'la fairluchĕ', 'la geaboquierĕ','un hiver', 'la glace', 'les gants', 'un hiver', 'un hiver', 'le flocon', 'la glace', 'le flocon'];
  const ListeReponse2 = ['eul gghloaz', 'la geaboquierĕ', 'eun hivarrĕ', 'eun hivarrĕ', 'la fairluchĕ', 'eun hivarrĕ', 'lais mitoussĕs', 'eul trighnau','le vent', 'le flocon', 'le chocolat chaud', 'le vent', 'le traîneau', 'un hiver', 'le chocolat chaud', 'la glace'];
  const ListeReponse3 = ['la leuroagĕ', 'la leuroagĕ', 'la fairluchĕ', 'eul choucoloaz chaus', 'la geaboquierĕ', 'eul gghloaz', 'eul gghloaz', 'la fairluchĕ',"l'écharpe", 'le chocolat chaud', 'le flocon', 'les gants', "l'écharpe", "l'écharpe", 'le vent', 'le traîneau'];
  const ListeReponse4 = ['eun hivarrĕ', 'eul choucoloaz chaus', 'eul trighnau', 'lais mitoussĕs', 'eul gghloaz', 'eul choucoloaz chaus', 'eul trighnau', 'la leuroagĕ','le traîneau', 'les gants', "l'écharpe", 'le traîneau', 'le vent', 'la glace', 'les gants', 'le chocolat chaud'];
  const ListeBonneReponse = [3, 4, 3, 2, 3, 3, 2, 2,2, 3, 3, 1, 3, 4, 4, 3];

  useEffect(() => {
    const generateRandomNumbers = () => {
      const randomNumbers = Array.from(
        { length: nbQuestion },
        (_, index) => index
      ).sort(() => Math.random() - 0.5);
      setOrdre(randomNumbers);
    };

    generateRandomNumbers();
  }, []);

  const FermerTheme = () => {
    navigate("/vocabulaire");
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
            <div className="SpaceResultatVoc">
              <div className="SpaceResultatTexteVoc">
                <div className="ResultatTexteVoc">Exercice terminé !</div>
              </div>
              <Chart
                chartType="PieChart"
                data={[
                  ['Réponses', 'score'],
                  ['Bonnes réponses', score],
                  ['Mauvaises réponses', nbQuestion - score],
                ]}
                options={{
                  backgroundColor: 'transparent',
                  colors: ['#50a641', '#a64141']
                }}
                width={'80vw'}
                height={'30vw'}
              />
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

export default Hiver;
