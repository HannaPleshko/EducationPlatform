import { Routes, Route } from 'react-router-dom';
import Login from '@pages/Login/Login';
import SignUp from '@pages/SignUp/SignUp';
import Landing from '@pages/Landing/Landing';
import Courses from '@pages/Courses/Courses';
import AdminControlCenter from '@pages/AdminControlCenter/AdminControlCenter';
import CourseItem from '@pages/CourseItem/CourseItem';

const RoutesProvider = (isAuthenticated: boolean) => {
  if (isAuthenticated) {
    return (
      <Routes>
        <Route path="/" element={<Courses />} />
        <Route path="/admin" element={<AdminControlCenter />} />
        <Route path="/course/:course_id" element={<CourseItem />} />
      </Routes>
    );
  }
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/auth" element={<Login />} />
      <Route path="/reg" element={<SignUp />} />
    </Routes>
  );
};

export default RoutesProvider;
