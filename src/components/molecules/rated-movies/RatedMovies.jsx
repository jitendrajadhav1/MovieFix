import React, { useEffect, useState } from 'react';

const RatedMovies = ({ genreId }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (!genreId) return;

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZDE2YTJjODUzZmVkNGU3ZTcyNGRhNTg5ZTdiYzk4YiIsIm5iZiI6MTcyMjc2OTMzMi41NTY0NTMsInN1YiI6IjY2YWY1ZGE0NmRmY2ZlNTVmNmJkYTk4NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Z3boAOzR8_U7ASRb65_tsL4uX2S6pTsJov1Pr4mRfUo'
      }
    };

    fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genreId}`, options)
      .then(response => response.json())
      .then(response => setMovies(response.results))
      .catch(err => console.error(err));
  }, [genreId]);

  return (
    <div className="movie-list">
      {movies.map(movie => (
        <div key={movie.id} className="movie-card">
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="movie-poster" />
          <div className="movie-details">
            <h2 className="movie-title">{movie.title}</h2>
            <p className="movie-overview">{movie.overview}</p>
            <p className="movie-release-date"><strong>Release Date:</strong> {movie.release_date}</p>
            <p className="movie-rating"><strong>Rating:</strong> {movie.vote_average} ({movie.vote_count} votes)</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RatedMovies;
