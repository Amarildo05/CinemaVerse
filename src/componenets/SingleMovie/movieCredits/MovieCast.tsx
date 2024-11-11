import useMovieCreditsFetch from "../../../hooks/movies-data-hooks/useMovieCreditsFetch";
import "./MovieCast.css";

export default function MovieCast() {
  const { movieCredits, loading, error } = useMovieCreditsFetch("1331375"); // Pass your movieId here

  // Loading state
  if (loading) {
    return <div>Loading...</div>;
  }

  // Error state
  if (error) {
    return <div>There was an error fetching the movie credits.</div>;
  }

  return (
    <div>
      <h2>Movie Cast</h2>
      <div className="cast-list">
        {/* Map through the movieCredits array and display only the necessary fields */}
        {movieCredits?.cast?.map((actor) => (
          <div key={actor.id} className="actor-card">
            {/* If profile_path exists, show the image */}
            {actor.profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                alt={actor.name}
                className="actor-image"
              />
            ) : (
              <div className="actor-placeholder">No Image</div>
            )}
            <div className="actor-details">
              <h3>{actor.name}</h3>
              <p>{actor.character}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}