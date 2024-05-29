import React, { useState } from "react";
import Acceuil from "./Accueil";
import { useNavigate } from "react-router";
import { Helmet } from 'react-helmet';

const Vocabulaire = () => {
  const [ouvert, setOuvert] = useState(true);
  const navigate = useNavigate();
  
  
  const AllerTheme = (lien) => {
    navigate(lien);
  }

  return (
    <div className="Fond">
      <Helmet>
        <title>Vocabulaire tourangeau</title>
        <meta name="description" content="La touraine a ses propres mots, ses propres expressions et c'est ici qu'on vous propose de découvrir le vocabulaire de la langue tourangelle." />
      </Helmet>
      <Acceuil ouvert={ouvert} setOuvert={setOuvert} titre="VOCABULAIRE" />
      <div className="Contenu">
        <div className="CarteTheme" onClick={() => AllerTheme("/vocabulaire/famille")}>
          <text className="TitreCarteTheme">La famille</text>
          <img
            src="/images/Vocabulaire/famille.png"
            alt="LogoThemeFamille"
            className="LogoTheme"
          />
        </div>
        <div className="CarteTheme" onClick={() => AllerTheme("/vocabulaire/vetements")}>
          <text className="TitreCarteTheme">Les vêtements</text>
          <img
            src="/images/Vocabulaire/vetements.png"
            alt="LogoThemeFamille"
            className="LogoTheme"
          />
        </div>
        <div className="CarteTheme" onClick={() => AllerTheme("/vocabulaire/animaux")}>
          <text className="TitreCarteTheme">Les animaux</text>
          <img
            src="/images/Vocabulaire/animaux.png"
            alt="LogoThemeFamille"
            className="LogoTheme"
          />
        </div>
      </div>
      <div className="Contenu">
        <div className="CarteTheme" onClick={() => AllerTheme("/vocabulaire/instruments")}>
          <text className="TitreCarteTheme">Les instruments</text>
          <img
            src="/images/Vocabulaire/instruments.png"
            alt="LogoThemeFamille"
            className="LogoTheme"
          />
        </div>
        <div className="CarteTheme" onClick={() => AllerTheme("/vocabulaire/fruits")}>
          <text className="TitreCarteTheme">Les fruits</text>
          <img
            src="/images/Vocabulaire/fruits.png"
            alt="LogoThemeFamille"
            className="LogoTheme"
          />
        </div>
        <div className="CarteTheme" onClick={() => AllerTheme("/vocabulaire/sepresenter")}>
          <text className="TitreCarteTheme">Se présenter</text>
          <img
            src="/images/Vocabulaire/sepresenter.png"
            alt="LogoThemeSePresenter"
            className="LogoTheme"
          />
        </div>
        </div>
        <div className="Contenu">
          <div className="CarteTheme" onClick={() => AllerTheme("/vocabulaire/paques")}>
            <text className="TitreCarteTheme">Pâques</text>
            <img
              src="/images/Vocabulaire/paques.png"
              alt="LogoThemeFamille"
              className="LogoTheme"
            />
          </div>
          <div className="CarteTheme" onClick={() => AllerTheme("/vocabulaire/noel")}>
            <text className="TitreCarteTheme">Noël</text>
            <img
              src="/images/Vocabulaire/noel.png"
              alt="LogoThemeFamille"
              className="LogoTheme"
            />
          </div>
          <div className="CarteTheme" onClick={() => AllerTheme("/vocabulaire/hiver")}>
            <text className="TitreCarteTheme">L'hiver</text>
            <img
              src="/images/Vocabulaire/hiver.png"
              alt="LogoThemeSePresenter"
              className="LogoTheme"
            />
          </div>
        </div>
        <div className="Contenu">
        <div className="CarteTheme" onClick={() => AllerTheme("/vocabulaire/maison")}>
            <text className="TitreCarteTheme">La maison</text>
            <img
              src="/images/Vocabulaire/maison.png"
              alt="LogoThemeFamille"
              className="LogoTheme"
            />
          </div>
          <div className="CarteTheme" onClick={() => AllerTheme("/vocabulaire/jardin")}>
            <text className="TitreCarteTheme">Le jardin</text>
            <img
              src="/images/Vocabulaire/jardin.png"
              alt="LogoThemeSePresenter"
              className="LogoTheme"
            />
          </div>
        </div>
      
    </div>
  );
};

export default Vocabulaire;
