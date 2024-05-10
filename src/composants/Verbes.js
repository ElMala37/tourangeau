import React, { useState } from "react";
import Acceuil from "./Accueil";
import { useNavigate } from "react-router";

const Verbes = () => {
  const [ouvert, setOuvert] = useState(true);
  const navigate = useNavigate();

  const AllerVerbe = (lien) => {
    navigate(lien);
  };

  return (
    <div className="Fond">
      <Acceuil ouvert={ouvert} setOuvert={setOuvert} titre="VERBES"/>
      <div className="Contenu">
        <div className="CarteTheme" onClick={()=>AllerVerbe("/verbes/eter")}>
          <text className="TitreCarteTheme">ETĔR (être)</text>
          <img src="/images/logo_cahier.png" alt="LogoThemeSePresenter" className="LogoTheme"/>
        </div>
        <div className="CarteTheme" onClick={()=>AllerVerbe("/verbes/havouere")}>
          <text className="TitreCarteTheme">HAVOUERĔ (avoir)</text>
          <img src="/images/logo_cahier.png" alt="LogoThemeSePresenter" className="LogoTheme"/>
        </div>
        <div className="CarteTheme" onClick={()=>AllerVerbe("/verbes/faizer")}>
          <text className="TitreCarteTheme">FAIZĔR (faire)</text>
          <img src="/images/logo_cahier.png" alt="LogoThemeSePresenter" className="LogoTheme"/>
        </div>
      </div>
      <div className="Contenu">
        <div className="CarteTheme" onClick={()=>AllerVerbe("/verbes/poyeire")}>
          <text className="TitreCarteTheme">POYEIRĔ (pouvoir)</text>
          <img src="/images/logo_cahier.png" alt="LogoThemeSePresenter" className="LogoTheme"/>
        </div>
        <div className="CarteTheme" onClick={()=>AllerVerbe("/verbes/asçaouere")}>
          <text className="TitreCarteTheme">ASÇAOUERĔ (savoir)</text>
          <img src="/images/logo_cahier.png" alt="LogoThemeSePresenter" className="LogoTheme"/>
        </div>
        <div className="CarteTheme" onClick={()=>AllerVerbe("/verbes/douere")}>
          <text className="TitreCarteTheme">DĔOUERĔ (devoir)</text>
          <img src="/images/logo_cahier.png" alt="LogoThemeSePresenter" className="LogoTheme"/>
        </div>
      </div>
      <div className="Contenu">
        <div className="CarteTheme" onClick={()=>AllerVerbe("/verbes/crerre")}>
          <text className="TitreCarteTheme">CRERRĔ (croire)</text>
          <img src="/images/logo_cahier.png" alt="LogoThemeSePresenter" className="LogoTheme"/>
        </div>
        <div className="CarteTheme" onClick={()=>AllerVerbe("/verbes/veulouere")}>
          <text className="TitreCarteTheme">VEULOUERĔ (vouloir)</text>
          <img src="/images/logo_cahier.png" alt="LogoThemeSePresenter" className="LogoTheme"/>
        </div>
        <div className="CarteTheme" onClick={()=>AllerVerbe("/verbes/se_ghlevair")}>
          <text className="TitreCarteTheme">SE GHLEVAIR (se lever)</text>
          <img src="/images/logo_cahier.png" alt="LogoThemeSePresenter" className="LogoTheme"/>
        </div>
      </div>
    </div>
  );
};

export default Verbes;
