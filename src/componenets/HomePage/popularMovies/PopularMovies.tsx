import { Carousel } from "antd";
import "./PopularMovies.css";
import usePopularMoviesFetch from "../../../hooks/movies-data-hooks/usePopularMoviesFetch";
import Loading from "../../common/Loading";
import Error from "../../common/Error";
import PopularMovieCard from "./PopularMovieCard";

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
        speed={850}
        slidesToShow={6}
        slidesToScroll={1}
        autoplay={true}
        arrows={false}
      >
        {popularMovies.map((movie) => (
          <PopularMovieCard 
            key={movie.id} 
            movie={movie} 
          />
        ))}
      </Carousel>
    </div>
  );
}