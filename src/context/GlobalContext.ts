import { createContext } from "react";
import { ThemeType } from "../types";

const defaultValue: {
  theme: ThemeType;
  setTheme: React.Dispatch<React.SetStateAction<ThemeType>>;
} = {
  theme: "light",
  setTheme: () => {},
};

export const GlobalContext = createContext(defaultValue);