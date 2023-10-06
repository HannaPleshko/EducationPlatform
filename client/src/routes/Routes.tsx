import { Routes, Route } from 'react-router-dom';
import Login from '@pages/Login/Login';
import SignUp from '@pages/SignUp/SignUp';
import Landing from '@pages/Landing/Landing';
import Courses from '@pages/Courses/Courses';
import Administartion from '@pages/Administartion/Administartion';
import CourseItem from '@pages/CourseItem/CourseItem';
import NotFound from '@pages/NotFound/NotFound';

const RoutesProvider = (isAuthenticated: boolean) => {
  if (isAuthenticated) {
    return (
      <Routes>
        <Route path="/" element={<Courses />} />
        <Route path="/admin" element={<Administartion />} />
        <Route path="/course/:course_id" element={<CourseItem />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    );
  }
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/auth" element={<Login />} />
      <Route path="/reg" element={<SignUp />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default RoutesProvider;
