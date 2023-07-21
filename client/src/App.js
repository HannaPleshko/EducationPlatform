import { Routes, Route } from 'react-router-dom';
import AuthPage from './pages/AuthPage/AuthPage';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
import HomePage from './pages/HomePage/HomePage';
import CoursesPage from './pages/CoursesPage/CoursesPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />

      <Route path='/auth' element={<AuthPage />} />

      <Route path='/reg' element={<RegistrationPage />} />

      <Route path='/course' element={<CoursesPage />} />

    </Routes>
  );
}

export default App;
