import React from "react";
import VerbeTemplate from "./VerbeTemplate";

const Devoir = () => {
  const verbe_tourangeau = [
    "jĕ dog",
    "tu dos",
    "i/a dot",
    "jĕs devoms",
    "vos devedzĕs",
    "is/as devont",
  ];
  const verbe_français = [
    "je dois",
    "tu dois",
    "il/elle doit",
    "nous devons",
    "vous devez",
    "ils/elles doivent",
  ];
  const nom_verbe = "DĔOUERĔ";
  const description = "= devoir (du latin DEBERE)";

  return (
    <VerbeTemplate
      verbe_tourangeau={verbe_tourangeau}
      verbe_français={verbe_français}
      nom_verbe={nom_verbe}
      description={description}
    />
  );
};

export default Devoir;
