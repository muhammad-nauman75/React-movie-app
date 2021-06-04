import React, { useState } from "react";
import Movie from "./Movie";

const MoviesList = ({ movies }) => {
  //Favorie Movie
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  const addFavoriteMovie = (movie) => {
    const newFavoriteMovies = [...favoriteMovies, movie];
    setFavoriteMovies(newFavoriteMovies);
  };
  //console.log(favoriteMovies);

  const removeFavoriteMovie = (movie) => {
    const filteredMovies = favoriteMovies.filter(
      (favotieMovie) => favotieMovie.imdbID !== movie.imdbID
    );
    setFavoriteMovies(filteredMovies);
  };
  const movieData = (movie, listID) => (
    <Movie
      key={movie.imdbID}
      listID={listID}
      movie={movie}
      addFavoriteMovie={addFavoriteMovie}
      favoriteMovies={favoriteMovies}
      removeFavoriteMovie={removeFavoriteMovie}
    />
  );

  return (
    <div>
      <div className="movies-list">
        {movies.map((movie) => {
          return movieData(movie, "search-list");
        })}
      </div>

      <h1 className="favorite-heading">Favorite Movie</h1>
      <div className="movies-list">
        {favoriteMovies.map((movie) => {
          return movieData(movie, "favotie-list");
        })}
      </div>
    </div>
  );
};

export default MoviesList;
