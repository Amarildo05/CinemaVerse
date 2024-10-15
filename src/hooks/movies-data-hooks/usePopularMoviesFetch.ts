import axios from "axios";
import { useEffect, useState } from "react";
import { AllMoviesType } from "../../types";

export default function usePopularMoviesFetch() {
  const [popularMoviesData, setPopularMovieData] = useState<AllMoviesType[]>([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      const url = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=1d1d8844ae1e746c459e7be85c15c840`;
      try {
        const { data } = await axios.get(url);
        console.log({data});
        
        setPopularMovieData(data.results);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError(true);
        setLoading(false);
      }
    }
    getData();
  }, []);

  return {
    popularMoviesData,
    loading,
    error,
  };
}