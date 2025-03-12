export default function MyButton() {
  function clickHandler() {
    console.log("Button is clicked");
  }
  return (
    <>
      <button onClick={clickHandler}>Click Me</button>
    </>
  );
}
