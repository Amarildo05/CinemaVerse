import Footer from "../componenets/common/footer/Footer";
import PopularMovies from "../componenets/HomePage/popularMovies/PopularMovies";
import AllMovies from "../componenets/HomePage/allMovies/AllMovies";
import Navbar from "../componenets/common/navbar/Navbar";
import "./PageContainer.css";

export default function HomePage() {
  return (
    <div className="page-container">
      <Navbar />
      <PopularMovies />
      <AllMovies />
      <Footer />
    </div>
  );
}