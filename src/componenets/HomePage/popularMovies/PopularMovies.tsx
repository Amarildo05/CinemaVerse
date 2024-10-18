import { Carousel } from "antd";
import "./PopularMovies.css";
import usePopularMoviesFetch from "../../../hooks/movies-data-hooks/usePopularMoviesFetch";
import Loading from "../../common/Loading";
import Error from "../../common/Error";
import { Link } from "react-router-dom";

export default function PopularMovies() {
  const {
    popularMoviesData: popularMovies,
    loading,
    error,
  } = usePopularMoviesFetch();

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <div className="carousel-container">
      <Carousel
        dots={false}
        infinite={true}
        speed={800}
        slidesToShow={6}
        slidesToScroll={1}
        autoplay={true}
        arrows={false}
      >
        {popularMovies.map((movie) => {
          return (
            <Link to={"/singleMovie"}>
              <div key={movie.id} className="movie-slide">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={""}
                  className="movie-poster"
                />
              </div>
            </Link>
          );
        })}
      </Carousel>
    </div>
  );
}