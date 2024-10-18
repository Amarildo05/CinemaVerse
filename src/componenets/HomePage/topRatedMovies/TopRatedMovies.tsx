import useTopRatedMoviesFetch from "../../../hooks/movies-data-hooks/useTopRatedMoviesFetch";
import Error from "../../common/Error";
import Loading from "../../common/Loading";
import MovieCard from "../movieCart/MovieCart";

export default function TopRatedMovies() {
  const {
    topRatedMoviesData: topRatedMovies,
    loading,
    error,
  } = useTopRatedMoviesFetch();

  if (loading) {
    return <Loading />;
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