import { Card, Popover, Rate } from "antd";
import "./MovieCart.css";
import { AllMoviesType } from "../../../types";
import { GlobalContext } from "../../../context/GlobalContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const { Meta } = Card;

export default function MovieCard(props: AllMoviesType) {
  const themeContext = useContext(GlobalContext);

  const rating = props.vote_average / 2;

  const content = (
    <div className="popover-content">
      <h3 className="popover-title">{props.title}</h3>
      <p className="popover-overview">{props.overview}</p>
      <Rate allowHalf value={rating} disabled className="popover-rate" />
    </div>
  );

  return (
    <Link to={"/singleMovie"}>
      <Popover placement="leftTop" content={content}>
        <Card
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
              alt="Movie Image"
              src={`https://image.tmdb.org/t/p/w500${props.poster_path}`}
              className="movie-card-image"
            />
          }
        >
          <Meta
            className="meta-title white-text"
            title={
              <span
                style={{
                  color: themeContext.theme === "dark" ? "white" : "black",
                }}
              >
                {props.title}
              </span>
            }
            // description={
            //   <span>{props.genre_ids}</span>
            // }
          />
        </Card>
      </Popover>
    </Link>
  );
}
