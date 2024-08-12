import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";

const Genre = ({ onSelectGenres }) => {
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZDE2YTJjODUzZmVkNGU3ZTcyNGRhNTg5ZTdiYzk4YiIsIm5iZiI6MTcyMjc2OTMzMi41NTY0NTMsInN1YiI6IjY2YWY1ZGE0NmRmY2ZlNTVmNmJkYTk4NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Z3boAOzR8_U7ASRb65_tsL4uX2S6pTsJov1Pr4mRfUo'
      }
    };

    axios.get('https://api.themoviedb.org/3/genre/movie/list?language=en', options)
      .then(response => {
        setGenres(response.data.genres);
      })
      .catch(error => {
        console.error('Error fetching genres:', error);
      });
  }, []);

  const handleGenreClick = (genre) => {
    const updatedSelectedGenres = selectedGenres.includes(genre.id)
      ? selectedGenres.filter(g => g !== genre.id)
      : [...selectedGenres, genre.id];

    setSelectedGenres(updatedSelectedGenres);
    onSelectGenres(updatedSelectedGenres);
  };

  return (
    <div className="genre-main">
      <div className="genre-heading">
        <h2>Genre</h2>
      </div>
      <div className="genre-chip">
        {genres.map((genre) => (
          <span
            key={genre.id}
            className={selectedGenres.includes(genre.id) ? "selected" : ""}
            onClick={() => handleGenreClick(genre)}
          >
            {genre.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Genre;
