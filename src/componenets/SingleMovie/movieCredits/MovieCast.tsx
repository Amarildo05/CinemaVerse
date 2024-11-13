import { Carousel } from "antd";
import useMovieCreditsFetch from "../../../hooks/movies-data-hooks/useMovieCreditsFetch";
import "./MovieCast.css";
import { UserOutlined } from "@ant-design/icons";
import { GlobalContext } from "../../../context/GlobalContext";
import { useContext } from "react";
import { useParams } from "react-router-dom";

export default function MovieCast() {
  const themeContext = useContext(GlobalContext);
  const { id } = useParams(); // Get the movie ID from the URL
  const { movieCredits, loading, error } = useMovieCreditsFetch(id);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>There was an error fetching the movie credits.</div>;
  }

  // Carousel settings for responsiveness
  const carouselSettings = {
    dots: false,
    arrows: true,
    speed: 500,
    adaptiveHeight: false,
    infinite: true,
    slidesToShow: 5,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 880,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="cast-carousel-container">
      <Carousel
        className={`custom-carousel-${
          themeContext.theme === "dark" ? "dark" : "light"
        }`}
        {...carouselSettings}
      >
        {movieCredits?.cast?.map((actor) => (
          <div key={actor.id} className="actor-card">
            {/* If profile_path exists, show the image */}
            {actor.profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                alt={actor.name}
                className="actor-image"
              />
            ) : (
              <div
                className="actor-placeholder"
                style={{
                  backgroundColor:
                    themeContext.theme === "dark" ? "#404040" : "#b8b8b8",
                  color: themeContext.theme === "dark" ? "white" : "black",
                }}
              >
                <UserOutlined style={{ fontSize: "50px" }} />
                <p>No Image</p>
              </div>
            )}
            <div
              className="actor-details"
              style={{
                color: themeContext.theme === "dark" ? "white" : "black",
              }}
            >
              <h3>{actor.name}</h3>
              <p>{actor.character}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}