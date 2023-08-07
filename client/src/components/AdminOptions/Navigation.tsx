import React from "react";
import { TableCell, IconButton } from "@mui/material";
import { RestartAlt, Create, Save, Delete } from "@mui/icons-material";
import {
  useDeleteUserMutation,
  useUpdateUserMutation,
} from "../../services/user";
import {
  useDeleteCourseMutation,
  useUpdateCourseMutation,
} from "../../services/course";

import style from "./style.module.scss";

interface NavigationProps {
  id: string;
  content: string;
  setSelectedRow: (param: any) => void;
  itemIndex: number;
  selectedRow: number | null;
  rows: any;
}

const Navigation: React.FC<NavigationProps> = ({
  id,
  content,
  setSelectedRow,
  itemIndex,
  selectedRow,
  rows,
}) => {
  const [updateUser] = useUpdateUserMutation();
  const [deleteUser] = useDeleteUserMutation();

  const [updateCourse] = useUpdateCourseMutation();
  const [deleteCourse] = useDeleteCourseMutation();

  const handleClick = () => {
    setSelectedRow(itemIndex);
  };

  const deleteSomeData = async () => {
    try {
      if (content === "user") await deleteUser(id);
      else await deleteCourse(id);

      window.location.reload();
    } catch (error: any) {
      alert("Network error. Please refresh the page");
      console.error(error.message);
    }
  };

  const updateSomeData = async () => {
    try {
      const item = rows.find(
        (el: any) => el.user_id === id || el.course_id === id,
      );

      if (content === "user") await updateUser({ id, ...item });
      else await updateCourse({ id, ...item });

      window.location.reload();
      setSelectedRow(null);
    } catch (error: any) {
      alert("Network error. Please refresh the page");
      console.error(error.message);
    }
  };

  const revert = () => {
    setSelectedRow(null);
  };

  return (
    <TableCell align="right" className={style.navigation}>
      {selectedRow === itemIndex && (
        <IconButton
          className={style.actionbtn}
          onClick={revert}
          aria-label="revert"
        >
          <RestartAlt />
        </IconButton>
      )}

      <IconButton
        className={style.deletebtn}
        aria-label="delete"
        onClick={deleteSomeData}
      >
        <Delete />
      </IconButton>

      {selectedRow !== itemIndex ? (
        <IconButton
          className={style.actionbtn}
          aria-label="create"
          onClick={handleClick}
        >
          <Create />
        </IconButton>
      ) : (
        <IconButton
          className={style.actionbtn}
          onClick={updateSomeData}
          aria-label="save"
        >
          <Save />
        </IconButton>
      )}
    </TableCell>
  );
};

export default Navigation;
