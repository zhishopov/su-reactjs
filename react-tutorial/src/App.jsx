import AdminPanel from "./AdminPanel";
import LoginForm from "./LoginForm";
import Products from "./Products";
import User from "./User";

function App() {
  const isLoggedIn = true;

  return (
    <>
      <User></User>
      {isLoggedIn ? <AdminPanel></AdminPanel> : <LoginForm></LoginForm>}
      <Products></Products>
    </>
  );
}

export default App;
