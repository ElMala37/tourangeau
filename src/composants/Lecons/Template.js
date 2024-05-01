import React, { useState } from "react";
import "../../styles/Conversation/GeneralConv.css";
import { useNavigate } from "react-router";
import Acceuil from "../Accueil";

const TemplateLecon = () => {
  const [ouvert, setOuvert] = useState(true);
  return (
    <div className="Fond">
      <Acceuil ouvert={ouvert} setOuvert={setOuvert} />
      </div>
  );
};

export default TemplateLecon;
