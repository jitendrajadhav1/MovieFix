import React, { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";
import MovieCard from "../../atoms/movie-card/MovieCard";
import Loader from "../../atoms/loader/Loader";

const MoviesByYear = ({ selectedGenres }) => {
  const [moviesByYear, setMoviesByYear] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (selectedGenres.length === 0) return;

    const fetchMoviesByYear = async (year) => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZDE2YTJjODUzZmVkNGU3ZTcyNGRhNTg5ZTdiYzk4YiIsIm5iZiI6MTcyMjc2OTMzMi41NTY0NTMsInN1YiI6IjY2YWY1ZGE0NmRmY2ZlNTVmNmJkYTk4NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Z3boAOzR8_U7ASRb65_tsL4uX2S6pTsJov1Pr4mRfUo",
        },
      };

      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&sort_by=popularity.desc&primary_release_year=${year}&with_genres=${selectedGenres.join(
            ","
          )}`,
          options
        );
        return response.data.results;
      } catch (error) {
        console.error(`Error fetching movies for year ${year}:`, error);
        return [];
      }
    };

    const loadMoviesByYear = async () => {
      setIsLoading(true);
      const moviesData = {};

      for (let year = 2012; year <= 2024; year++) {
        const movies = await fetchMoviesByYear(year);
        if (movies.length > 0) {
          moviesData[year] = movies;
        }
      }

      setMoviesByYear(moviesData);
      setIsLoading(false); 
    };

    loadMoviesByYear();
  }, [selectedGenres]);

  return (
    <div className="movies-by-year">
        {isLoading ? (
        <Loader />
      ) : (
        Object.entries(moviesByYear).map(([year, movies]) => (
          <div key={year} className="year-section">
            <h2 className="year-text">{year}</h2>
            <MovieCard movies={movies} />
          </div>
        ))
      )}
    </div>
  );
};

export default MoviesByYear;
