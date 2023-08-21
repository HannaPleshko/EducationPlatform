import React, { useEffect, useState, useRef } from 'react';

import Header from '@Components/Header/Header';
import Footer from '@Components/Footer/Footer';
import { useGetCoursesQuery } from '@services';
import { Course, UserGridApiResponse } from '@Interfaces';
import { ExceptionType } from '@constants/message';
import List from './List';

import style from './style.module.scss';
import { Pagination } from '@mui/material';

const CoursesPage = () => {
  const { data: courses } = useGetCoursesQuery<UserGridApiResponse>({});
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pageSizeRef = useRef(3);

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

  const paginatedList = listCourses.slice((currentPage - 1) * pageSizeRef.current, currentPage * pageSizeRef.current);

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

        {paginatedList.length ? <List courses={paginatedList} /> : null}

        <Pagination
          count={Math.ceil(listCourses.length / pageSizeRef.current)}
          page={currentPage}
          onChange={(_event, page) => setCurrentPage(page)}
          className={style.pagination}
        />
      </div>

      <Footer />
    </>
  );
};

export default CoursesPage;
