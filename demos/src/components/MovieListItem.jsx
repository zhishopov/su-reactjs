export default function MovieListItem(props) {
  return (
    <>
      <article>
        <header>
          <h4>{props.movie.title}</h4>
        </header>
        <main>
          <p>{props.movie.director}</p>
        </main>
        <footer>
          <p>
            {props.movie.genre}, {props.movie.year}
          </p>
        </footer>
      </article>
    </>
  );
}
