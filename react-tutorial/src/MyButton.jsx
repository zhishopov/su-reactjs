export default function MyButton(props) {
  return (
    <>
      <button onClick={props.onClick}>{props.count}</button>
    </>
  );
}
