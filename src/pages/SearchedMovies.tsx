import { useLocation } from "react-router-dom";
import Footer from "../componenets/common/footer/Footer";
import Navbar from "../componenets/common/navbar/Navbar";
import SearchedMoviesList from "../componenets/SearchedMovies/SearchedMoviesList";
import "./PageContainer.css";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

export default function SearchedMovies() {
  const themeContext = useContext(GlobalContext);

  // Access the value provided by the user
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query");

  return (
    <div
      className="page-container"
      style={{
        backgroundColor: themeContext.theme === "dark" ? "#5a5a5a" : "#e6e6e6",
      }}
    >
      <Navbar />
      <SearchedMoviesList query={query} />
      <Footer />
    </div>
  );
}