import React from "react";
import "../styles/Accueil.css";
import { useNavigate } from "react-router";

const Acceuil = ({ ouvert, setOuvert }) => {
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

  const OuvrirExe = () => {
    setOuvert(!ouvert);
    navigate("/exercices");
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
            <text className="Texte">LE TOURANGEAU</text>
            <img src="/images/drapeau.png" alt="Drapeau" className="Drapeau" />
          </div>
        </div>

        <div
          className="NavMenu"
          style={{
            transform: ouvert ? "translateX(calc(-30vw))" : "none",
            transition: "transform 0.5s ease",
          }}
        >
          <button className="NavMenuBouton" onClick={OuvrirPre}>
            Présentation
          </button>
          <button className="NavMenuBouton">Prononciation</button>
          <button className="NavMenuBouton" onClick={OuvrirVoc}>
            Vocabulaire
          </button>
          <button className="NavMenuBouton" onClick={OuvrirExe}>
            Exercices
          </button>
        </div>
      </div>
    </div>
  );
};

export default Acceuil;
