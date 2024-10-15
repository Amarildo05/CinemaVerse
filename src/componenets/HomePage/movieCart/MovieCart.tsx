import { Card } from "antd";
import "./MovieCart.css";
import { AllMoviesType } from "../../../types";
import { GlobalContext } from "../../../context/GlobalContext";
import { useContext } from "react";

const { Meta } = Card;

export default function MovieCard(props: AllMoviesType) {
  const themeContext = useContext(GlobalContext);
  return (
    <Card
      className="movie-card"
      style={{
        backgroundColor: themeContext.theme === "dark" ? "#404040" : "#b8b8b8",
        border:
          themeContext.theme === "dark"
            ? "1px solid #404040"
            : "1px solid #b8b8b8",
      }}
      hoverable
      cover={
        <img
          alt="example"
          src={`https://image.tmdb.org/t/p/w500${props.poster_path}`}
          className="movie-card-image"
        />
      }
    >
      <Meta
        className="meta-title white-text"
        title={
          <span
            style={{ color: themeContext.theme === "dark" ? "white" : "black" }}
          >
            {props.title}
          </span>
        }
      />
    </Card>
  );
}