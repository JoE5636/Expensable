import { Route, Routes, Navigate } from "react-router-dom";
import LoginPage from "./pages/login-page";

export default function UnauthenticatedApp() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Navigate to="/login" replace={true} />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<p> Sign up</p>} />
        <Route path="*" element={<Navigate to="/login" replace={true} />} />
      </Route>
    </Routes>
  );
}
