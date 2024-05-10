import React from "react";
import VerbeTemplate from "./VerbeTemplate";

const SeLever = () => {
  const verbe_tourangeau = [
    "jĕ me ghlĕvĕ",
    "tu te ghlĕvĕs",
    "i/a se ghlĕvĕt",
    "jĕs nos ghlevoms",
    "vos vos  ghlevedzĕs",
    "is/as ghleus ghlevont",
  ];
  const verbe_français = [
    "je me lève",
    "tu te lèves",
    "il/elle se lève",
    "nous nous levons",
    "vous vous levez",
    "ils/elles se lèvent",
  ];
  const nom_verbe = "SE GHLEVAIR";
  const description = "= se lever (du latin SE LEVARE)";

  return (
    <VerbeTemplate
      verbe_tourangeau={verbe_tourangeau}
      verbe_français={verbe_français}
      nom_verbe={nom_verbe}
      description={description}
    />
  );
};

export default SeLever;
