import React from "react";
import WatchedMovie from "./WatchedMovie";

function WactchedMovieList({ watched }) {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie movie={movie}  key={movie.imdbID} />
      ))}
    </ul>
  );
}

export default WactchedMovieList;
