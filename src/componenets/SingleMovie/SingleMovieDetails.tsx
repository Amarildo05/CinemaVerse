import { PlayCircleOutlined } from "@ant-design/icons";
import { SingleMovieType } from "../../types";
import "./SingleMovieDetails.css";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { Rate } from "antd";

type SingleMovieDetailsProps = {
  movie: SingleMovieType | null;
};

export default function SingleMovieDetails({ movie }: SingleMovieDetailsProps) {
  const themeContext = useContext(GlobalContext);

  if (!movie) {
    return <div>No movie details available.</div>; // Handle case where movie is null
  }

  const rating = movie.vote_average / 2;

  return (
    <div className="single-movie-details">
      <div
        className="single-movie-container"
        style={{
          color: themeContext.theme === "dark" ? "whitesmoke" : "black",
        }}
      >
        <img
          src={
            movie.backdrop_path
              ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
              : "/single-movie-filler.jpg"
          }
          alt={movie.title}
          className="single-movie-image"
        />
        <div className="single-movie-info">
          <h1>{movie.title}</h1>
          <p className="tagline">
            <em>{movie.tagline}</em>
          </p>
          <p className="overview">{movie.overview}</p>

          <div className="single-movie-meta">
            <p>
              <strong>Release Date:</strong> {movie.release_date}
            </p>
            <p>
              <strong>Runtime:</strong> {movie.runtime} minutes
            </p>
            <p>
              <strong>Genre:</strong>{" "}
              {movie.genres.map((genre) => genre.name).join(" - ")}
            </p>
          </div>

          <div className="button-rate-container">
            <button className="trailer-button">
              <PlayCircleOutlined /> Trailer
            </button>
            <div className="rating-container">
              <Rate allowHalf value={rating} disabled className="rate" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}