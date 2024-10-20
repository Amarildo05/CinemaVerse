import axios from "axios";
import { useEffect, useState } from "react";
import { SingleMovieType } from "../../types";

export default function useSingleMovieFetch() {
  const [singleMovieData, setSingleMovieData] = useState<SingleMovieType[]>([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      const url = `https://api.themoviedb.org/3/movie/663712?language=en-US&api_key=1d1d8844ae1e746c459e7be85c15c840&append_to_response=videos`;
      try {
        const { data } = await axios.get(url);
        setSingleMovieData(data.results);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError(true); 
        setLoading(false)
      }
    }
    getData();
  }, []);

  return {
    singleMovieData,
    loading,
    error,
  };
}