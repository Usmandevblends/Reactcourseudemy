import ListBox from "./ListBox";
import WatchedBox from "./WatchedBox";

function Main({ tempMovieData, tempWatchedData, movies }) {
  return (
    <main className="main">
      <ListBox tempMovieData={tempMovieData} movies={movies} />
      <WatchedBox tempWatchedData={tempWatchedData} />
    </main>
  );
}

export default Main;
