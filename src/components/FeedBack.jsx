import React, { useEffect, useState } from "react";
import { Btn } from "../ui/Btn";
import FeedBackImg from "../assets/images/feedback.png";
import AOS from "aos";
import "aos/dist/aos.css";
import api from "../utils/axiosInstance";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const FeedBack = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    console.log("Yuborilayotgan ma'lumot:", { username: name, message });

    api
      .post(
        `/reviews-create/`,
        { username: name, message },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log("API javobi:", response.data);
        if (response.status === 201) {
          toast.success(" Отзыв успешно отправлен!");
          setName("");
          setMessage("");
        } else {
          toast.error("Ошибка при отправке отзыва.");
        }
      })
      .catch((err) => {
        console.log("Xatolik:", err.response ? err.response.data : err.message);
        toast.error(" Ошибка сети, попробуйте позже.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section className="feedback" data-aos="fade-up">
      <div className="container">
        <div className="feedback__wrapper">
          <form onSubmit={handleSubmit} data-aos="fade-right">
            <h2>Оставьте свой отзыв, мы будем рады прочитать!</h2>
            <textarea
              placeholder="Ваше сообщение"
              rows="4"
              cols="50"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <div className="send">
              <input
                type="text"
                placeholder="Ваше имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <Btn
                text={loading ? "Отправка..." : "Отправить"}
                disabled={loading}
                type="submit"
              />
            </div>
          </form>

          <img src={FeedBackImg} alt="FeedBackImg" data-aos="fade-left" />
        </div>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </section>
  );
};
