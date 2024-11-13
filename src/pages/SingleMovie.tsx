import { useContext } from "react";
import Footer from "../componenets/common/footer/Footer";
import Navbar from "../componenets/common/navbar/Navbar";
import "./PageContainer.css";
import { GlobalContext } from "../context/GlobalContext";
import SingleMovieDetails from "../componenets/SingleMovie/SingleMovieDetails";
import useSingleMovieFetch from "../hooks/movies-data-hooks/useSingleMovieFetch";
import Error from "../componenets/common/errors/Error";
import { useParams } from "react-router-dom";
import { Spin } from "antd";

export default function SingleMovie() {
  const themeContext = useContext(GlobalContext);
  const { id } = useParams(); // Get the movie ID from the URL
  const { singleMovieData, loading, error } = useSingleMovieFetch(id);

  if (loading)
    return (
      <div
        className="page-container"
        style={{
          backgroundColor:
            themeContext.theme === "dark" ? "#5a5a5a" : "#e6e6e6",
        }}
      >
        <Spin size="large" />
      </div>
    );

  if (error) return <Error />;

  return (
    <div
      className="page-container"
      style={{
        backgroundColor: themeContext.theme === "dark" ? "#5a5a5a" : "#e6e6e6",
      }}
    >
      <Navbar />
      <SingleMovieDetails movie={singleMovieData} />
      <Footer />
    </div>
  );
}