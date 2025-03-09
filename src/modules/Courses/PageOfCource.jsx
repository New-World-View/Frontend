import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useParams } from "react-router-dom";
import api from "../../utils/axiosInstance";
import { Btn } from "../../ui/Btn";
import { SectionTitle } from "../../ui/SectionTitle";
import { PageOfCourceItem } from "./PageOfCourceItem";
import { TeachersCard } from "../../components/TeachersCard";
import Photo from "../../assets/images/Social 02.png";
import { Footer } from "../../components/Footer/Footer";

export const PageOfCource = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    setLoading(true);
    api
      .get(`/cources/${id}/`)
      .then((res) => {
        console.log(res.data);
        setCourse(res.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p data-aos="fade-in">Loading...</p>;
  }

  if (error) {
    return <p data-aos="fade-in">Error: {error}</p>;
  }

  return (
    <>
      <section className="page__of-courses" data-aos="fade-up">
        <div className="container">
          <div className="page__of-courses-hero" data-aos="zoom-in">
            <div className="page__of-courses-hero-content" data-aos="fade-right">
              <h2>{course.name_coursec}</h2>
              <p>{course.suptitle}</p>
              <Btn text="Записаться" />
            </div>
            <img src={course.image} alt={course.name_coursec} />
          </div>

          <div className="page__of-courses-info" data-aos="fade-left">
            <SectionTitle title="Информация о курсе" />
            <ul>
              {course.info_course.map((info) => (
                <PageOfCourceItem
                  key={info.id}
                  title={info.title}
                  suptitle={info.suptitle}
                  data-aos="fade-up"
                />
              ))}
            </ul>
          </div>

          <div className="page__of-courses-teachers" data-aos="fade-right">
            <SectionTitle title="Преподаватели" />
            <ul>
              {course.teachers.map((teacher) => (
                <TeachersCard
                  key={teacher.id}
                  img={teacher.image}
                  fullName={teacher.username}
                  subject={teacher.profession}
                  description={teacher.description}
                  data-aos="flip-left"
                />
              ))}
            </ul>
          </div>

          <div className="page__of-courses-questions" data-aos="fade-up">
            <div className="page__of-courses-questions-content">
              <h3>Если у вас остались вопросы, можете связаться с нами!</h3>
              <h4>
                Приходите к нам! Удобное расположение, комфортная атмосфера и
                дружелюбный коллектив – ждем вас по адресу!
              </h4>
              <h4>
                Курманжан Датка 547 <br />
                Ориентир: напротив Business House Osh
              </h4>
              <Btn text="+996 555 10 20 01" />
            </div>
            <img src={Photo} alt="Photo" data-aos="zoom-in" />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
