import Footer from '@Components/Footer/Footer';
import Header from '@Components/Header/Header';
import { useParams } from 'react-router-dom';
import { useGetCourseByIdQuery, useGetLessonByIdQuery } from '@services';
import style from './style.module.scss';
import { Button } from '@mui/material';

const CourseItem = () => {
  const { course_id } = useParams();

  const { data: course } = useGetCourseByIdQuery<any>(course_id);
  const { data: lesson } = useGetLessonByIdQuery<any>(course_id);

  return (
    <>
      <Header />

      <div className={style.wrapper}>
        <div className={style.left}>
          <div className={style.img}></div>
          <div className={style.info}>
            <h2>{course?.title}</h2>
            <p>{course?.description}</p>
            <div>
              {lesson?.length ? (
                <Button className={style.btn} variant="outlined">
                  Go to course
                </Button>
              ) : null}
            </div>
          </div>
        </div>

        <div>
          <div className={style.right}>
            <h2>Lessons:</h2>
            {lesson?.length ? (
              lesson.map((el: any, index: number) => (
                <div key={index}>
                  <p>
                    {index}. {el?.title}
                  </p>
                </div>
              ))
            ) : (
              <p>В курсе еще не добавлены уроки!</p>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CourseItem;
