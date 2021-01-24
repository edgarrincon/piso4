import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import { homeObjOne, homeObjTwo } from "./Data";

function Piso3() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjTwo} />
    </>
  );
}

export default Piso3;
