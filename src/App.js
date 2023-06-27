import { useAuth } from "./context/auth-context";
import AuthenticatedApp from "./AuthenticatedApp";
import UnauthenticatedApp from "./UnauthenticatedApp";

function App() {
  const { user } = useAuth();

  console.log(user);

  return user ? <AuthenticatedApp /> : <UnauthenticatedApp />;
}

export default App;
