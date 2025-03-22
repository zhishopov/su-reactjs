import { useState } from "react";

export default function ControlledForm() {
  const [values, setValues] = useState({
    username: "",
    password: "",
    remember: true,
  });

  const submitHandler = (e) => {
    e.preventDefault();

    console.log({ username: values.username, password: values.password });
  };

  const changeHandler = (e) => {
    setValues((state) => ({
      ...state,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    }));
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="username">
            <input
              type="text"
              id="username"
              name="username"
              onChange={changeHandler}
              value={values.username}
            />
          </label>
        </div>
        <div>
          <label htmlFor="password">
            <input
              type="password"
              id="password"
              name="password"
              onChange={changeHandler}
              value={values.password}
            />
          </label>
        </div>
        <div>
          <label htmlFor="remember">
            Remember me
            <input
              type="checkbox"
              id="remember"
              name="remember"
              onChange={changeHandler}
              checked={values.remember}
            />
          </label>
        </div>
        <div>
          <button>Login</button>
        </div>
      </form>
    </div>
  );
}
