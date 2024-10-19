export type ThemeType = "light" | "dark";

export type AllMoviesType = {
  id: number;
  title: string;
  poster_path: string;
  genre_ids: number;
  overview: string;
  vote_average: number;
};

export type PopularMoviesType = {
  id: number;
  poster_path: string;
  title: string;
};