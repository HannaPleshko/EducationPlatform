import Footer from '@Components/Footer/Footer';
import Header from '@Components/Header/Header';
import { useParams } from 'react-router-dom';
import { useGetCourseByIdQuery } from '@services';

const CourseItem = () => {
  const { course_id } = useParams();

  const { data } = useGetCourseByIdQuery<any>(course_id);

  return (
    <>
      <Header />

      <div>{data?.title}</div>

      <Footer />
    </>
  );
};

export default CourseItem;
