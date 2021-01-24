import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import { homeObjOne, homeObjTwo } from "./Data";

function Planta() {
  return (
    <>
      <HeroSection {...homeObjTwo} />
      <HeroSection {...homeObjOne} />
    </>
  );
}

export default Planta;
