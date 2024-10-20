import Footer from "../componenets/common/footer/Footer";
import PopularMovies from "../componenets/HomePage/popularMovies/PopularMovies";
import Navbar from "../componenets/common/navbar/Navbar";
import "./PageContainer.css";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import MoviesMenu from "../componenets/HomePage/moviesMenu/MoviesMenu";

export default function HomePage() {
  const themeContext = useContext(GlobalContext);
  return (
    <div
      className="page-container"
      style={{
        backgroundColor: themeContext.theme === "dark" ? "#5a5a5a" : "#e6e6e6",
      }}
    >
      <Navbar />
      <PopularMovies />
      <MoviesMenu />
      <Footer />
    </div>
  );
}