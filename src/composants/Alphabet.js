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

  const LectureAudioNomLettre = (index) => {
    const audioElement = document.getElementById(`AudioNomLettre${NomAudio[index]}`);
    audioElement.currentTime = 0;
    audioElement.play();
  };

  return (
    <div className="Fond">
      <Acceuil ouvert={ouvert} setOuvert={setOuvert} titre="ALPHABET TOURANGEAU" />
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
            <div className="celluleAudioTableauAlphabet" onClick={() => LectureAudioNomLettre(index)}>
              <text className="texteTableauAlphabet">{NomLettre[index]}</text>
            </div>
            <div className="celluleAudioTableauAlphabet">
              <img
                src="images/audio.png"
                alt="audioNom"
                className="logoAudioTableauAlphabet"
              />
            </div>
            <audio id={`AudioNomLettre${NomAudio[index]}`} src={`/audios/NomDesLettres/${NomAudio[index]}.mp3`}></audio>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Alphabet;
