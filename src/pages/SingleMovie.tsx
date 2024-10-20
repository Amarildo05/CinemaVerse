import { useContext } from "react";
import Footer from "../componenets/common/footer/Footer";
import Navbar from "../componenets/common/navbar/Navbar";
import "./PageContainer.css";
import { GlobalContext } from "../context/GlobalContext";
import SingleMovieDetails from "../componenets/SingleMovie/SingleMovieDetails";
import useSingleMovieFetch from "../hooks/movies-data-hooks/useSingleMovieFetch";
import Loading from "../componenets/common/Loading";
import Error from "../componenets/common/Error";
import { useParams } from "react-router-dom";

export default function SingleMovie() {
  const themeContext = useContext(GlobalContext);
  const { id } = useParams(); // Get the movie ID from the URL
  const { singleMovieData, loading, error } = useSingleMovieFetch(id);

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <div
      className="page-container"
      style={{
        backgroundColor:
          themeContext.theme === "dark" ? "#5a5a5a" : "#e6e6e6",
      }}
    >
      <Navbar />
      <SingleMovieDetails movie={singleMovieData} />
      <Footer />
    </div>
  );
}