import React, { useState, useEffect } from "react";
import "../../styles/Conversation/GeneralConv.css";
import { useNavigate } from "react-router";
import Acceuil from "../Accueil";

const SePresenterConv = () => {
  const [ouvert, setOuvert] = useState(true);
  const navigate = useNavigate();
  const [etape, setEtape] = useState(0);
  const nbEtapes = 8;

  const FermerTheme = () => {
    navigate("/conversation");
  };

  const EtapeSuivante = () => {
    setEtape(etape + 1);
  };

  return (
    <div className="Fond">
      <Acceuil ouvert={ouvert} setOuvert={setOuvert} />
      <div className="ContenuConversation">
        <div className="TrameConversation">
          <div className="EnTeteConversation">
            <img
              src="/images/close.png"
              alt="OuvrirMenu"
              onClick={FermerTheme}
              className="LogoNavMenu"
            />
            <div className="LigneEtapeFondConv">
              {Array.from({ length: nbEtapes + 1 }, (_, index) => (
                <div
                  className="RondEtapeConv"
                  style={{
                    transform:
                      etape >= index + 1
                        ? `translateX(${(60 / nbEtapes) * (index + 1)}vw)`
                        : "none",
                    transition: "0.7s",
                  }}
                  key={index}
                ></div>
              ))}
              <div
                className="LigneEtapeConv"
                style={{
                  width: `${(60 / nbEtapes) * etape}vw`,
                  transition: '0.7s',
                }}
              ></div>
            </div>
            <p className="ProgressionConversation">
              {etape}/{nbEtapes}
            </p>
          </div>
          <div className="EtapeSuivante" onClick={EtapeSuivante}>
            Suivant
          </div>
          <div className="EnteteQuestionConversation">

          </div>
        </div>
      </div>
    </div>
  );
};

export default SePresenterConv;
