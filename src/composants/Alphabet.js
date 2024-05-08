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
  ];

  const Alphabet = [
    "A",
    "B",
    "C",
    "Ç",
    "D",
    "E",
    "Ĕ",
    "F",
    "G",
    "H",
    "I",
    "J",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "X",
    "Y",
    "Z",
  ];

  const NomLettre = [
    "eul oa",
    "eul be",
    "eul ce",
    "eul ce couetaiy",
    "eul de",
    "eul e",
    "eul e berieu",
    "eul afĕ",
    "eul ge",
    "eul hoagĕ",
    "eul i",
    "eul joz",
    "eul alĕ",
    "eul amĕ",
    "eul anĕ",
    "eul o'",
    "eul pé",
    "eul qu",
    "eul arĕ",
    "eul assĕ",
    "eul te",
    "eul u",
    "eul ve",
    "eul isquĕ",
    "eul i hregeoues",
    "eul zetĕ",
  ];

  const NomAudio = [
    "a",
    "b",
    "c",
    "cc",
    "d",
    "e",
    "ee",
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
  ];

  const Digraphes = [
    ["æn", "amoum", "æn", "t"],
    ["ai", "et", "ai", "y"],
    ["an", "", "an", "givarnĕs"],
    ["am", "d'", "am", "preis"],
    ["au", "", "au", "moaghlĕ"],
    ["ei", "", "ei", "stant"],
    ["en", "v", "en", "dicion"],
    ["em", "t", "em", "p"],
    ["eu", "qui", "eu", "s"],
    ["iĕ", "m", "iĕ", "zon"],
    ["oa", "", "oa", "bĕr"],
    ["on", "poç", "on", ""],
    ["om", "l", "om", ""],
    ["ou", "p", "ou", "mĕ"],
    ["un", "def", "un", "tair"],
    ["um", "ferth", "um", "baudĕ"],
  ];

  const Trigraphes = [
    ["ain", "tr", "ain", "teur"],
    ["aim", "f", "aim", "bair"],
    ["ein", "", "ein", "chaulĕ"],
    ["eim", "viy", "eim", ""],
    ["eun", "h", "eun", "thĕ"],
    ["eum", "sghl", "eum", "bair"],
    ["ghl", "fas", "ghl", "oz"],
    ["ghn", "montai", "ghn", "ĕ"],
  ];

  const LettreFinDeMot = [
    ["-g", "-", "jĕ seu", "g"],
    ["-r", "-", "viĕqui", "r"],
    ["-s / -z", "après a-/o-/ou-", "crandĕno", "as"],
    ["-s / -z", "après e-/eu-/i-/u-", "pghlec", "iz"],
    ["-s / -z", "après n-", "guerna", "nz"],
    ["-ĕ", "-", "loam", "ĕ"],
    ["-ĕ", "+ consonne", "bouem", "ĕn"],
    ["-au", "-", "çarĕgi", "au"],
  ];

  const LectureAudioNomLettre = (index) => {
    const audioElement = document.getElementById(
      `AudioNomLettre${NomAudio[index]}`
    );
    audioElement.currentTime = 0;
    audioElement.play();
  };

  const LectureAudioSonLettre = (index) => {
    const audioElement = document.getElementById(
      `AudioSonLettre${NomAudio[index]}`
    );
    audioElement.currentTime = 0;
    audioElement.play();
  };

  return (
    <div className="Fond">
      <Acceuil ouvert={ouvert} setOuvert={setOuvert} titre="ALPHABET" />

      <div className="espaceTitreTableau">
        <div className="titreTableau">L'alphabet</div>
      </div>

      <div className="tableauAlphabet">
        <div className="categoriesTableauAlphabet">
          <div className="celluleTableauAlphabet">
            <text className="lettreTableauAlphabet">Majuscule</text>
          </div>
          <div className="celluleTableauAlphabet">
            <text className="lettreTableauAlphabet">Minuscule</text>
          </div>
          <div className="celluleTableauAlphabet">
            <text className="lettreTableauAlphabet">Le nom</text>
          </div>
          <div className="celluleTableauAlphabet">
            <text className="lettreTableauAlphabet">Le son</text>
          </div>
        </div>
        {alphabet.map((item, index) => (
          <div className="ligneTableauAlphabet" key={index}>
            <div className="celluleTableauAlphabet">
              <text className="lettreTableauAlphabet">{Alphabet[index]}</text>
            </div>
            <div className="celluleTableauAlphabet">
              <text className="lettreTableauAlphabet">{alphabet[index]}</text>
            </div>
            <div
              className="celluleAudioTableauAlphabet"
              onClick={() => LectureAudioNomLettre(index)}
            >
              <text className="texteTableauAlphabet">{NomLettre[index]}</text>
            </div>
            <div
              className="celluleAudioTableauAlphabet"
              onClick={() => LectureAudioSonLettre(index)}
            >
              <img
                src="images/audio.png"
                alt="audioNom"
                className="logoAudioTableauAlphabet"
              />
            </div>
            <audio
              id={`AudioNomLettre${NomAudio[index]}`}
              src={`/audios/NomDesLettres/${NomAudio[index]}.mp3`}
            ></audio>
            <audio
              id={`AudioSonLettre${NomAudio[index]}`}
              src={`/audios/SonDesLettres/sslm_${NomAudio[index]}.mp3`}
            ></audio>
          </div>
        ))}
      </div>

      <div className="espaceTitreTableau">
        <div className="titreTableau">Les digraphes</div>
      </div>

      <div className="tableauDigraphes">
        <div className="categoriesTableauDigraphes">
          <div className="celluleTableauAlphabet">
            <text className="lettreTableauAlphabet">Digraphe</text>
          </div>
          <div className="celluleTableauAlphabet">
            <text className="lettreTableauAlphabet">Le son</text>
          </div>
          <div className="celluleTableauAlphabet">
            <text className="lettreTableauAlphabet">Exemple</text>
          </div>
        </div>
        {Digraphes.map((item, index) => (
          <div className="ligneTableauDigraphes">
            <div className="celluleTableauAlphabet">
              <text className="lettreTableauAlphabet">
                {Digraphes[index][0]}
              </text>
            </div>
            <div className="celluleAudioTableauAlphabet">
              <img
                src="images/audio.png"
                alt="audioNom"
                className="logoAudioTableauAlphabet"
              />
            </div>
            <div className="celluleAudioTableauAlphabet">
              <text className="texteTableauAlphabet">
                {Digraphes[index][1]}
                <span style={{ fontWeight: "bold" }}>
                  {Digraphes[index][2]}
                </span>
                {Digraphes[index][3]}
              </text>
            </div>
          </div>
        ))}
      </div>

      <div className="espaceTitreTableau">
        <div className="titreTableau">Les trigraphes</div>
      </div>

      <div className="tableauDigraphes">
        <div className="categoriesTableauDigraphes">
          <div className="celluleTableauAlphabet">
            <text className="lettreTableauAlphabet">Trigraphe</text>
          </div>
          <div className="celluleTableauAlphabet">
            <text className="lettreTableauAlphabet">Le son</text>
          </div>
          <div className="celluleTableauAlphabet">
            <text className="lettreTableauAlphabet">Exemple</text>
          </div>
        </div>
        {Trigraphes.map((item, index) => (
          <div className="ligneTableauDigraphes">
            <div className="celluleTableauAlphabet">
              <text className="lettreTableauAlphabet">
                {Trigraphes[index][0]}
              </text>
            </div>
            <div className="celluleAudioTableauAlphabet">
              <img
                src="images/audio.png"
                alt="audioNom"
                className="logoAudioTableauAlphabet"
              />
            </div>
            <div className="celluleAudioTableauAlphabet">
              <text className="texteTableauAlphabet">
                {Trigraphes[index][1]}
                <span style={{ fontWeight: "bold" }}>
                  {Trigraphes[index][2]}
                </span>
                {Trigraphes[index][3]}
              </text>
            </div>
          </div>
        ))}
      </div>

      <div className="espaceTitreTableau">
        <div className="titreTableau">Prononciation en fin de mot</div>
      </div>

      <div className="tableauAlphabet">
        <div className="categoriesTableauAlphabet">
          <div className="celluleTableauAlphabet">
            <text className="lettreTableauAlphabet">Lettre</text>
          </div>
          <div className="celluleTableauAlphabet">
            <text className="lettreTableauAlphabet">Condition</text>
          </div>
          <div className="celluleTableauAlphabet">
            <text className="lettreTableauAlphabet">Le son</text>
          </div>
          <div className="celluleTableauAlphabet">
            <text className="lettreTableauAlphabet">Exemple</text>
          </div>
        </div>
        {LettreFinDeMot.map((item, index) => (
          <div className="ligneTableauAlphabet">
            <div className="celluleTableauAlphabet">
              <text className="lettreTableauAlphabet">
                {LettreFinDeMot[index][0]}
              </text>
            </div>
            <div className="celluleTableauAlphabet">
              <text className="texteRegle">{LettreFinDeMot[index][1]}</text>
            </div>
            <div className="celluleAudioTableauAlphabet">
              <img
                src="images/audio.png"
                alt="audioNom"
                className="logoAudioTableauAlphabet"
              />
            </div>
            <div className="celluleAudioTableauAlphabet">
              <text className="texteTableauAlphabet">
                {LettreFinDeMot[index][2]}
                <span style={{ fontWeight: "bold" }}>
                  {LettreFinDeMot[index][3]}
                </span>{" "}
              </text>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Alphabet;
