import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { CoursesCardItem } from "./CoursesCardItem";
import Loading from "../../../assets/images/Loading.svg";
import api from "../../../utils/axiosInstance";

export const CoursesCard = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    api
      .get("/cources/")
      .then((res) => {
        console.log("API Response:", res.data);
        setData(res.data || []);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <section className="courses__card">
      <div className="container">
        <ul>
          {loading ? (
            <center>
              <img className="loading" src={Loading} alt="Loading Img" />
            </center>
          ) : error ? (
            <center>
              <p>Error: {error}</p>
            </center>
          ) : data.length > 0 ? (
            data.map((cours, index) => (
              <CoursesCardItem
                key={cours.id}
                id={cours.id}
                img={cours.image}
                title={cours.title}
                price={cours.price}
                delay={index * 100}
              />
            ))
          ) : (
            <center>
              <p>No courses found.</p>
            </center>
          )}
        </ul>
      </div>
    </section>
  );
};
