import { Pagination } from "antd";
import useFetch from "../../../hooks/useFetch";
import Error from "../../common/Error";
import Loading from "../../common/Loading";
import MovieCard from "../movieCart/MovieCart";
import "./MovieList.css";
import { useState } from "react";

export default function MovieList() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { data: movies, loading, error } = useFetch(currentPage);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="movie-card-container">
      {movies.map((movie) => {
        return (
          <MovieCard
            id={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
            key={movie.id}
          />
        );
      })}
      <Pagination
        current={currentPage}
        onChange={handlePageChange}
        showSizeChanger={false}
        total={400}
      />
    </div>
  );
}