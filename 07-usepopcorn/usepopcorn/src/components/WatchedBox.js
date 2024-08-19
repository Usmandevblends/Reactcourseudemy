import { useState } from "react";
import WachedSummary from "./WachedSummary";
import WactchedList from "./WactchedMovieList";

const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

function WatchedBox({ tempWatchedData }) {
  const [watched, setWatched] = useState(tempWatchedData);
  const [isOpen2, setIsOpen2] = useState(true);

  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen2((open) => !open)}
      >
        {isOpen2 ? "–" : "+"}
      </button>
      {isOpen2 && (
        <>
          <WachedSummary watched={watched} average={average} />
          <WactchedList watched={watched} />
        </>
      )}
    </div>
  );
}

export default WatchedBox;
