import React from "react";
import "./style.css";

const MovieCard = ({ movies }) => {
  return (
    <section className="articles">
      {movies.map((movie) => (
        <article key={movie.id}>
          <div className="article-wrapper">
            <figure>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
            </figure>
            <div className="article-body">
              <h2>{movie.title}</h2>
              <div className="rating-text">Rating: {movie.vote_average}</div>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
};

export default MovieCard;
