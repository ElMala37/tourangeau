import React from "react";
import VerbeTemplate from "./VerbeTemplate";

const Croire = () => {
  const verbe_tourangeau = [
    "jĕ cog",
    "tu cos",
    "i/a cot",
    "jĕs querzoms",
    "vos querzedzĕs",
    "is/as querzont",
  ];
  const verbe_français = [
    "je crois",
    "tu crois",
    "il/elle croit",
    "nous croyons",
    "vous croyez",
    "ils/elles croivent",
  ];
  const nom_verbe = "CRERRĔ";
  const description = "= croire (du latin CREDERE)";

  return (
    <VerbeTemplate
      verbe_tourangeau={verbe_tourangeau}
      verbe_français={verbe_français}
      nom_verbe={nom_verbe}
      description={description}
    />
  );
};

export default Croire;
