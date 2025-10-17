import React from "react";
import All from "../../homeBody/all/All";
import Beauty from "../../homeBody/Beauty";
import Cafe from "../../homeBody/Cafe";
import Electronics from "../../homeBody/Electronics";
import Fashion from "../../homeBody/Fashion";
import Fresh from "../../homeBody/Fresh";
import Home from "../../homeBody/Home";
import Mobile from "../../homeBody/Mobile";
import Toys from "../../homeBody/Toys";

const ProductPage = ({ category }) => {
  console.log(category);

  return (
    <div>
      {category === "all" && <All />}
      {category === "Beauty" && <Beauty />}
      {category === "Cafe" && <Cafe />}
      {category === "Electronics" && <Electronics />}
      {category === "Fashion" && <Fashion />}
      {category === "Fresh" && <Fresh />}
      {category === "Home" && <Home />}
      {category === "Mobile" && <Mobile />}
      {category === "Toys" && <Toys />}
    </div>
  );
};

export default ProductPage;
