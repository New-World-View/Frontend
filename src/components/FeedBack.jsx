import React, { useEffect } from "react";
import { Btn } from "../ui/Btn";
import FeedBackImg from "../assets/images/feedback.png";
import AOS from "aos";
import "aos/dist/aos.css"; 

export const FeedBack = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="feedback" data-aos="fade-up">
      <div className="container">
        <div className="feedback__wrapper">
          <form data-aos="fade-right">
            <h2>Оставьте свой отзыв, мы будем рады прочитать!</h2>
            <textarea placeholder="Ваше сообщение" rows="4" cols="50" />
            <div className="send">
              <input type="text" placeholder="Ваше имя" />
              <Btn text="Отправить" />
            </div>
          </form>

          <img src={FeedBackImg} alt="FeedBackImg" data-aos="fade-left" />
        </div>
      </div>
    </section>
  );
};
