import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Favorite from "../../../assets/icons/Favorite.svg";
import { AdvantagesItem } from "./AdvantagesItem";
import { SectionTitle } from "../../../ui/SectionTitle";
import { CardActionArea } from "@mui/material";

export const Advantages = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="advantages">
      <div className="container">
        <div className="advantages__head" data-aos="fade-down">
          <SectionTitle title="Наши преимущества" />
          <CardActionArea className="advantages__head-arhive">Архив</CardActionArea>
        </div>
        <ul className="advantages__wrapper">
          <AdvantagesItem
            icon={Favorite}
            title="Современные методики"
            suptitle="Мы предлагаем современные образовательные программы, разработанные экспертами в своей сфере. Наши методики обучения сочетают теорию и практику."
          />
          <AdvantagesItem
            icon={Favorite}
            title="Качественные материалы"
            suptitle="Наши материалы соответствуют современным стандартам образования и регулярно обновляются, чтобы быть актуальными."
          />
          <AdvantagesItem
            icon={Favorite}
            title="Опытные преподаватели"
            suptitle="Наши преподаватели — это профессионалы, которые помогают студентам осваивать новые знания быстро и эффективно."
          />
          <AdvantagesItem
            icon={Favorite}
            title="Практические занятия"
            suptitle="Практика — ключ к успеху! Мы предоставляем реальные кейсы и задачи для закрепления знаний."
          />
        </ul>
      </div>
    </section>
  );
};
