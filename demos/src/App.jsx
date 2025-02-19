import "./MyButton.css";

function MyButton() {
  return <button className="my-button">My Button</button>;
}

function App() {
  return (
    <>
      <h1>Welcome to my app</h1>
      <MyButton></MyButton>
    </>
  );
}

export default App;
