import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import { homeObjOne, homeObjTwo } from "./Data";
import WelcomeVideo from "../../components/WelcomeVideo/WelcomeVideo";
import "../../components/WelcomeVideo/WelcomeVideo.css";

function HomePiso4() {
  return (
    <>
      <WelcomeVideo />
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjTwo} />
    </>
  );
}

export default HomePiso4;
