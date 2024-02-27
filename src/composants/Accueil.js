import React, { useState } from "react";
import "../styles/Accueil.css";
import { motion } from "framer-motion";
import Lecons from "./Lecons";
import Exercices from "./Exercices";

const Acceuil = () => {
  const [etranger, setEtranger] = useState(false);
  const [ouvert, setOuvert] = useState(true);
  const [page, setPage] = useState(0);

  const OuvrirMenu = () => {
    setOuvert(!ouvert);
    setEtranger(true);
  };

  const OuvrirPre = () => {
    setPage(0);
  };

  const OuvrirLec = () => {
    setPage(1);
  };

  const OuvrirExe = () => {
    setPage(2);
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
              animate={{ x: "-50vw" }}
              transition={{ duration: 0.5 }}
            >
              <div className="NavMenu">
                <button className="NavMenuBouton" onClick={OuvrirPre}>
                  Présentation
                </button>
                <button className="NavMenuBouton" onClick={OuvrirLec}>
                  Leçons
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
              <button className="NavMenuBouton" onClick={OuvrirLec}>
                Leçons
              </button>
              <button className="NavMenuBouton" onClick={OuvrirExe}>
                Exercices
              </button>
            </div>
          </motion.div>
        </div>
      )}
      {page === 0 ? (
        <div></div>
      ) : (
        <div>{page === 1 ? <Lecons /> : <Exercices />}</div>
      )}
    </div>
  );
};

export default Acceuil;
