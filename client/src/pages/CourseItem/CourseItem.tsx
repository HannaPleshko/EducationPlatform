import Footer from '@Components/Footer/Footer';
import Header from '@Components/Header/Header';
import { useParams } from 'react-router-dom';
import { useGetCourseByIdQuery } from '@services';
import style from './style.module.scss';
import { Button } from '@mui/material';

const CourseItem = () => {
  const { course_id } = useParams();

  const { data } = useGetCourseByIdQuery<any>(course_id);

  return (
    <>
      <Header />

      <div className={style.wrapper}>
        <div className={style.left}>
          <div className={style.img}></div>
          <div className={style.info}>
            <h2>{data?.title}</h2>
            <p>{data?.description}</p>
            <div>
              {' '}
              <Button className={style.btn} variant="outlined">
                Go to course
              </Button>
            </div>
          </div>
        </div>

        <div></div>
      </div>

      <Footer />
    </>
  );
};

export default CourseItem;
