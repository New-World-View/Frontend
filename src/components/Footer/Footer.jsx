import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Btn } from "../../ui/Btn";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineTikTok } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import HeaderItem from "../Header/HeaderItem";

export const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <footer>
      <div className="container">
        <div className="footer__head" data-aos="fade-up">
          <h2>N W V</h2>
          <ul>
            <HeaderItem link="/" text={"Главная"} />
            <HeaderItem link="/courses" text={"Курсы"} />
            <HeaderItem link="/about" text={"О нас"} />
            <HeaderItem link="/contacts" text={"Контакты"} />
          </ul>
        </div>
        <div className="footer__body" data-aos="fade-up" data-aos-delay="200">
          <h2>Если у вас есть вопросы, то можете связаться с нами!</h2>
          <form>
            <input
              type="tel"
              inputMode="numeric"
              pattern="[0-9]*"
              placeholder="Тел. номер"
            />
            <Btn text="Отправить" />
          </form>
        </div>
        <div className="footer__foot">
          <h2>
            Курманжан Датка 547 <br /> © Copylight 2025 New World View
          </h2>

          <ul className="flex space-x-4">
            <li>
              <a
                href="https://t.me/nwv_education"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTelegramPlane className="text-blue-500 text-2xl" />
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/+996555102001"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsWhatsapp className="text-green-500 text-2xl" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/nwv.education/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-pink-500 text-2xl" />
              </a>
            </li>
            <li>
              <a
                href="https://www.tiktok.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineTikTok className="text-black text-2xl" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
