import { PlayCircleOutlined } from "@ant-design/icons";
import { SingleMovieType } from "../../types";
import "./SingleMovieDetails.css";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

type SingleMovieDetailsProps = {
  movie: SingleMovieType | null;
};

export default function SingleMovieDetails({ movie }: SingleMovieDetailsProps) {
  const themeContext = useContext(GlobalContext);

  if (!movie) {
    return <div>No movie details available.</div>; // Handle case where movie is null
  }

  return (
    <div
      style={{
        color: themeContext.theme === "dark" ? "whitesmoke" : "black",
      }}
      className="movie-details"
    >
      <div className="movie-info">
        <h1>{movie.title}</h1>
        <p className="tagline">
          <em>" {movie.tagline} "</em>
        </p>
        <p>{movie.overview}</p>

        <div className="movie-meta">
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
            <strong>Genres:</strong>{" "}
            {movie.genres.map((genre) => genre.name).join(", ")}
          </p>
        </div>

        <button className="trailer-button">
          <PlayCircleOutlined /> Trailer
        </button>
      </div>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
        alt={movie.title}
        className="movie-image"
      />
    </div>
  );
}
