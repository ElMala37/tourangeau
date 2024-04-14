import React, { useState } from "react";
import "../styles/Nombres.css";
import Acceuil from "./Accueil";

const Nombres = () => {
  const [ouvert, setOuvert] = useState(true);
  const dizaine1 = [
    "eun",
    "deus",
    "treis",
    "quatĕr",
    "cinz",
    "seis",
    "souep",
    "ouez",
    "neu",
    "diz",
  ];
  const numeros = [
    '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29',
    '30',
  ];
  const nom_numeros = [
    "unrĕm",
    "daurrĕm",
    "trerrĕm",
    "quataurrĕm",
    "quienrĕm",
    "serrĕm",
    "dissouep",
    "dizouez",
    "dizneu",
    "vinz",
    "vinz-e-eun",
    "vinz-e-deus",
    "vinz-e-treis",
    "vinz-e-quatĕr",
    "vinz-e-cinz",
    "vinz-e-seis",
    "vinz-e-souep",
    "vinz-e-ouez",
    "vinz-e-neu",
    "trentĕ",
  ];

  const LectureAudio = (item) => {
    const audioElement = document.getElementById(`AudioPour${item}`);
    audioElement.currentTime = 0;
    audioElement.play();
    console.log(item);
  };

  return (
    <div className="Fond">
      <Acceuil ouvert={ouvert} setOuvert={setOuvert} titre="LES LIMEROZS" />
      <div className="Dizaine1">
        <div className="LigneDizaine1">
          {dizaine1.slice(0, 5).map((item, index) => (
            <div className="CelluleChiffre">
              <div className="CercleChiffre">
                <span className="Chiffre">{index + 1}</span>
              </div>
              <div className="BoutonAudioChiffres" onClick={()=>LectureAudio(index+1)}>
                <img
                  src={`/images/audio.png`}
                  alt="AudioChiffres"
                  className="LogoAudioChiffres"
                />
                <audio id={`AudioPour${index + 1}`} src={`/audios/Nombres/${index + 1}.mp3`}></audio>
                <span className="TexteChiffres">{item}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="LigneDizaine1">
          {dizaine1.slice(5, 10).map((item, index) => (
            <div className="CelluleChiffre">
              <div className="CercleChiffre">
                <span className="Chiffre">{index + 6}</span>
              </div>
              <div className="BoutonAudioChiffres" onClick={()=>LectureAudio(index+6)}>
                <img
                  src={`/images/audio.png`}
                  alt="AudioChiffres"
                  className="LogoAudioChiffres"
                />
                <audio id={`AudioPour${index+6}`} src={`/audios/Nombres/${index+6}.mp3`}></audio>
                <span className="TexteChiffres">{item}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="tableauChiffre">
        <div className="colonneDizaine">
          {numeros.slice(0, 10).map((item, index) => (
            <div className="ligneDizaine">
              <div className="CelluleColonneDizaine">
                <text className="NumerosTableau">{item}</text>
              </div>
              <div className="CelluleColonneDizaine">
                <text className="texteNumeroTableau">{nom_numeros[index]}</text>
              </div>
              <div className="CelluleColonneDizaineAudio" onClick={()=>LectureAudio(index+11)}>
                <img
                  src={`/images/audio.png`}
                  alt="AudioNumeros"
                  className="LogoAudioNumeros"
                />
                <audio id={`AudioPour${index+11}`} src={`/audios/Nombres/${index+11}.mp3`}></audio>
              </div>
            </div>
          ))}
        </div>
        <div className="colonneDizaine">
          {numeros.slice(10, 20).map((item, index) => (
            <div className="ligneDizaine">
              <div className="CelluleColonneDizaine">
                <text className="NumerosTableau">{item}</text>
              </div>
              <div className="CelluleColonneDizaine">
                <text className="texteNumeroTableau">{nom_numeros[index + 10]}</text>
              </div>
              <div className="CelluleColonneDizaineAudio" onClick={() => LectureAudio(index+21)}>
                <img
                  src={`/images/audio.png`}
                  alt="AudioNumeros"
                  className="LogoAudioNumeros"
                />
                <audio id={`AudioPour${index+21}`} src={`/audios/Nombres/${index+21}.mp3`}></audio>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Nombres;
