import style from './style.module.scss';
import React, { useEffect, useState, useRef } from 'react';

import { useGetCoursesQuery } from '@services';
import { Course } from '@interface';

import { FormControl, Pagination, InputLabel, OutlinedInput } from '@mui/material';
import { Search } from '@mui/icons-material';
import CourseItem from './CourseItem';

const Content: React.FC = () => {
  const { data } = useGetCoursesQuery<any>({});
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [input, setInput] = useState<string>('');
  const [list, setList] = useState<Course[]>([]);

  const pageSizeRef = useRef(10);

  const filterCourses = () => {
    if (!data) return [];
    if (!input) return data.rows;
    return data.rows.filter(({ title }: any) => title.toLowerCase().includes(input.toLowerCase()));
  };

  const paginatedList = filterCourses().slice((currentPage - 1) * pageSizeRef.current, currentPage * pageSizeRef.current);

  useEffect(() => {
    if (!data) return setList([]);
    setList(data.rows);
  }, [data]);

  useEffect(() => {
    setList(filterCourses());
  }, [input, data]);

  return (
    <div className={style.contentCourses}>
      <FormControl fullWidth>
        <InputLabel htmlFor="outlined-adornment-amount">Search</InputLabel>
        <OutlinedInput
          id="outlined-adornment-amount"
          startAdornment={<Search />}
          label="Search"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
        />
      </FormControl>

      {paginatedList.length ? (
        <>
          <div className={style.list}>
            {paginatedList.map((el: Course, index: number) => (
              <CourseItem key={index} course={el} />
            ))}
          </div>

          <Pagination
            count={Math.ceil(list.length / pageSizeRef.current)}
            page={currentPage}
            onChange={(_event, page) => setCurrentPage(page)}
            className={style.pagination}
          />
        </>
      ) : (
        <p style={{ fontSize: '20px', marginTop: '4%', textAlign: 'center' }}>
          The administrator is currently in the process of developing new courses to enhance your learning experience. We appreciate your patience and
          encourage you to check back soon for updates. In the meantime, feel free to contact our support team if you have any specific inquiries or
          require assistance with your learning journey
        </p>
      )}
    </div>
  );
};

export default Content;
