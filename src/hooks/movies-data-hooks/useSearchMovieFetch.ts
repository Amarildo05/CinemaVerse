import axios from "axios";
import { useEffect, useState } from "react";
import { AllMoviesType } from "../../types";

export default function useSearchMovieFetch(query: string | null) {
  const [searchedMovieData, setSearchMovieData] = useState<AllMoviesType[]>([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=1d1d8844ae1e746c459e7be85c15c840&query=${query}&include_adult=false&language=en-US`;
      try {
        const { data } = await axios.get(url);
        setSearchMovieData(data.results);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError(true);
        setLoading(false);
      }
    }
    getData();
  }, [query]);

  return {
    searchedMovieData,
    loading,
    error,
  };
}