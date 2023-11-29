import React from "react";

import CardComp1 from "../components/Card/CardComp1";
import CardCompBasic from "../components/Card/CardCompBasic";

const Cards = () => {
  return (
    <>
      <section style={{ margin: "150px 450px" }}>
        <CardComp1 />
        <CardCompBasic />
      </section>
    </>
  );
};

export default Cards;
