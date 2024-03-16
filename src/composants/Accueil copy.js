import React, { useState } from "react";
import "../styles/Accueil.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";

const Acceuil = ({ ouvert, setOuvert }) => {
  const [etranger, setEtranger] = useState(false);
  const navigate = useNavigate();

  const OuvrirMenu = () => {
    setOuvert(!ouvert);
    setEtranger(true);
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
      {ouvert ? (
        <div>
          <div className="EnTete">
            <img
              src="/images/more.png"
              alt="OuvrirMenu"
              onClick={OuvrirMenu}
              className="LogoNavMenu"
            />
            <div className="Titre">
              <text className="Texte">LE TOURANGEAU</text>
              <img
                src="/images/drapeau.png"
                alt="Drapeau"
                className="Drapeau"
              />
            </div>
          </div>
          {etranger ? (
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: "-50vw" }}
              transition={{ duration: 0.5 }}
            >
              <div className="NavMenu">
                <button className="NavMenuBouton" onClick={OuvrirPre}>
                  Présentation
                </button>
                <button className="NavMenuBouton" onClick={OuvrirVoc}>
                  Vocabulaire
                </button>
                <button className="NavMenuBouton" onClick={OuvrirExe}>
                  Exercices
                </button>
              </div>
            </motion.div>
          ) : (
            <div></div>
          )}
        </div>
      ) : (
        <div>
          <div className="EnTete">
            <img
              src="/images/close.png"
              alt="OuvrirMenu"
              onClick={OuvrirMenu}
              className="LogoNavMenu"
            />
            <div className="Titre">
              <text className="Texte">LE TOURANGEAU</text>
              <img
                src="/images/drapeau.png"
                alt="Drapeau"
                className="Drapeau"
              />
            </div>
          </div>
          <motion.div
            initial={{ x: "-50vw" }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="NavMenu">
              <button className="NavMenuBouton" onClick={OuvrirPre}>
                Présentation
              </button>
              <button className="NavMenuBouton">
                Prononciation
              </button>
              <button className="NavMenuBouton" onClick={OuvrirVoc}>
                Vocabulaire
              </button>
              <button className="NavMenuBouton" onClick={OuvrirExe}>
                Exercices
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Acceuil;
