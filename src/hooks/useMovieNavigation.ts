import { useNavigate } from "react-router-dom";

function useMovieNavigation(id: number) {
  const nav = useNavigate();

  function handleNavigateClick() {
    nav(`/singleMovie/${id}`);
  }
  return handleNavigateClick;
}

export default useMovieNavigation;