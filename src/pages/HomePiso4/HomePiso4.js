import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import { homeObjOne } from "./Data";
import OdooVideo from "../../components/WelcomeVideo/WelcomeVideo";
import "../../components/WelcomeVideo/WelcomeVideo.css";

function HomePiso4() {
  return (
    <>
      <OdooVideo />
      <HeroSection {...homeObjOne} />
    </>
  );
}

export default HomePiso4;
