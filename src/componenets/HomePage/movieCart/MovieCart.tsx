import { Card, Popover, Rate } from "antd";
import "./MovieCart.css";
import { AllMoviesType } from "../../../types";
import { GlobalContext } from "../../../context/GlobalContext";
import { useContext } from "react";
import useMovieNavigation from "../../../hooks/useMovieNavigation";
import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import { genres } from "../../../genre";

const { Meta } = Card;

export default function MovieCard(props: AllMoviesType) {
  const { favorites, addFavorite, removeFavorite } = useContext(GlobalContext);
  const isFavorite = favorites.some((movie) => movie.id === props.id); // Check if the movie is already a favorite

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent triggering card click
    if (isFavorite) {
      removeFavorite(props.id); // Remove from favorites if it is listed
    } else {
      addFavorite(props); // Add to favorites if it is not listed
    }
  };

  const handleNavigateClick = useMovieNavigation(props.id);

  const themeContext = useContext(GlobalContext);

  // Make Rating from 0/10 to 0/5
  const rating = props.vote_average / 2;

  const content = (
    <div className="popover-content">
      <h3 className="popover-title">{props.title}</h3>
      <p className="popover-overview">{props.overview}</p>
      <Rate allowHalf value={rating} disabled className="popover-rate" />
    </div>
  );

  // Find genre in the array of "genres" and display them
  const genreNames = props.genre_ids
    .map((id) => genres.find((genre) => genre.id === id)?.name)
    .filter(Boolean)
    .join(" - ");

  return (
    <Popover placement="leftTop" content={content}>
      <Card
        onClick={handleNavigateClick}
        className="movie-card"
        style={{
          backgroundColor:
            themeContext.theme === "dark" ? "#404040" : "#b8b8b8",
          border:
            themeContext.theme === "dark"
              ? "1px solid #404040"
              : "1px solid #b8b8b8",
        }}
        hoverable
        cover={
          <img
            alt={props.title}
            src={
              props.poster_path
                ? `https://image.tmdb.org/t/p/w500${props.poster_path}`
                : "/filler-image.jpg"
            }
            className="movie-card-image"
          />
        }
      >
        <Meta
          className="meta-title"
          title={
            <span
              style={{
                color: themeContext.theme === "dark" ? "white" : "black",
              }}
            >
              {props.title}
            </span>
          }
          description={
            <span
              style={{
                color: themeContext.theme === "dark" ? "white" : "black",
              }}
            >
              {genreNames}
            </span>
          }
        />
        <button
          className="favorite-button"
          style={{
            color: themeContext.theme === "dark" ? "white" : "black",
          }}
          onClick={handleFavoriteClick}
        >
          {isFavorite ? (
            <HeartFilled style={{ fontSize: "20px" }} />
          ) : (
            <HeartOutlined style={{ fontSize: "20px" }} />
          )}
        </button>
      </Card>
    </Popover>
  );
}