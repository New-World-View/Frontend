import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; 
import HeaderItem from "../Header/HeaderItem";
import { NavLink } from "react-router-dom";

export default function Header() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true }); 
  }, []);

  return (
    <header data-aos="fade-down">
      <div className="container">
        <div className="header_wrapper">
          <NavLink to="/">
            <h2>NWV</h2>
          </NavLink>
          <nav className="header_nav">
            <ul className="header_list">
              <HeaderItem link="/" text={"Главная"} />
              <HeaderItem link="/courses" text={"Курсы"} />
              <HeaderItem link="/about" text={"О нас"} />
              <HeaderItem link="/contacts" text={"Контакты"} />
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
