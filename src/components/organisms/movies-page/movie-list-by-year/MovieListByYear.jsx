import React, { useState } from 'react';
import MoviesByYear from '../../../molecules/movies-by-year/MoviesByYear';
import Genre from '../../../molecules/genre/Genre';

const MovieListByYear = () => {
  const [selectedGenres, setSelectedGenres] = useState([]);
  const years = Array.from({ length: 2024 - 2012 + 1 }, (_, i) => 2012 + i);

  const handleGenreSelection = (genres) => {
    setSelectedGenres(genres);
  };

  return (
    <div className="movie-list-by-year">
      <Genre onSelectGenres={handleGenreSelection} />
      {years.map(year => (
        <MoviesByYear key={year} year={year} selectedGenres={selectedGenres} />
      ))}
    </div>
  );
};

export default MovieListByYear;
