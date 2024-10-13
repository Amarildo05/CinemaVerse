import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SingeMovie from "./pages/SingeMovie";
import Favorites from "./pages/Favorites";
import { useState } from "react";
import { GlobalContext } from "./context/GlobalContext";
import { ThemeType } from "./types";

function App() {
  const defaultTheme: ThemeType = localStorage.getItem("theme")
    ? (localStorage.getItem("theme") as ThemeType)
    : "dark";

  const [theme, setTheme] = useState<ThemeType>(defaultTheme);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/singleMovie",
      element: <SingeMovie />,
    },
    {
      path: "/favorites",
      element: <Favorites />,
    },
  ]);
  return (
    <>
      <GlobalContext.Provider value={{ theme, setTheme }}>
        <RouterProvider router={router} />
      </GlobalContext.Provider>
    </>
  );
}

export default App;