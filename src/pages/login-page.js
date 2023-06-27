import React from "react";
import { useAuth } from "../context/auth-context";

export default function LoginPage() {
  const { login } = useAuth();

  function handleSubmit(event) {
    event.preventDefault();

    const { email, password } = event.target.elements;

    const credentials = {
      email: email.value,
      password: password.value,
    };

    login(credentials).catch((error) => console.log(error));
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" name="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input id="password" name="password" />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
