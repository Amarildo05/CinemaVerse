import { useContext } from "react";
import Footer from "../componenets/common/footer/Footer";
import Navbar from "../componenets/common/navbar/Navbar";
import "./PageContainer.css";
import { GlobalContext } from "../context/GlobalContext";
import FavoritesList from "../componenets/Favorites/FavoritesList";

export default function Favorites() {
  const themeContext = useContext(GlobalContext);

  return (
    <div
      className="page-container"
      style={{
        backgroundColor: themeContext.theme === "dark" ? "#5a5a5a" : "#e6e6e6",
      }}
    >
      <Navbar />
      <FavoritesList />
      <Footer />
    </div>
  );
}