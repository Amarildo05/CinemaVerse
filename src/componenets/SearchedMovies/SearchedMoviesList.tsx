import { Empty } from "antd";
import useSearchMovieFetch from "../../hooks/movies-data-hooks/useSearchMovieFetch";
import { SearchedMoviesListProps } from "../../types";
import MovieCard from "../HomePage/movieCart/MovieCart";
import "./SearchedMoviesList.css";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import Error from "../common/errors/Error";
import CardsLoading from "../common/cardsLoading/CardsLoading";

export default function SearchedMoviesList({ query }: SearchedMoviesListProps) {
  const themeContext = useContext(GlobalContext);

  const { searchedMovieData, loading, error } = useSearchMovieFetch(query);

  if (loading) return <CardsLoading />;
  if (error) return <Error />;

  return (
    <div className="searched-movies-list">
      {searchedMovieData.length === 0 ? (
        <Empty
          className="message-container"
          description={
            <span
              style={{
                fontSize: "17px",
                color: themeContext.theme === "dark" ? "white" : "black",
              }}
            >
              No movies were found with your search: <strong>{query}</strong>
            </span>
          }
        />
      ) : (
        searchedMovieData.map((movie) => (
          <MovieCard
            id={movie.id}
            poster_path={movie.poster_path}
            title={movie.title}
            genre_ids={movie.genre_ids}
            overview={movie.overview}
            vote_average={movie.vote_average}
            key={movie.id}
          />
        ))
      )}
    </div>
  );
}