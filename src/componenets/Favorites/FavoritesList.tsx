import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import MovieCard from "../HomePage/movieCart/MovieCart";
import "./FavoritesList.css";

export default function FavoritesList() {
  const { favorites } = useContext(GlobalContext);
  const themeContext = useContext(GlobalContext);

  return (
    <div className="favorite-list">
      {favorites.length > 0 ? (
        favorites.map((movie) => <MovieCard key={movie.id} {...movie} />)
      ) : themeContext.theme === "dark" ? (
        <img className="no-favorite" src="/no-favorite-white.svg" />
      ) : (
        <img className="no-favorite" src="/no-favorite-black.svg" />
      )}
    </div>
  );
}