import { Hero } from "./Hero";
import { Advantages } from "./Advantages/Advantages";
import { Map } from "../../components/Map";
import { AfewOfUs } from "./AfewOfUs";
import { Footer } from "../../components/Footer/Footer";

export const Home = () => {
  return (
    <>
      <Hero />
      <Advantages />
      <Map />
      <AfewOfUs />
      <Footer />
    </>
  );
};
