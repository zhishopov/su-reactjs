import Counter from "./components/Counter.jsx";
import KillCounter from "./components/KillCounter.jsx";
import MovieList from "./components/MovieList.jsx";
import Timer from "./components/Timer.jsx";
import MyButton from "./MyButton.jsx";
import Profile from "./Profile.jsx";

const movies = [
  {
    title: "Inception",
    director: "Christopher Nolan",
    year: 2010,
    genre: "Sci-Fi",
    rating: 8.8,
  },
  {
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: 1972,
    genre: "Crime",
    rating: 9.2,
  },
  {
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: 1994,
    genre: "Crime",
    rating: 8.9,
  },
  {
    title: "The Dark Knight",
    director: "Christopher Nolan",
    year: 2008,
    genre: "Action",
    rating: 9.0,
  },
  {
    title: "Forrest Gump",
    director: "Robert Zemeckis",
    year: 1994,
    genre: "Drama",
    rating: 8.8,
  },
];

function App() {
  return (
    <>
      <h1>Welcome to my app</h1>
      <MyButton text="My Button"></MyButton>
      <Profile></Profile>
      <MovieList movies={movies}></MovieList>
      <Timer></Timer>
      <Counter></Counter>
      <KillCounter></KillCounter>
    </>
  );
}

export default App;
