import React, { Component } from "react";
import MovieCard from "./moviecard";

function MovieList(props) {
  const { movies, addStars, decStars, toggleFav, toggleCart } = props;
  return (
    <div>
      {movies.map((movie, index) => (
        <MovieCard
          key={index}
          movie={movie}
          addStars={addStars}
          decStars={decStars}
          toggleFav={toggleFav}
          toggleCart={toggleCart}
        />
      ))}
    </div>
  );
}

export default MovieList;
