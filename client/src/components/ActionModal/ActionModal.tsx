import React, { useState } from 'react';
import { Button, Modal, TextField } from '@mui/material';

import { useCreateUserMutation, useCreateCourseMutation, useCreateLessonMutation } from '@services';
import { AdminNavigationContent } from '@Interfaces';
import { ExceptionType } from '@constants/message';

import style from './style.module.scss';

interface ActionModalProps {
  open: any;
  handleClose: () => void;
  fields: string[];
  content: string;
}

const ActionModal: React.FC<ActionModalProps> = ({ open, handleClose, fields, content }) => {
  const [createUser] = useCreateUserMutation();
  const [createCourse] = useCreateCourseMutation();
  const [createLesson] = useCreateLessonMutation();

  const [inp, setInp] = useState<Record<string, string>>({});

  const create = async () => {
    try {
      switch (content) {
        case AdminNavigationContent.USERS:
          await createUser(inp);
          break;
        case AdminNavigationContent.COURSES:
          await createCourse(inp);
          break;
        case AdminNavigationContent.LESSONS:
          await createLesson(inp);
          break;
      }

      window.location.reload();
    } catch (e: any) {
      alert(ExceptionType.SERVER_CONNECT_NOT_CONNECTED);
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

export default ActionModal;