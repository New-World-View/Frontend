import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Btn } from "../../ui/Btn";

export const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1500, once: true });
  }, []);

  return (
    <section className="hero">
      <div className="container">
        <div className="hero__wrapper">
          <h2 data-aos="fade-down">Education center</h2>
          <h1 data-aos="fade-up">
            Измени свое будущее с <br />
            New World View
          </h1>
          <h3 data-aos="zoom-in">
            By <span>N W V</span> | Feb 5, 2025
          </h3>
          <p data-aos="fade-left">
            Курсы по IT и английскому языку для успешной карьеры,
            профессионального развития и комфортной жизни в динамично
            развивающемся мире технологий и международного общения.
          </p>
          <div data-aos="zoom-in">
            <Btn text="Подробнее" />
          </div>
        </div>
      </div>
    </section>
  );
};
