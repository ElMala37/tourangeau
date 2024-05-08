import React, { useState, useEffect } from "react";
import "../styles/Dictionnaire.css";
import Acceuil from "./Accueil";
import dictionaryData from "../datas/dictionnaire_tourangeau_français.json";

const Dictionnaire = () => {
  const [ouvert, setOuvert] = useState(true);
  const [MotRecherche, setMotRecherche] = useState("");
  const [listeMots, setListeMots] = useState([]);
  const [RechercheLangue, setRechercheLangue] = useState("fra");

  const RechercherMot = (event) => {
    setMotRecherche(event.target.value);
    FiltreDictionnaire(event.target.value);
  };

  const FiltreDictionnaire = (mot) => {
    let ResultatRecherche = [];
    //Je filtre les mots commençant par la recherche
    if (RechercheLangue === "fra") {
      ResultatRecherche = dictionaryData.filter((item) =>
        item.français.toLowerCase().startsWith(mot.toLowerCase())
      );
    } else {
      ResultatRecherche = dictionaryData.filter((item) =>
        item.tourangeau.toLowerCase().startsWith(mot.toLowerCase())
      );
    }

    // Maintenant, je trie les résultats par ordre alphabétique
    ResultatRecherche.sort((a, b) => {
      if (RechercheLangue === "fra") {
        return a.français.localeCompare(b.français);
      } else {
        return a.tourangeau.localeCompare(b.tourangeau);
      }
    });

    setListeMots(ResultatRecherche);
  };

  useEffect(() => {
    let ResultatRecherche = [];
    let mot = "";
    ResultatRecherche = dictionaryData.filter((item) =>
      item.tourangeau.toLowerCase().startsWith(mot.toLowerCase())
    );
    ResultatRecherche.sort((a, b) => {
        return a.français.localeCompare(b.français);
    });
    setListeMots(ResultatRecherche);
  }, []);

  const ChangerLangue = () => {
    if (RechercheLangue === "fra") {
      setRechercheLangue("tou");
    } else {
      setRechercheLangue("fra");
    }
  };

  return (
    <div className="Fond">
      <Acceuil ouvert={ouvert} setOuvert={setOuvert} titre="DICTIONNAIRE" />
      <div className="ContenuDictionnaire">
        <div className="enteteDictionnaire">
          {RechercheLangue === "fra" ? (
            <input
              className="BarreRecherche"
              placeholder="Rechercher un mot français..."
              maxLength="25"
              value={MotRecherche}
              onChange={RechercherMot}
            ></input>
          ) : (
            <input
              className="BarreRecherche"
              placeholder="Rechercher un mot tourangeau..."
              maxLength="25"
              value={MotRecherche}
              onChange={RechercherMot}
            ></input>
          )}

          <div className="BouttonChangerLangue" onClick={() => ChangerLangue()}>
            Inverser les langues
          </div>
        </div>
        {listeMots.map((item, index) => (
          <div key={index} className="LigneDictionnaire">
            {RechercheLangue === "fra" ? (
              <div className="SousLigneDictionnaire1">
                <div className="CelluleDrapeauDictionnaire">
                  <img
                    src="/images/drapeau_france.png"
                    alt="Drapeau"
                    className="ImageDrapeauDictionnaire"
                  />
                </div>
                <div className="CelluleMotDictionnaire">{item.français}</div>
                <div className="CelluleDetailDictionnaire">
                  type : {item.type_français}
                </div>
                {item.genre_français === "" ? (
                  <div className="CelluleDetailDictionnaire" />
                ) : (
                  <div className="CelluleDetailDictionnaire">
                    genre : {item.genre_français}
                  </div>
                )}
                {item.singulier_français === "" ? (
                  <div className="CelluleSingulierPlurielDictionnaire" />
                ) : (
                  <div className="CelluleSingulierPlurielDictionnaire">
                    {item.singulier_français} {item.français}
                  </div>
                )}
                {item.pluriel_français === "" ? (
                  <div className="CelluleSingulierPlurielDictionnaire" />
                ) : (
                  <div className="CelluleSingulierPlurielDictionnaire">
                    {item.pluriel_français}
                  </div>
                )}
              </div>
            ) : (
              <div className="SousLigneDictionnaire1">
                <div className="CelluleDrapeauDictionnaire">
                  <img
                    src="/images/drapeau.png"
                    alt="Drapeau"
                    className="ImageDrapeauDictionnaire"
                  />
                </div>
                <div className="CelluleMotDictionnaire">{item.tourangeau}</div>
                <div className="CelluleDetailDictionnaire">
                  type : {item.type_tourangeau}
                </div>
                {item.genre_tourangeau === "" ? (
                  <div className="CelluleDetailDictionnaire" />
                ) : (
                  <div className="CelluleDetailDictionnaire">
                    genre : {item.genre_tourangeau}
                  </div>
                )}
                {item.singulier_tourangeau === "" ? (
                  <div className="CelluleSingulierPlurielDictionnaire" />
                ) : (
                  <div className="CelluleSingulierPlurielDictionnaire">
                    {item.singulier_tourangeau} {item.tourangeau}
                  </div>
                )}
                {item.pluriel_tourangeau === "" ? (
                  <div className="CelluleSingulierPlurielDictionnaire" />
                ) : (
                  <div className="CelluleSingulierPlurielDictionnaire">
                    {item.pluriel_tourangeau}
                  </div>
                )}
              </div>
            )}
            {RechercheLangue === "fra" ? (
              <div className="SousLigneDictionnaire2">
                <div className="CelluleDrapeauDictionnaire">
                  <img
                    src="/images/drapeau.png"
                    alt="Drapeau"
                    className="ImageDrapeauDictionnaire"
                  />
                </div>
                <div className="CelluleMotDictionnaire">{item.tourangeau}</div>
                <div className="CelluleDetailDictionnaire">
                  type : {item.type_tourangeau}
                </div>
                {item.genre_tourangeau === "" ? (
                  <div className="CelluleDetailDictionnaire" />
                ) : (
                  <div className="CelluleDetailDictionnaire">
                    genre : {item.genre_tourangeau}
                  </div>
                )}
                {item.singulier_tourangeau === "" ? (
                  <div className="CelluleSingulierPlurielDictionnaire" />
                ) : (
                  <div className="CelluleSingulierPlurielDictionnaire">
                    {item.singulier_tourangeau} {item.tourangeau}
                  </div>
                )}
                {item.pluriel_tourangeau === "" ? (
                  <div className="CelluleSingulierPlurielDictionnaire" />
                ) : (
                  <div className="CelluleSingulierPlurielDictionnaire">
                    {item.pluriel_tourangeau}
                  </div>
                )}
              </div>
            ) : (
              <div className="SousLigneDictionnaire2">
                <div className="CelluleDrapeauDictionnaire">
                  <img
                    src="/images/drapeau_france.png"
                    alt="Drapeau"
                    className="ImageDrapeauDictionnaire"
                  />
                </div>
                <div className="CelluleMotDictionnaire">{item.français}</div>
                <div className="CelluleDetailDictionnaire">
                  type : {item.type_français}
                </div>
                {item.genre_français === "" ? (
                  <div className="CelluleDetailDictionnaire" />
                ) : (
                  <div className="CelluleDetailDictionnaire">
                    genre : {item.genre_français}
                  </div>
                )}
                {item.singulier_français === "" ? (
                  <div className="CelluleSingulierPlurielDictionnaire" />
                ) : (
                  <div className="CelluleSingulierPlurielDictionnaire">
                    {item.singulier_français} {item.français}
                  </div>
                )}
                {item.pluriel_français === "" ? (
                  <div className="CelluleSingulierPlurielDictionnaire" />
                ) : (
                  <div className="CelluleSingulierPlurielDictionnaire">
                    {item.pluriel_français}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dictionnaire;
