import React from "react";
import VerbeTemplate from "./VerbeTemplate";

const Avoir = () => {
  const verbe_tourangeau = [
    "j'hag","t'hoas","il/alĕ hoat","j'havoms/haoms","v'havedzĕs","is/as haont"
  ];
  const verbe_français = [
    "j'ai",
    "tu as",
    "il/elle a",
    "nous avons",
    "vous avez",
    "ils/elles ont",
  ];
  const nom_verbe = "HAVOUERĔ";
  const description = "= avoir (du latin HABERE)";

  return (
    <VerbeTemplate
      verbe_tourangeau={verbe_tourangeau}
      verbe_français={verbe_français}
      nom_verbe={nom_verbe}
      description={description}
    />
  );
};

export default Avoir;
