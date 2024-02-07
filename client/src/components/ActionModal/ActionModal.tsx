import React, { useState } from 'react';
import { Button, Modal, TextField } from '@mui/material';

import { useCreateUserMutation, useCreateCourseMutation, useCreateLessonMutation } from '@services';
import { AdminNavigationContent } from '@interface';

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

  const checkDescription = () => {
    if (inp.description.length < 150) throw new Error('The description must be at least 150 characters.');
    if (inp.description.length > 300) throw new Error('The description must not exceed 400 characters.');
  };

  const create = async () => {
    try {
      switch (content) {
        case AdminNavigationContent.USERS:
          await createUser(inp);
          break;
        case AdminNavigationContent.COURSES:
          checkDescription();

          await createCourse(inp);
          break;
        case AdminNavigationContent.LESSONS:
          checkDescription();

          await createLesson(inp);
          break;
      }

      window.location.reload();
    } catch (e: any) {
      alert(e.message);
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
