import axios from "axios";
import { useEffect, useState } from "react";
import { AllMoviesType } from "../../types";

export default function useAllMoviesFetch(page: number) {
  const [allMoviesData, setAllMoviesData] = useState<AllMoviesType[]>([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState<number>(1); // Keep track of total pages

  useEffect(() => {
    async function getData() {
      const url = `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${page}&api_key=1d1d8844ae1e746c459e7be85c15c840`;
      try {
        const { data } = await axios.get(url);
        setAllMoviesData(data.results);
        setTotalPages(data.total_pages); // Save the total number of pages
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
    allMoviesData,
    loading,
    error,
    totalPages,
  };
}