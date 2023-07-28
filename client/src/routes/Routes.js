import { Routes, Route } from 'react-router-dom';
import AuthPage from '../pages/AuthPage/AuthPage';
import RegistrationPage from '../pages/RegistrationPage/RegistrationPage';
import HomePage from '../pages/HomePage/HomePage';
import CoursesPage from '../pages/CoursesPage/CoursesPage';
import AdminPage from '../pages/AdminPage/AdminPage';

function RoutesProvider(isAuthenticated) {
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
}

export default RoutesProvider;
