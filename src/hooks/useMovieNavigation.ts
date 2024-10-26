import { useNavigate } from "react-router-dom";

// Function to navigate to a Single movie details dynamically
function useMovieNavigation(id: number) {
  const nav = useNavigate();

  function handleNavigateClick() {
    nav(`/singleMovie/${id}`);
  }
  return handleNavigateClick;
}

export default useMovieNavigation;