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
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
    30,
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

  return (
    <div className="Fond">
      <Acceuil ouvert={ouvert} setOuvert={setOuvert} titre="LES LIMEROZS" />
      <div className="Dizaine1">
        {dizaine1.map((item, index) => (
          <div className="CelluleChiffre">
            <img
              src={`/images/Nombres/number-${index + 1}.png`}
              alt="FermerMenu"
              className="LogoChiffres"
            />
            <span className="TexteChiffres">{item}</span>
          </div>
        ))}
      </div>
      <div className="tableauChiffre">
        <div className="colonneDizaine">
          {numeros.slice(0, 10).map((item, index) => (
            <div className="ligneDizaine">
              <div className="CelluleColonneDizaine"><text className="NumerosTableau">{item}</text></div>
              <div className="CelluleColonneDizaine"><text className="texteNumeroTableau">{nom_numeros[index]}</text></div>
              <div className="CelluleColonneDizaine">
                <img
                  src={`/images/audio.png`}
                  alt="AudioNumeros"
                  className="LogoAudioNumeros"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="colonneDizaine">
          {numeros.slice(10, 20).map((item, index) => (
            <div className="ligneDizaine">
              <div className="CelluleColonneDizaine"><text className="NumerosTableau">{item}</text></div>
              <div className="CelluleColonneDizaine"><text className="texteNumeroTableau">{nom_numeros[index]}</text></div>
              <div className="CelluleColonneDizaine">
                <img
                  src={`/images/audio.png`}
                  alt="AudioNumeros"
                  className="LogoAudioNumeros"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Nombres;
