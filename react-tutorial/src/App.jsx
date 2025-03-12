import AdminPanel from "./AdminPanel";
import LoginForm from "./LoginForm";
import User from "./User";

function App() {
  const isLoggedIn = true;

  return (
    <>
      <User></User>
      {isLoggedIn ? <AdminPanel></AdminPanel> : <LoginForm></LoginForm>}
    </>
  );
}

export default App;
