import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../utils/axiosInstance";
import { Btn } from "../../ui/Btn";
import { SectionTitle } from "../../ui/SectionTitle";
import { PageOfCourceItem } from "./PageOfCourceItem";
import { TeachersCard } from "../../components/TeachersCard";
import Photo from "../../assets/images/Social 02.png"
import { Footer } from "../../components/Footer/Footer";

export const PageOfCource = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
   <>
    <section className="page__of-courses">
      <div className="container">
        {/* Course Hero Section */}
        <div className="page__of-courses-hero">
          <div className="page__of-courses-hero-content">
            <h2>{course.name_coursec}</h2>
            <p>{course.suptitle}</p>
            <Btn text="Записаться" />
          </div>
          <img src={course.image} alt={course.name_coursec} />
        </div>

        <div className="page__of-courses-info">
          <SectionTitle title="Информация о курсе" />
          <ul>
            {course.info_course.map((info) => (
              <PageOfCourceItem
                key={info.id}
                title={info.title}
                suptitle={info.suptitle}
              />
            ))}
          </ul>
        </div>

        <div className="page__of-courses-teachers">
          <SectionTitle title="Преподаватели" />
          <ul>
            {course.teachers.map((teacher) => (
              <TeachersCard
                key={teacher.id}
                img={teacher.image}
                fullName={teacher.username}
                subject={teacher.profession}
                description={teacher.description}
              />
            ))}
          </ul>
        </div>

        <div className="page__of-courses-questions">
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

            <Btn text="+996 505 00 44 11" />
          </div>
          <img src={Photo} alt="Photo" />
        </div>
      </div>
    </section>
    <Footer/>
   </>
  );
};
