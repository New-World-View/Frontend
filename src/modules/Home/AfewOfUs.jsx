import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { SectionTitle } from "../../ui/SectionTitle";

export const AfewOfUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="afewofus">
      <div className="container">
        <div data-aos="fade-down">
          <SectionTitle title="Немного о нас" />
        </div>

        <div className="afewofus__wrapper">
          <div className="afewofus__wrapper-block" data-aos="fade-right">
            <h3>О нас</h3>
            <h2>
              Мы - сообщество IT-специалистов, объединенных общей целью -
              делиться знаниями и опытом.
            </h2>
            <p>
              Наш учебный центр предлагает широкий выбор курсов и программ
              обучения, которые помогут вам освоить самые востребованные навыки
              в сфере информационных технологий.
            </p>
          </div>
          <div className="afewofus__wrapper-block" data-aos="fade-left">
            <h3>Наша миссия</h3>
            <h2>
              Мы видим свою миссию в том, чтобы сделать IT-образование доступным
              и эффективным.
            </h2>
            <p>
              Мы постоянно обновляем наши программы обучения, чтобы они
              соответствовали последним тенденциям и требованиям рынка. Наша
              задача - выпустить квалифицированных IT-специалистов, которые
              будут востребованы на рынке труда.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
