import React from "react";
import noPoster from "../no-poster.jpg";

const Movie = ({ movie, addFavoriteMovie, listID, removeFavoriteMovie }) => {
  const addToFavoriteHandler = () => {
    addFavoriteMovie(movie);
  };

  return (
    <div className="movie-item">
      <h2 className="movie-title">{movie.Title}</h2>
      <img
        className="movie-poster"
        src={movie.Poster.length < 5 ? noPoster : movie.Poster}
        alt={movie.Title}
      />
      <div className="movie-item-bottom">
        <p className="movie-year">{movie.Year}</p>
        <p className="movie-type">{movie.Type}</p>
      </div>

      {listID === "search-list" ? (
        <button className="btn btn-favorite" onClick={addToFavoriteHandler}>
          Add to favorite
        </button>
      ) : (
        <button
          className="btn btn-remove-fav"
          onClick={() => removeFavoriteMovie(movie)}
        >
          Remove
        </button>
      )}
    </div>
  );
};

export default Movie;
