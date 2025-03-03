import React, { useEffect, useState } from "react";
import { TeachersCard } from "../../components/TeachersCard";
import api from "../../utils/axiosInstance";
import { PaginationComponent } from "../../components/PaginationComponent";
import Loading from "../../assets/images/Loading.svg";

export const AboutTeam = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalCount, setTotalCount] = useState(0);
  const [page, setPage] = useState(1);
  const pageSize = 3;

  useEffect(() => {
    setLoading(true);
    api
      .get(`/team/?page=${page}`)
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
  }, [page]);

  return (
    <section className="about__team">
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
            data.map((teacher) => (
              <TeachersCard
                key={teacher.id}
                img={teacher.image}
                fullName={teacher.username}
                subject={teacher.profession}
                description={teacher.description}
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
        />
      </div>
    </section>
  );
};
