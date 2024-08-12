import React, { useEffect, useState } from 'react';
import './style.css';
// import MovieCard from '../../atoms/movie-card/MovieCard';
// import MovieYear from '../../atoms/movie-year/MovieYear';
import Movies from '../../atoms/movies/Movies';
import axios from 'axios';

const MoviesPage = ({ genreId }) => {

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
        {/* <MovieYear /> */}
        {/* <MovieCard /> */}
        {/* {movies.map(movie => (
        <Movies key={movie.id} movie={movie} /> */}
      {/* ))} */}
    </div>
  );
};

export default MoviesPage;