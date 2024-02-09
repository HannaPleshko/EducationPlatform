import React, { useEffect, useState, useRef, useCallback } from 'react';

import Header from '@layout/Header/Header';
import Footer from '@layout/Footer/Footer';
import { useGetCoursesQuery } from '@services';
import { Course, UserGridApiResponse } from '@interface';
import { ExceptionType } from '@constants/message';
import List from './List';

import style from './style.module.scss';
import { FormControl, Pagination, InputLabel, OutlinedInput } from '@mui/material';
import Navigation from './Navigation';
import { Search } from '@mui/icons-material';

const Courses: React.FC = () => {
  const { data: courses } = useGetCoursesQuery<UserGridApiResponse>({});
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pageSizeRef = useRef(10);

  const [listCourses, setListCourses] = useState<Course[]>([]);

  const getSomeData = useCallback(async () => {
    try {
      if (!courses) return;

      const { rows } = courses;
      setListCourses(rows as Course[]);
    } catch (e: any) {
      alert(ExceptionType.SERVER_CONNECT_NOT_CONNECTED);
      console.error(e.message);
    }
  }, [courses]);

  const paginatedList = listCourses.slice((currentPage - 1) * pageSizeRef.current, currentPage * pageSizeRef.current);

  useEffect(() => {
    getSomeData();
  }, [getSomeData]);

  return (
    <>
      <Header />

      <div className={style.wrapper}>
        <div className={style.content}>
          <Navigation />

          {paginatedList.length ? (
            <div className={style.contentCourses}>
              <FormControl fullWidth>
                <InputLabel htmlFor="outlined-adornment-amount">Search</InputLabel>
                <OutlinedInput id="outlined-adornment-amount" startAdornment={<Search />} label="Search" />
              </FormControl>

              <List courses={paginatedList} />

              <Pagination
                count={Math.ceil(listCourses.length / pageSizeRef.current)}
                page={currentPage}
                onChange={(_event, page) => setCurrentPage(page)}
                className={style.pagination}
              />
            </div>
          ) : (
            <p style={{ fontSize: '20px', marginTop: '4%', textAlign: 'center' }}>
              The administrator is currently in the process of developing new courses to enhance your learning experience. We appreciate your patience
              and encourage you to check back soon for updates. In the meantime, feel free to contact our support team if you have any specific
              inquiries or require assistance with your learning journey
            </p>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Courses;
