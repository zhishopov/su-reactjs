import MovieListItem from "./MovieListItem";

export default function MovieList(props) {
  return (
    <>
      <h2>Movie List</h2>
      <ul>
        <MovieListItem movie={props.movies[0]}></MovieListItem>
      </ul>
    </>
  );
}
