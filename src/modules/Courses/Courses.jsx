import React from "react";
import { CoursesHero } from "./CoursesHero";
import { CoursesCard } from "./CoursesCard/CoursesCard";
import { Footer } from "../../components/Footer/Footer";

export const Courses = () => {
  return (
    <>
      <CoursesHero />
      <CoursesCard />
      <Footer/>
    </>
  );
};
