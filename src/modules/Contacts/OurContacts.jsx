import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { SectionTitle } from "../../ui/SectionTitle";
import { OurContactsItem } from "./OurContactsItem";
import { FaInstagram } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";

export const OurContacts = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="our__contacts">
      <div className="container">
        <SectionTitle title="Наши контакты" />
        <ul className="our__contacts-wrapper">
          <OurContactsItem
            icon={<FaInstagram />}
            title="nwv.education"
            suptitle="Мы предлагаем современные образовательные программы, разработанные экспертами в своей сфере. Наши методики обучения сочетают теорию и практику."
            aosAnimation="fade-up"
          />

          <OurContactsItem
            icon={<IoCallOutline />}
            title="+996 555 102 001"
            suptitle="Мы предлагаем современные образовательные программы, разработанные экспертами в своей сфере. Наши методики обучения сочетают теорию и практику."
            aosAnimation="fade-up"
            aosDelay="100"
          />

          <OurContactsItem
            icon={<FaInstagram />}
            title="Курманжан Датка 547"
            suptitle="Мы предлагаем современные образовательные программы, разработанные экспертами в своей сфере. Наши методики обучения сочетают теорию и практику."
            aosAnimation="fade-up"
            aosDelay="200"
          />

          <OurContactsItem
            icon={<FaInstagram />}
            title="nwv.education070@gmail.com"
            suptitle="Мы предлагаем современные образовательные программы, разработанные экспертами в своей сфере. Наши методики обучения сочетают теорию и практику."
            aosAnimation="fade-up"
            aosDelay="300"
          />
        </ul>
      </div>
    </section>
  );
};
