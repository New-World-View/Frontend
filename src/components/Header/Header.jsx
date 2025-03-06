import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import HeaderItem from "../Header/HeaderItem";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".header_wrapper")) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const toggleMobileMenu = (event) => {
    event.stopPropagation();
    setMobileMenuOpen((prev) => !prev);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <header data-aos="fade-down">
      <div className="container">
        <div className="header_wrapper">
          <NavLink to="/">
            <h2 onClick={scrollToTop}>NWV</h2>
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
