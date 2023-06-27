import React from "react";

import { getUser } from "../services/user-service";
import * as auth from "../services/session-service";

const AuthContext = React.createContext();

function AuthProvider(props) {
  const [user, setUser] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    getUser()
      .then((data) => {
        console.log(data);
        setUser(data);
        setLoading(false);
      })
      .catch((error) => setLoading(false));
  }, []);

  function login(credentials) {
    return auth.login(credentials).then((user) => setUser(user));
  }

  function logout() {
    return auth.logout().then(() => setUser(null));
  }

  if (loading) return <p>Loading...</p>;

  return (
    <AuthContext.Provider value={{ user, setUser, login, logout }} {...props} />
  );
}

function useAuth() {
  return React.useContext(AuthContext);
}

export { useAuth, AuthProvider };
