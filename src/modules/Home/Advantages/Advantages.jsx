import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Favorite from "../../../assets/icons/Favorite.svg";
import { AdvantagesItem } from "./AdvantagesItem";
import { SectionTitle } from "../../../ui/SectionTitle";
import { CardActionArea } from "@mui/material";
import api from "../../../utils/axiosInstance";
import Loading from "../../../assets/images/Loading.svg";

export const Advantages = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    api
      .get("/advantages/")
      .then((res) => {
        console.log("API Response:", res.data);
        setData(res.data || []);
      })
      .catch((error) => {
        console.error("Error fetching advantages:", error);
        setError("Не удалось загрузить данные. Попробуйте позже.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <section className="advantages">
      <div className="container">
        <SectionTitle title="Наши преимущества" />

        <ul className="advantages__wrapper">
          {loading ? (
            <center>
              <img className="loading" src={Loading} alt="Loading..." />
            </center>
          ) : error ? (
            <center>
              <p>{error}</p>
            </center>
          ) : data.length > 0 ? (
            data
              .slice(-4)
              .map((advantage) => (
                <AdvantagesItem
                  key={advantage.id}
                  icon={advantage.icon || Favorite}
                  title={advantage.title}
                  suptitle={advantage.suptitle}
                />
              ))
          ) : (
            <center>
              <p>Нет доступных преимуществ.</p>
            </center>
          )}
        </ul>
      </div>
    </section>
  );
};
