import React, { useEffect, useState } from 'react';

import Header from '@Components/Header/Header';
import Footer from '@Components/Footer/Footer';
import { useGetCoursesQuery } from '@services';
import { Course, UserGridApiResponse } from '@Interfaces';
import { ExceptionType } from '@constants/message';
import List from './List';

import style from './style.module.scss';

const CoursesPage = () => {
  const { data: courses } = useGetCoursesQuery<UserGridApiResponse>({});

  const [listCourses, setListCourses] = useState<Course[]>([]);

  const getSomeData = async () => {
    try {
      if (!courses) return;

      const { rows } = courses;

      setListCourses(rows as Course[]);
    } catch (e: any) {
      alert(ExceptionType.DB_CONNECT_NOT_CONNECTED);
      console.error(e.message);
    }
  };

  useEffect(() => {
    getSomeData();
  }, [courses]);

  return (
    <>
      <Header />

      <div className={style.wrapper}>
        <div className={style.header}>
          <div className={style.img}></div>
          <h1>Courses</h1>
        </div>

        {listCourses.length ? <List courses={listCourses} /> : null}
      </div>

      <Footer />
    </>
  );
};

export default CoursesPage;
