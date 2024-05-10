import React from "react";
import VerbeTemplate from "./VerbeTemplate";

const Savoir = () => {
  const verbe_tourangeau = [
    "j'asçag",
    "t'asçoas",
    "il/alĕ asçoat",
    "j'asçavoms",
    "v'asçavedzĕs",
    "is/as asçavont",
  ];
  const verbe_français = [
    "je sais",
    "tu sais",
    "il/elle sait",
    "nous savons",
    "vous savez",
    "ils/elles savent",
  ];
  const nom_verbe = "ASÇAOUERĔ";
  const description = "= savoir (du latin SAPERE/SCIRE)";

  return (
    <VerbeTemplate
      verbe_tourangeau={verbe_tourangeau}
      verbe_français={verbe_français}
      nom_verbe={nom_verbe}
      description={description}
    />
  );
};

export default Savoir;
