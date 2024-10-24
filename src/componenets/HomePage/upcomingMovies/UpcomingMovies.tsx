import useUpcomingMoviesFetch from "../../../hooks/movies-data-hooks/useUpcomingMoviesFetch";
import Error from "../../common/errors/Error";
import CardsLoading from "../../common/cardsLoading/CardsLoading";
import MovieCard from "../movieCart/MovieCart";

export default function UpcomingMovies() {
  const {
    upcomingMoviesData: topRatedMovies,
    loading,
    error,
  } = useUpcomingMoviesFetch();

  if (loading) {
    return <CardsLoading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <>
      <div className="movie-card-container">
        {topRatedMovies.map((movie) => {
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
    </>
  );
}