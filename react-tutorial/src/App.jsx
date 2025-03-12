import { useState } from "react";
import AdminPanel from "./AdminPanel";
import LoginForm from "./LoginForm";
import MyButton from "./MyButton";
import Products from "./Products";
import User from "./User";

function App() {
  const [count, setCount] = useState(0);

  function clickHandler() {
    setCount(count + 1);
  }

  const isLoggedIn = true;

  return (
    <>
      <User></User>
      {isLoggedIn ? <AdminPanel></AdminPanel> : <LoginForm></LoginForm>}
      <Products></Products>
      <MyButton count={count} onClick={clickHandler}></MyButton>
      <MyButton count={count} onClick={clickHandler}></MyButton>
    </>
  );
}

export default App;
