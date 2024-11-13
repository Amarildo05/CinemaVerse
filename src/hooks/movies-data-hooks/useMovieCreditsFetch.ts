import axios from "axios";
import { useEffect, useState } from "react";
import { MovieCreditsType } from "../../types";

export default function useMovieCreditsFetch(movieId: string | undefined) {
  const [movieCredits, setmovieCredits] = useState<MovieCreditsType | null>(
    null
  );
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=1d1d8844ae1e746c459e7be85c15c840`;
      try {
        const { data } = await axios.get(url);
        setmovieCredits(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError(true);
        setLoading(false);
      }
    }
    getData();
  }, [movieId]);

  return {
    movieCredits,
    loading,
    error,
  };
}