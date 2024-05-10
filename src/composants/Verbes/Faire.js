import React from "react";
import VerbeTemplate from "./VerbeTemplate";

const Faire = () => {
  const verbe_tourangeau = [
    "jĕ fag",
    "tu foas",
    "i/a foat",
    "jĕs faizoms",
    "vos faizedzĕs",
    "is/as faont",
  ];
  const verbe_français = [
    "je fais",
    "tu fais",
    "il/elle fait",
    "nous faisons",
    "vous faites",
    "ils/elles font",
  ];
  const nom_verbe = "FAIZĔR";
  const description = "= faire (du latin FACERE)";

  return (
    <VerbeTemplate
      verbe_tourangeau={verbe_tourangeau}
      verbe_français={verbe_français}
      nom_verbe={nom_verbe}
      description={description}
    />
  );
};

export default Faire;
