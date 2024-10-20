import axios from "axios";
import { useEffect, useState } from "react";
import { SingleMovieType } from "../../types";

export default function useSingleMovieFetch(movieId: string | undefined) {
  const [singleMovieData, setSingleMovieData] = useState<SingleMovieType | null>(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      const url = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US&api_key=1d1d8844ae1e746c459e7be85c15c840&append_to_response=videos`;
      try {
        const { data } = await axios.get(url);
        setSingleMovieData(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError(true); 
        setLoading(false)
      }
    }
    getData();
  }, [movieId]);

  return {
    singleMovieData,
    loading,
    error,
  };
}