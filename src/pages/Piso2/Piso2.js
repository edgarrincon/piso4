import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import { homeObjOne, homeObjTwo } from "./Data";

function Piso2() {
  return (
    <>
      <HeroSection {...homeObjTwo} />
      <HeroSection {...homeObjOne} />
    </>
  );
}

export default Piso2;
