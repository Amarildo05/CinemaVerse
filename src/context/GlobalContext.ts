import { createContext } from "react";
import { AllMoviesType, ThemeType } from "../types";

const defaultValue: {
  theme: ThemeType;
  setTheme: React.Dispatch<React.SetStateAction<ThemeType>>;
  favorites: AllMoviesType[];
  addFavorite: (movie: AllMoviesType) => void;
  removeFavorite: (movieId: number) => void;
} = {
  theme: "light",
  setTheme: () => {},
  favorites: [],
  addFavorite: () => {},
  removeFavorite: () => {},
};

export const GlobalContext = createContext(defaultValue);