import { Hero } from "./Hero";
import { Advantages } from "./Advantages/Advantages";
import { Map } from "../../components/Map";
import { AfewOfUs } from "./AfewOfUs";
import { Footer } from "../../components/Footer/Footer";
import { TeachersHome } from "./TeachersHome";

export const Home = () => {
  return (
    <>
      <Hero />
      <Advantages />
      <Map />
      <TeachersHome/>
      <AfewOfUs />
      <Footer />
    </>
  );
};
