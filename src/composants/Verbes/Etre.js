import React from "react";
import VerbeTemplate from "./VerbeTemplate";

const Etre = () => {
  const verbe_tourangeau = [
    "jĕ seug",
    "t'es",
    "il/alĕ est",
    "jĕs soumĕs/soms",
    "vos sedzĕs",
    "is/as sont",
  ];
  const verbe_français = [
    "je suis",
    "tu es",
    "il/elle est",
    "nous sommes",
    "vous êtes",
    "ils/elles sont",
  ];
  const nom_verbe = "ETĔR";
  const description = "= être (du latin ESSERE)";

  return (
    <VerbeTemplate
      verbe_tourangeau={verbe_tourangeau}
      verbe_français={verbe_français}
      nom_verbe={nom_verbe}
      description={description}
    />
  );
};

export default Etre;
