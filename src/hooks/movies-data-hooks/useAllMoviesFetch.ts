import axios from "axios";
import { useEffect, useState } from "react";
import { AllMoviesType } from "../../types";

export default function useAllMoviesFetch(page: number) {
  const [data, setData] = useState<AllMoviesType[]>([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      const url = `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${page}&api_key=1d1d8844ae1e746c459e7be85c15c840`;
      try {
        const { data } = await axios.get(url);
        setData(data.results);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError(true);
        setLoading(false);
      }
    }
    getData();
  }, [page]);

  return {
    data,
    loading,
    error,
  };
}