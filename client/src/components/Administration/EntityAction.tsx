import React from 'react';
import { TableCell, IconButton } from '@mui/material';
import { RestartAlt, Create, Save, Delete } from '@mui/icons-material';
import { AdminNavigationContent } from '@interface';
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
import ConsecutiveSnackbars from '@components/Snackbar/Snackbar';

interface NavigationProps {
  id: string;
  content: string;
  setSelectedRow: (param: any) => void;
  itemIndex: number;
  selectedRow: number | null;
  rows: any;
}

const EntityAction: React.FC<NavigationProps> = ({ id, content, setSelectedRow, itemIndex, selectedRow, rows }) => {
  const [updateUser, { isSuccess: isUpdateUser, isError: isErrorUpdateUser }] = useUpdateUserMutation();
  const [deleteUser, { isSuccess: isDeleteUser, isError: isErrorDeleteUser }] = useDeleteUserMutation();

  const [updateCourse, { isSuccess: isUpdateCourse, isError: isErrorUpdateCourse }] = useUpdateCourseMutation();
  const [deleteCourse, { isSuccess: isDeleteCourse, isError: isErrorDeleteCourse }] = useDeleteCourseMutation();

  const [deleteLesson, { isSuccess: isUpdateLesson, isError: isErrorUpdateLesson }] = useDeleteLessonMutation();
  const [updateLesson, { isSuccess: isDeleteLesson, isError: isErrorDeleteLesson }] = useUpdateLessonMutation();

  if (isUpdateUser || isDeleteUser || isUpdateCourse || isDeleteCourse || isUpdateLesson || isDeleteLesson) {
    window.location.reload();
    setSelectedRow(null);
  }

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
    } catch (error: any) {
      alert(ExceptionType.SERVER_CONNECT_NOT_CONNECTED);
      console.error(error.message);
    }
  };

  const updateSomeData = async () => {
    try {
      const item = rows.find((el: any) => el.user_id === id || el.course_id === id);

      switch (content) {
        case AdminNavigationContent.USERS:
          await updateUser(item);
          break;
        case AdminNavigationContent.COURSES:
          await updateCourse(item);
          break;
        case AdminNavigationContent.LESSONS:
          await updateLesson(item);
          break;
      }
    } catch (error: any) {
      alert(ExceptionType.SERVER_CONNECT_NOT_CONNECTED);
      console.error(error.message);
    }
  };

  const revert = () => setSelectedRow(null);

  return (
    <>
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
      {isErrorUpdateUser || isErrorDeleteUser || isErrorUpdateCourse || isErrorDeleteCourse || isErrorUpdateLesson || isErrorDeleteLesson ? (
        <ConsecutiveSnackbars message={'Something went wrong...'} />
      ) : null}
    </>
  );
};

export default EntityAction;
