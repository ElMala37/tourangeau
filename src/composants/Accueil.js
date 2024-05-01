import React from "react";
import "../styles/Accueil.css";
import { useNavigate } from "react-router";

const Acceuil = ({ ouvert, setOuvert, titre }) => {
  const navigate = useNavigate();

  const OuvrirMenu = () => {
    setOuvert(!ouvert);
  };

  const OuvrirPre = () => {
    setOuvert(!ouvert);
    navigate("/");
  };

  const OuvrirVoc = () => {
    setOuvert(!ouvert);
    navigate("/vocabulaire");
  };

  // const OuvrirExe = () => {
  //   setOuvert(!ouvert);
  //   navigate("/exercices");
  // };

  const OuvrirAlph = () => {
    setOuvert(!ouvert);
    navigate("/alphabet");
  };

  const OuvrirNomb = () => {
    setOuvert(!ouvert);
    navigate("/nombres");
  };

  const OuvrirConv = () => {
    setOuvert(!ouvert);
    navigate("/conversation");
  };

  const OuvrirLec = () => {
    setOuvert(!ouvert);
    navigate("/lecons");
  };

  const OuvrirSout = () => {
    setOuvert(!ouvert);
    navigate("/soutenir");
  };

  return (
    <div>
      <div>
        <div className="EnTete">
          {ouvert ? (
            <img
              src="/images/more.png"
              alt="OuvrirMenu"
              onClick={OuvrirMenu}
              className="LogoNavMenu"
            />
          ) : (
            <img
              src="/images/close.png"
              alt="FermerMenu"
              onClick={OuvrirMenu}
              className="LogoNavMenu"
            />
          )}

          <div className="Titre">
            {titre === undefined ? (
              <text className="Texte">LE TOURANGEAU</text>
            ) : (
              <text className="Texte">{titre}</text>
            )}

            <img src="/images/drapeau.png" alt="Drapeau" className="Drapeau" />
          </div>
        </div>

        <div
          className="NavMenu"
          style={{
            transform: ouvert ? "translateX(calc(-50vw))" : "none",
            transition: "transform 0.7s ease",
          }}
        >
          <button className="NavMenuBouton" onClick={OuvrirPre}>
            Présentation
          </button>
          <button className="NavMenuBouton" onClick={OuvrirAlph}>
            Alphabet
          </button>
          <button className="NavMenuBouton" onClick={OuvrirNomb}>
            Nombres
          </button>
          {/* <button className="NavMenuBouton" onClick={OuvrirLec}>
            Leçons
          </button> */}
          <button className="NavMenuBouton" onClick={OuvrirVoc}>
            Vocabulaire
          </button>
          <button className="NavMenuBouton" onClick={OuvrirConv}>
            Conversations
          </button>
          <button className="NavMenuBouton" onClick={OuvrirSout}>
            Soutenir
          </button>
        </div>
      </div>
    </div>
  );
};

export default Acceuil;
