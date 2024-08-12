import React from 'react';

const Movies = ({movie}) => {
  return (
    <div className="movie-card">
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="movie-poster" />
      <div className="movie-details">
        <h2 className="movie-title">{movie.title}</h2>
        <p className="movie-overview">{movie.overview}</p>
        <p className="movie-release-date"><strong>Release Date:</strong> {movie.release_date}</p>
        <p className="movie-rating"><strong>Rating:</strong> {movie.vote_average} ({movie.vote_count} votes)</p>
      </div>
    </div>
  );
};

export default Movies;