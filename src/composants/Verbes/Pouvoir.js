import React from "react";
import VerbeTemplate from "./VerbeTemplate";

const Pouvoir = () => {
  const verbe_tourangeau = [
    "jĕ peug",
    "tu peus",
    "i/a peut",
    "jĕs poyoms",
    "vos poyedzĕs",
    "is/as poyont",
  ];
  const verbe_français = [
    "je peux",
    "tu peux",
    "il/elle peut",
    "nous pouvons",
    "vous pouvez",
    "ils/elles peuvent",
  ];
  const nom_verbe = "POYEIRĔ";
  const description = "= pouvoir (du latin POTERE)";

  return (
    <VerbeTemplate
      verbe_tourangeau={verbe_tourangeau}
      verbe_français={verbe_français}
      nom_verbe={nom_verbe}
      description={description}
    />
  );
};

export default Pouvoir;
