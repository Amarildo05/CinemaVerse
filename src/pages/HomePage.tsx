import Footer from "../componenets/footer/Footer";
import MovieList from "../componenets/HomePage/movieList/MovieList";
import Navbar from "../componenets/navbar/Navbar";
import "./PageContainer.css";

export default function HomePage() {
  return (
    <div className="page-container">
      <Navbar />
      <MovieList />
      <Footer />
    </div>
  );
}