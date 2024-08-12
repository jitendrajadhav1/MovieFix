import React, { useState } from "react";
import Navbar from "../../atoms/navbar/Navbar";
import Genre from "../../molecules/genre/Genre";
import MoviesByYear from "../../molecules/movies-by-year/MoviesByYear";

const Homepage = () => {
  const [selectedGenres, setSelectedGenres] = useState([]);

  return (
    <div style={{ marginBottom: "20px" }} className="app">
      <Navbar />
      <div style={{ marginBottom: "20px" }} className="app">
        <Genre onSelectGenres={setSelectedGenres} />
        <MoviesByYear selectedGenres={selectedGenres} />
      </div>
    </div>
  );
};

export default Homepage;
