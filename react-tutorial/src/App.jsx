import AdminPanel from "./AdminPanel";
import LoginForm from "./LoginForm";
import User from "./User";

function App() {
  const isLoggedIn = false;
  let content;

  if (isLoggedIn) {
    content = <AdminPanel></AdminPanel>;
  } else {
    content = <LoginForm></LoginForm>;
  }
  return (
    <>
      <User></User>
      {content}
    </>
  );
}

export default App;
