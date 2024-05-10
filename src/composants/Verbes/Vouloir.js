import React from "react";
import VerbeTemplate from "./VerbeTemplate";

const Vouloir = () => {
  const verbe_tourangeau = [
    "jĕ veughl",
    "tu veus",
    "i/a veut",
    "jĕs veuloms",
    "vos veuledzĕs",
    "is/as veulont",
  ];
  const verbe_français = [
    "je veux",
    "tu veux",
    "il/elle veut",
    "nous voulons",
    "vous voulez",
    "ils/elles veulent",
  ];
  const nom_verbe = "VEULOUERĔ";
  const description = "= vouloir (du latin VOLERE)";

  return (
    <VerbeTemplate
      verbe_tourangeau={verbe_tourangeau}
      verbe_français={verbe_français}
      nom_verbe={nom_verbe}
      description={description}
    />
  );
};

export default Vouloir;
