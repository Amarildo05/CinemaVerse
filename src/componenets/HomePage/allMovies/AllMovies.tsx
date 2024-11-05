import { Pagination } from "antd";
import Error from "../../common/errors/Error";
import CardsLoading from "../../common/cardsLoading/CardsLoading";
import MovieCard from "../movieCart/MovieCart";
import "./AllMovies.css";
import { useContext, useState } from "react";
import useAllMoviesFetch from "../../../hooks/movies-data-hooks/useAllMoviesFetch";
import { GlobalContext } from "../../../context/GlobalContext";

export default function AllMovies() {
  const themeContext = useContext(GlobalContext);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const {
    allMoviesData: allMovies,
    loading,
    error,
  } = useAllMoviesFetch(currentPage);

  if (loading) {
    return <CardsLoading />;
  }

  if (error) {
    return <Error />;
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div className="movie-card-container">
        {allMovies.map((movie) => {
          return (
            <MovieCard
              id={movie.id}
              poster_path={movie.poster_path}
              title={movie.title}
              genre_ids={movie.genre_ids}
              overview={movie.overview}
              vote_average={movie.vote_average}
              key={movie.id}
            />
          );
        })}
      </div>
      <div className={`pagination ${themeContext.theme}`}>
        <Pagination
          current={currentPage}
          onChange={handlePageChange}
          showSizeChanger={false}
          total={3200}
        />
      </div>
    </>
  );
}