import { PlayCircleOutlined } from "@ant-design/icons";
import { SingleMovieType } from "../../types";
import "./SingleMovieDetails.css";
import { useContext, useState } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { Modal, Rate } from "antd";
import Error from "../common/errors/Error";
import MovieReservation from "./movieReservation/MovieReservation";
import MovieCast from "./movieCredits/MovieCast";

type SingleMovieDetailsProps = {
  movie: SingleMovieType | null;
};

export default function SingleMovieDetails({ movie }: SingleMovieDetailsProps) {
  const themeContext = useContext(GlobalContext);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [trailerKey, setTrailerKey] = useState<string | null>(null);

  if (!movie) {
    return <Error />; // Handle case where movie is null
  }

  const showModal = () => {
    setTrailerKey(
      movie.videos.results.find((video) => video.type === "Trailer")?.key ||
        null
    );
    setIsModalVisible(true);
  };

  const hideModal = () => {
    setIsModalVisible(false);
    setTrailerKey(null);
  };

  // Change Release Date to European format
  const releaseDate = movie.release_date.split("-").reverse().join("-");

  // Make Rating from 0/10 to 0/5
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
              <strong>Release Date:</strong> {releaseDate}
            </p>
            <p>
              <strong>Runtime:</strong> {movie.runtime} minutes
            </p>
            <p className="genres">
              {movie.genres.map((genre) => (
                <span
                  key={genre.id}
                  className="genre-tag"
                  style={{
                    color: themeContext.theme === "dark" ? "white" : "black",
                    border: `2px solid ${
                      themeContext.theme === "dark" ? "white" : "black"
                    }`,
                  }}
                >
                  {genre.name}
                </span>
              ))}
            </p>
          </div>

          <div className="button-rate-container">
            <button className="trailer-reservation-button" onClick={showModal}>
              <PlayCircleOutlined /> Trailer
            </button>
            {isModalVisible && ( // Hide modal when is not used
              <Modal
                open={isModalVisible}
                onCancel={hideModal}
                footer={null}
                width={800}
              >
                <div style={{ paddingTop: "56.25%" }}>
                  <iframe
                    title="Trailer"
                    src={
                      trailerKey
                        ? `https://www.youtube.com/embed/${trailerKey}?autoplay=1`
                        : "/no-trailer.svg"
                    }
                    frameBorder="0"
                    allowFullScreen
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </div>
              </Modal>
            )}
            <div className="rating-container">
              <Rate allowHalf value={rating} disabled className="rate" />
            </div>
          </div>
        </div>
      </div>
      <MovieCast />
      <MovieReservation title={movie.title} />
    </div>
  );
}
