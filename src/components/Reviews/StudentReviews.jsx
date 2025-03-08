import React, { useEffect, useState } from "react";
import { SectionTitle } from "../../ui/SectionTitle";
import api from "../../utils/axiosInstance";
import { PaginationComponent } from "../../components/PaginationComponent";
import Loading from "../../assets/images/Loading.svg";
import { ReviewCard } from "./ReviewCard";

export const StudentReviews = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalCount, setTotalCount] = useState(0);
  const [page, setPage] = useState(1);
  const pageSize = 3;

  useEffect(() => {
    setLoading(true);
    api
      .get(`/reviews/?page=${page}`)
      .then((res) => {
        console.log("API Response:", res.data.results);
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
    <section className="reviews">
      <div className="container">
        <SectionTitle title="Отзывы студентов" />

        {loading ? (
          <center>
            <img className="loading" src={Loading} alt="Loading Img" />
          </center>
        ) : error ? (
          <center>
            <p>Error: {error}</p>
          </center>
        ) : data.length > 0 ? (
          <ul>
            {data.map((review) => (
              <ReviewCard
                key={review.id}
                studantName={review.username}
                message={review.message}
              />
            ))}
          </ul>
        ) : (
          <center>
            <p>No reviews found.</p>
          </center>
        )}

        <div className="about__pagination">
          <PaginationComponent
            page={page}
            setPage={setPage}
            totalCount={totalCount}
            pageSize={pageSize}
          />
        </div>
      </div>
    </section>
  );
};
