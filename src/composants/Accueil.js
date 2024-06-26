import React from "react";
import "../styles/Accueil.css";
import { useNavigate } from "react-router";

const Acceuil = ({ ouvert, setOuvert, titre }) => {
  const navigate = useNavigate();

  const OuvrirMenu = () => {
    setOuvert(!ouvert);
  };

  const AllerPage = (lien) => {
    setOuvert(!ouvert);
    navigate(lien);
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
          <button className="NavMenuBouton" onClick={()=>AllerPage("/")}>
            Présentation
          </button>
          <button className="NavMenuBouton" onClick={()=>AllerPage("/alphabet")}>
            Alphabet
          </button>
          <button className="NavMenuBouton" onClick={()=>AllerPage("/nombres")}>
            Nombres
          </button>
          <button className="NavMenuBouton" onClick={()=>AllerPage("/dictionnaire")}>
            Dictionnaire
          </button>
          <button className="NavMenuBouton" onClick={()=>AllerPage("/verbes")}>
            Verbes
          </button>
          <button className="NavMenuBouton" onClick={()=>AllerPage("/vocabulaire")}>
            Vocabulaire
          </button>
          <button className="NavMenuBouton" onClick={()=>AllerPage("/conversation")}>
            Conversations
          </button>
          <button className="NavMenuBouton" onClick={()=>AllerPage("/soutenir")}>
            Soutenir
          </button>
        </div>
      </div>
    </div>
  );
};

export default Acceuil;
