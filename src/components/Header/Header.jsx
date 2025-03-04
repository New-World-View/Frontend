import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HeaderItem from "../Header/HeaderItem";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <header data-aos="fade-down">
      <div className="container">
        <div className="header_wrapper">
          <NavLink to="/">
            <h2>NWV</h2>
          </NavLink>

          <div 
            className={`burger ${isMobileMenuOpen ? "open" : ""}`} 
            onClick={toggleMobileMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          <nav className={`header_nav ${isMobileMenuOpen ? "active" : ""}`}>
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
