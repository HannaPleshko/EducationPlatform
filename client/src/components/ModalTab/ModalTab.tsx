import React, { useState } from 'react';
import { Button, Modal, TextField } from '@mui/material';

import { useCreateUserMutation, useCreateCourseMutation, useCreateLessonMutation } from '@services';
import { AdminNavigationContent } from '@Interfaces';
import { ExceptionType } from '@constants/message';

import style from './style.module.scss';

interface ModalTabProps {
  open: any;
  handleClose: () => void;
  fields: string[];
  content: string;
}

const ModalTab: React.FC<ModalTabProps> = ({ open, handleClose, fields, content }) => {
  const [createUser] = useCreateUserMutation();
  const [createCourse] = useCreateCourseMutation();
  const [createLesson] = useCreateLessonMutation();

  const [inp, setInp] = useState<Record<string, string>>({});

  const create = async () => {
    try {
      if (content === AdminNavigationContent.USERS) await createUser(inp);
      else if (content === AdminNavigationContent.COURSES) await createCourse(inp);
      else if (content === AdminNavigationContent.LESSONS) await createLesson(inp);

      window.location.reload();
    } catch (e: any) {
      alert(ExceptionType.DB_CONNECT_NOT_CONNECTED);
      console.error(e.message);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInp(prevState => ({ ...prevState, [name]: value }));
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <div className={style['wrapper']}>
        <h1>CREATE {content}</h1>

        {fields.slice(1).map((el, index) => (
          <div key={index} className={style['input']}>
            <TextField name={el} onChange={handleInputChange} variant="standard" label={el} value={inp[el] || ''} />
          </div>
        ))}

        <div>
          <Button onClick={create} variant="outlined">
            CREATE
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default ModalTab;
