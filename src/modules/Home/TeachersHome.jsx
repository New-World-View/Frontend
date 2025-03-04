import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { TeachersCard } from "../../components/TeachersCard";
import { SectionTitle } from "../../ui/SectionTitle";
import api from "../../utils/axiosInstance";
import { PaginationComponent } from "../../components/PaginationComponent";
import Loading from "../../assets/images/Loading.svg";

export const TeachersHome = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalCount, setTotalCount] = useState(0);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(3);  

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 870) {
        setPageSize(3); 
      } else {
        setPageSize(4);  
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setLoading(true);
    api
      .get(`/teachers/?page=${page}&page_size=${pageSize}`)  
      .then((res) => {
        console.log("API Response:", res.data);
        setData(res.data.results);
        setTotalCount(res.data.count);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [page, pageSize]);  

  return (
    <section className="teachers__home" data-aos="fade-up">
      <div className="container">
        <SectionTitle title="Учителя" data-aos="fade-right" />
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
            data.map((teacher) => (
              <TeachersCard
                key={teacher.id}
                img={teacher.image}
                fullName={teacher.username}
                subject={teacher.profession}
                description={teacher.description}
                data-aos="zoom-in"
              />
            ))
          ) : (
            <center>
              <p>No teachers found.</p>
            </center>
          )}
        </ul>
        <PaginationComponent
          page={page}
          setPage={setPage}
          totalCount={totalCount}
          pageSize={pageSize}
          data-aos="fade-up"
        />
      </div>
    </section>
  );
};
