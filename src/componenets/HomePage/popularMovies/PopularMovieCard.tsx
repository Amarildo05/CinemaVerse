import useMovieNavigation from "../../../hooks/useMovieNavigation";
import { PopularMoviesType } from "../../../types";

interface PopularMovieCardProps {
  movie: PopularMoviesType;
}

export default function PopularMovieCard({ movie }: PopularMovieCardProps) {
  const handleNavigateClick = useMovieNavigation(movie.id);
  return (
    <div onClick={handleNavigateClick} className="movie-slide">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="movie-poster"
      />
    </div>
  );
}