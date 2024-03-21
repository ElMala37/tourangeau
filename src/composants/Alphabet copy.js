import React, { useState } from "react";
import "../styles/Alphabet.css";
import Acceuil from "./Accueil";

const Alphabet = () => {
  const [ouvert, setOuvert] = useState(true);
  const alphabet = [
    "a",
    "b",
    "c",
    "ç",
    "d",
    "e",
    "ĕ",
    "f",
    "g",
    "h",
    "i",
    "j",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "x",
    "y",
    "z",
    "æn",
    "iĕ",
    "oa",
    "eun",
    "eum",
    "ghl",
    "ghn",
  ];

  return (
    <div className="Fond">
      <Acceuil ouvert={ouvert} setOuvert={setOuvert} />
      <div className="AlphabetDisposition">
        <div className="AlphabetDispositionBlock">
          <div className="AlphabetDispositionCase">
            {alphabet.slice(0, 5).map((item) => (
              <div className="AlphabetLettreCase">
                <text className="TexteLettreCase">{item}</text>
              </div>
            ))}
          </div>
          <div className="AlphabetDispositionCase">
            {alphabet.slice(5, 9).map((item) => (
              <div className="AlphabetLettreCase">
                <text className="TexteLettreCase">{item}</text>
              </div>
            ))}
          </div>
          <div className="AlphabetDispositionCase">
            {alphabet.slice(9, 14).map((item) => (
              <div className="AlphabetLettreCase">
                <text className="TexteLettreCase">{item}</text>
              </div>
            ))}
          </div>
        </div>
        <div className="AlphabetDispositionBlock">
          <div className="AlphabetDispositionCase">
            {alphabet.slice(14, 18).map((item) => (
              <div className="AlphabetLettreCase">
                <text className="TexteLettreCase">{item}</text>
              </div>
            ))}
          </div>
          <div className="AlphabetDispositionCase">
            {alphabet.slice(18, 23).map((item) => (
              <div className="AlphabetLettreCase">
                <text className="TexteLettreCase">{item}</text>
              </div>
            ))}
          </div>
          <div className="AlphabetDispositionCase">
            {alphabet.slice(23, 26).map((item) => (
              <div className="AlphabetLettreCase">
                <text className="TexteLettreCase">{item}</text>
              </div>
            ))}
          </div>
        </div>
        <text className="TitreAlphabet">Prononciations particulières :</text>
        <div className="AlphabetDispositionBlock">
          <div className="AlphabetDispositionCase">
            {alphabet.slice(26, 30).map((item) => (
              <div className="AlphabetLettreCase">
                <text className="TexteLettreCase">{item}</text>
              </div>
            ))}
          </div>
          <div className="AlphabetDispositionCase">
            {alphabet.slice(30, 33).map((item) => (
              <div className="AlphabetLettreCase">
                <text className="TexteLettreCase">{item}</text>
              </div>
            ))}
          </div>
        </div>
        <text className="TitreAlphabet">Les lettres en fin de mots :</text>
        <div className="LettreFinDeMot">
          <text className="TexteLettreFinDeMot">-r = muet</text>
          <text className="TexteExempleLettreFinDeMot">exemple :</text>
          <div className="AlphabetLettreCase">
            <img
              src="images/audio.png"
              alt="AudioFinMots1"
              className="LogoAudioAlphabet"
            />
            <text className="TexteLettreCase">viĕquir</text>
            <text className="TexteLettreCaseExemple">(vivre)</text>
          </div>
        </div>
        <div className="LettreFinDeMot">
          <text className="TexteLettreFinDeMot">-au = /ow/</text>
          <text className="TexteExempleLettreFinDeMot">exemple :</text>
          <div className="AlphabetLettreCase">
            <img
              src="images/audio.png"
              alt="AudioFinMots1"
              className="LogoAudioAlphabet"
            />
            <text className="TexteLettreCase">choaquiau</text>
            <text className="TexteLettreCaseExemple">(château)</text>
          </div>
        </div>
        <div className="LettreFinDeMot">
          <text className="TexteLettreFinDeMot">-z = /y/</text>
          <text className="TexteApresLettreFinDeMot">après</text>
          <text className="TexteLettreFinDeMot">e-,eu-,i-,u-</text>
          <text className="TexteExempleLettreFinDeMot">exemple :</text>
          <div className="AlphabetLettreCase">
            <img
              src="images/audio.png"
              alt="AudioFinMots1"
              className="LogoAudioAlphabet"
            />
            <text className="TexteLettreCase">bainzĕliz</text>
            <text className="TexteLettreCaseExemple">(basilic)</text>
          </div>
        </div>
        <div className="LettreFinDeMot">
          <text className="TexteLettreFinDeMot">-z = /w/</text>
          <text className="TexteApresLettreFinDeMot">après</text>
          <text className="TexteLettreFinDeMot">a-,o-,ou-</text>
          <text className="TexteExempleLettreFinDeMot">exemple :</text>
          <div className="AlphabetLettreCase">
            <img
              src="images/audio.png"
              alt="AudioFinMots1"
              className="LogoAudioAlphabet"
            />
            <text className="TexteLettreCase">cembĕloz</text>
            <text className="TexteLettreCaseExemple">(piano)</text>
          </div>
        </div>
        <div className="LettreFinDeMot">
          <text className="TexteLettreFinDeMot">-g = /y/</text>
          <text className="TexteExempleLettreFinDeMot">exemple :</text>
          <div className="AlphabetLettreCase">
            <img
              src="images/audio.png"
              alt="AudioFinMots1"
              className="LogoAudioAlphabet"
            />
            <text className="TexteLettreCase">jĕ seug</text>
            <text className="TexteLettreCaseExemple">(je suis)</text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alphabet;
