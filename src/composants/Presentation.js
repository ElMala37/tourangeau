import React, { useState } from "react";
import Acceuil from "./Accueil";
import "../styles/Presentation.css";

const Presentation = () => {
  const [ouvert, setOuvert] = useState(true);
  const [tiltX, setTiltX] = useState(0);
  const [tiltY, setTiltY] = useState(0);

  // Fonction pour gérer le mouvement de la souris
  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const imageContainer = event.target.getBoundingClientRect();

    // Calculer l'angle d'inclinaison en fonction de la position de la souris
    const mouseX = clientX - imageContainer.left - imageContainer.width / 2;
    const mouseY = clientY - imageContainer.top - imageContainer.height / 2;

    const newTiltX = (mouseY / (imageContainer.height / 2)) * 10;
    const newTiltY = -(mouseX / (imageContainer.width / 2)) * 10;

    setTiltX(newTiltX);
    setTiltY(newTiltY);
  };

  // Réinitialiser l'inclinaison lorsque la souris quitte l'image
  const handleMouseLeave = () => {
    setTiltX(0);
    setTiltY(0);
  };

  return (
    <div className="Fond">
      <Acceuil ouvert={ouvert} setOuvert={setOuvert} />
      <div className="Introduction">
        <div
          className="EspaceTexteIntroduction"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src="images/carte_touraine_1.png"
            alt="CarteTouraine1"
            style={{
              transform: ouvert
                ? `perspective(1000px) rotateX(${tiltX * 2}deg) rotateY(${
                    tiltY * 2
                  }deg)`
                : "none",
              transition: "transform 0.5s ease",
            }}
            className="CarteTouraine1"
          />
        </div>
        <div className="EspaceTexteIntroduction">
          <div className="ChevrePresentation">
            <div className="BulleQuestionPresentation">
              <p className="PresentationBulle">Bienvenue !</p>
            </div>
            <img
              src="/images/chevre.png"
              alt="mascotteChevre"
              className="LogoPresentation"
            />
          </div>
          <div className="FondTexteIntroduction">
            <p className="TexteIntroduction">
              La Touraine est une région située dans le centre de la France.
              Cette région possède sa propre langue, le tourangeau. Le
              tourangeau est une langue latine et fait partie des langues d'oïl.
            </p>
            <p className="TexteIntroduction">
              Ce site, qui a été conçu avec l'aide de{" "}
              <a href="https://www.gnto.org/" className="lienSite">
                l'Académie de la langue tourangelle
              </a>
              , est dédié à l'apprentissage de la langue tourangelle.
            </p>
            <p className="TexteIntroduction">Vous pouvez contacter
              le créateur du site sur Instagram : @informatique_du_terroir</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
