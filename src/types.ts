export type ThemeType = "light" | "dark";

export type AllMoviesType = {
  id: number;
  title: string;
  poster_path: string;
  genre_ids: number[];
  overview: string;
  vote_average: number;
};

export type PopularMoviesType = {
  id: number;
  poster_path: string;
  title: string;
};

export type GenreType = {
  id: number;
  name: string;
};

export type VideoType = {
  key: string;
  type: string;
};

export type SingleMovieType = {
  id: number;
  title: string;
  backdrop_path: string;
  genres: GenreType[];
  overview: string;
  tagline: string;
  release_date: string;
  runtime: number;
  vote_average: number;
  videos: {
    results: VideoType[];
  };
};

export type ActorType = {
  id: number;
  name: string;
  profile_path: string | null;
  character: string;
};

export type MovieCreditsType = {
  id: number;
  cast: ActorType[];
};

export type SearchedMoviesListProps = {
  query: string | null;
};

export type ReservationFormValues = {
  fullName: string;
  tickets: number;
  seats: string[];
  cardNumber: string;
  cvv: string;
  expirationDate: string;
};
