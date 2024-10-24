import { Carousel } from "antd";
import "./PopularMovies.css";
import usePopularMoviesFetch from "../../../hooks/movies-data-hooks/usePopularMoviesFetch";
import CarouselLoading from "../../common/carouselLoading/CarouselLoading";
import Error from "../../common/errors/Error";
import PopularMovieCard from "./PopularMovieCard";

export default function PopularMovies() {
  const {
    popularMoviesData: popularMovies,
    loading,
    error,
  } = usePopularMoviesFetch();

  if (loading) {
    return <CarouselLoading />;
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
          <PopularMovieCard key={movie.id} movie={movie} />
        ))}
      </Carousel>
    </div>
  );
}