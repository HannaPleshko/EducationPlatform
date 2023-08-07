import React, { useState } from 'react';
import { Button, Modal, TextField } from '@mui/material';
import style from './style.module.scss';
import { useCreateUserMutation } from "../../services/user";
import { useCreateCourseMutation } from "../../services/course";
interface ModalTabProps {
    open: any; handleClose: () => void; fields: string[]; content: string;
}

const ModalTab: React.FC<ModalTabProps> = ({ open, handleClose, fields, content }) => {
    const [createUser] = useCreateUserMutation();
    const [createCourse] = useCreateCourseMutation();

    const [inp, setInp] = useState<Record<string, string>>({});

    const create = async () => {
        try {
            if (content === 'user') await createUser(inp)
            else await createCourse(inp)

            window.location.reload();
        } catch (e: any) {
            alert('Network error. Please refresh the page');
            console.error(e.message);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setInp(prevState => ({...prevState, [name]: value }));
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