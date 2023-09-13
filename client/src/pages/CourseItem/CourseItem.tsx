import React from 'react';

import Footer from '@layout/Footer/Footer';
import Header from '@layout/Header/Header';
import { useParams } from 'react-router-dom';
import { useGetCourseByIdQuery, useGetLessonByIdQuery } from '@services';
import style from './style.module.scss';
import { Button } from '@mui/material';
import classNames from 'classnames';

const CourseItem: React.FC = () => {
  const { course_id } = useParams();

  const { data: course } = useGetCourseByIdQuery<any>(course_id);
  const { data: lesson } = useGetLessonByIdQuery<any>(course_id);

  return (
    <>
      <Header />

      <div className={style.wrapper}>
        <div className={classNames(style.container, style.left)}>
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
          <div className={classNames(style.container, style.right)}>
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
