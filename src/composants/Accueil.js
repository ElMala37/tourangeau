import React, { useState } from "react";
import "../styles/Accueil.css";
import { motion } from "framer-motion";

const Acceuil = () => {
  const [etranger, setEtranger] = useState(false);
  const [ouvert, setOuvert] = useState(true);

  const OuvrirMenu = () => {
    setOuvert(!ouvert);
    setEtranger(true);
  };

  return (
    <div className="Fond">
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
              animate={{ x: "-30vw" }}
              transition={{ duration: 0.5 }}
            >
              <div className="NavMenu">
                <button className="NavMenuBouton">Accueil</button>
                <button className="NavMenuBouton">Leçons</button>
                <button className="NavMenuBouton">Exercices</button>
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
          <motion.div
            initial={{ x: "-30vw" }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="NavMenu">
              <button className="NavMenuBouton">Accueil</button>
              <button className="NavMenuBouton">Leçons</button>
              <button className="NavMenuBouton">Exercices</button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Acceuil;
