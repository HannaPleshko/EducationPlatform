import { Routes, Route } from "react-router-dom";
import AuthPage from "@Pages/AuthPage/AuthPage";
import RegistrationPage from "@Pages/RegistrationPage/RegistrationPage";
import HomePage from "@Pages/HomePage/HomePage";
import CoursesPage from "@Pages/CoursesPage/CoursesPage";
import AdminPage from "@Pages/AdminPage/AdminPage";

const RoutesProvider = (isAuthenticated: boolean) => {
  if (isAuthenticated) {
    return (
      <Routes>
        <Route path="/" element={<CoursesPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    );
  }
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/reg" element={<RegistrationPage />} />
    </Routes>
  );
};

export default RoutesProvider;
