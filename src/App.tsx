import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Favorites from "./pages/Favorites";
import { useState } from "react";
import { GlobalContext } from "./context/GlobalContext";
import { AllMoviesType, ThemeType } from "./types";
import { FloatButton } from "antd";
import SingleMovie from "./pages/SingleMovie";
import NotFound from "./notFound/NotFound";

function App() {
  const defaultTheme: ThemeType = localStorage.getItem("theme")
    ? (localStorage.getItem("theme") as ThemeType)
    : "dark";

  const [theme, setTheme] = useState<ThemeType>(defaultTheme);
  const [favorites, setFavorites] = useState<AllMoviesType[]>([]);

  // Function to add movie to favorites
  const addFavorite = (movie: AllMoviesType) => {
    setFavorites((currentFavorites) => [...currentFavorites, movie]);
  };

  // Function to remove movie from favorites by id
  const removeFavorite = (movieId: number) => {
    setFavorites(
      (currentFavorites) =>
        currentFavorites.filter((movie) => movie.id !== movieId) // returns array only with the movies whose id does not match movieId
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/singleMovie/:id",
      element: <SingleMovie />,
    },
    {
      path: "/favorites",
      element: <Favorites />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return (
    <>
      <GlobalContext.Provider
        value={{ theme, setTheme, favorites, addFavorite, removeFavorite }}
      >
        <RouterProvider router={router} />
        <FloatButton.BackTop />
      </GlobalContext.Provider>
    </>
  );
}

export default App;