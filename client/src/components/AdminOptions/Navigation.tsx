import React from 'react';
import { TableCell, IconButton } from '@mui/material';
import { RestartAlt, Create, Save, Delete } from '@mui/icons-material';
import { UserApiResponse, CourseApiResponse, AdminNavigationContent, LessonApiResponse } from '@Interfaces';
import { ExceptionType } from '@constants/message';
import {
  useDeleteCourseMutation,
  useUpdateCourseMutation,
  useDeleteUserMutation,
  useUpdateUserMutation,
  useUpdateLessonMutation,
  useDeleteLessonMutation,
} from '@services';

import style from './style.module.scss';

interface NavigationProps {
  id: string;
  content: string;
  setSelectedRow: (param: any) => void;
  itemIndex: number;
  selectedRow: number | null;
  rows: any;
}

const Navigation: React.FC<NavigationProps> = ({ id, content, setSelectedRow, itemIndex, selectedRow, rows }) => {
  const [updateUser] = useUpdateUserMutation<UserApiResponse>();
  const [deleteUser] = useDeleteUserMutation<UserApiResponse>();

  const [updateCourse] = useUpdateCourseMutation<CourseApiResponse>();
  const [deleteCourse] = useDeleteCourseMutation<CourseApiResponse>();

  const [deleteLesson] = useDeleteLessonMutation<LessonApiResponse>();
  const [updateLesson] = useUpdateLessonMutation<LessonApiResponse>();

  const handleClick = () => setSelectedRow(itemIndex);

  const deleteSomeData = async () => {
    try {
      switch (content) {
        case AdminNavigationContent.USERS:
          await deleteUser(id);
          break;
        case AdminNavigationContent.COURSES:
          await deleteCourse(id);
          break;
        case AdminNavigationContent.LESSONS:
          await deleteLesson(id);
          break;
      }

      window.location.reload();
    } catch (error: any) {
      alert(ExceptionType.DB_CONNECT_NOT_CONNECTED);
      console.error(error.message);
    }
  };

  const updateSomeData = async () => {
    try {
      const item = rows.find((el: any) => el.user_id === id || el.course_id === id);

      switch (content) {
        case AdminNavigationContent.USERS:
          await updateUser({ id, ...item });
          break;
        case AdminNavigationContent.COURSES:
          await updateCourse({ id, ...item });
          break;
        case AdminNavigationContent.LESSONS:
          await updateLesson({ id, ...item });
          break;
      }

      window.location.reload();
      setSelectedRow(null);
    } catch (error: any) {
      alert(ExceptionType.DB_CONNECT_NOT_CONNECTED);
      console.error(error.message);
    }
  };

  const revert = () => setSelectedRow(null);

  return (
    <TableCell align="right" className={style.navigation}>
      {selectedRow === itemIndex && (
        <IconButton className={style.actionbtn} onClick={revert} aria-label="revert">
          <RestartAlt />
        </IconButton>
      )}

      <IconButton className={style.deletebtn} aria-label="delete" onClick={deleteSomeData}>
        <Delete />
      </IconButton>

      {selectedRow !== itemIndex ? (
        <IconButton className={style.actionbtn} aria-label="create" onClick={handleClick}>
          <Create />
        </IconButton>
      ) : (
        <IconButton className={style.actionbtn} onClick={updateSomeData} aria-label="save">
          <Save />
        </IconButton>
      )}
    </TableCell>
  );
};

export default Navigation;
