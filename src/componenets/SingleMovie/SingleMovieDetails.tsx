import { SingleMovieType } from "../../types";

type SingleMovieDetailsProps = {
  movie: SingleMovieType | null; // Expect a SingleMovieType object
};

export default function SingleMovieDetails({ movie }: SingleMovieDetailsProps) {
  if (!movie) {
    return <div>No movie details available.</div>; // Handle case where movie is null
  }
  
  return (
    <div>
      <h1>{movie.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
        alt={movie.title}
      />
      <p>{movie.overview}</p>
      <p>
        <strong>Release Date:</strong> {movie.release_date}
      </p>
      <p>
        <strong>Status:</strong> {movie.status}
      </p>
      <p>
        <strong>Runtime:</strong> {movie.runtime} minutes
      </p>
      <p>
        <strong>Tagline:</strong> {movie.tagline}
      </p>
      <p>
        <strong>Genres:</strong>{" "}
        {movie.genres.map((genre) => genre.name).join(", ")}
      </p>
    </div>
  );
}