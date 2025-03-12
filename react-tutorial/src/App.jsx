import AdminPanel from "./AdminPanel";
import LoginForm from "./LoginForm";
import MyButton from "./MyButton";
import Products from "./Products";
import User from "./User";

function App() {
  const isLoggedIn = true;

  return (
    <>
      <User></User>
      {isLoggedIn ? <AdminPanel></AdminPanel> : <LoginForm></LoginForm>}
      <Products></Products>
      <MyButton></MyButton>
    </>
  );
}

export default App;
