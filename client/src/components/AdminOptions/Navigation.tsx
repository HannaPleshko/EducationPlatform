import React from 'react';
import { TableCell, IconButton } from '@mui/material';
import { RestartAlt, Create, Save, Delete } from '@mui/icons-material';
import { useDeleteUserMutation, useUpdateUserMutation } from "../../services/user";

import style from './style.module.scss';

interface NavigationProps {
    id: string;
    content: string;
    setSelectedRow: (param: any) => void;
    itemIndex: number;
    selectedRow: number | null;
    rows: any
}

const Navigation: React.FC<NavigationProps> = ({ id, content, setSelectedRow, itemIndex, selectedRow, rows }) => {
    const [updateUser] = useUpdateUserMutation();
    const [deleteUser] = useDeleteUserMutation();

    const handleClick = () => {
        setSelectedRow(itemIndex);
    };

    const deleteSomeData = async () => {
        try {
            // content === 'user' ? await deleteUser(id) : null;
            await deleteUser(id)

            window.location.reload();
        } catch (error: any) {
            alert('Network error. Please refresh the page');
            console.error(error.message);
        }
    };

    const updateSomeData = async () => {
        try {
            // TODO FIX UPDATE. send prevpwd ?
            const item = rows.find((el: any) => el.user_id === id);
            // content === 'user' ? await updateUser({id, item}) : null;
            await updateUser({ id, ...item, prevPwd: item.pwd })

            window.location.reload();
            setSelectedRow(null);
        } catch (error: any) {
            alert('Network error. Please refresh the page');
            console.error(error.message);
        }
    };

    const revert = () => {
        setSelectedRow(null);
    };

    return (
        <TableCell align="right" className={style.navigation}>
            {selectedRow === itemIndex && (
                <>
                    <IconButton className={style.actionbtn} onClick={revert} aria-label="revert">
                        <RestartAlt />
                    </IconButton>
                </>
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
}

export default Navigation;