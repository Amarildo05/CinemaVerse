import useFetch from "../../../hooks/useFetch";
import MovieCard from "../movieCart/MovieCart";
import "./MovieList.css";

export default function MovieList() {
  const { data: movies, loading, error } = useFetch();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Something went wrong...</p>;
  }

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
    </div>
  );
}