import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SingeMovie from "./pages/SingeMovie";
import Favorites from "./pages/Favorites";

function App() {
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
      <RouterProvider router={router} />
    </>
  );
}

export default App;