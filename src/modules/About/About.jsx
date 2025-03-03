import React from "react";
import { AboutHero } from "./AboutHero";
import { Footer } from "../../components/Footer/Footer";
import { AboutTeam } from "./AboutTeam";
import { StudentReviews } from "../../components/Reviews/StudentReviews";

export default function About() {
  return (
    <>
      <AboutHero />
      <AboutTeam />
      <StudentReviews />
      <Footer />
    </>
  );
}
