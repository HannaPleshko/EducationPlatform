import React, { useEffect, useState } from 'react';

import { useGetUsersQuery } from "../../services/user";
import { useGetCoursesQuery } from "../../services/course";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import style from "./style.module.scss";
import Navigation from './Navigation';

interface ContentProps {
    curOption: string;
}

interface IUser {
    user_id: string;
    name: string;
    surname: string;
    email: string;
    pwd: string;
    prevPwd?: string;
    role: number;
}

interface ICourse {
    course_id: string;
    title: string;
}

interface TabPreview {
    fields: string[];
    rows: ICourse[] | IUser[]
}

const Content: React.FC<ContentProps> = ({ curOption }) => {
    const { data: users } = useGetUsersQuery({})
    const { data: courses } = useGetCoursesQuery({})

    const [fields, setFields] = useState<string[]>([]);
    const [rows, setRows] = useState<ICourse[] | IUser[]>([]);
    const [selectedRow, setSelectedRow] = useState<number | null>(null);
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const getSomeData = async () => {
        try {
            if (curOption === 'user') {
                if (!users) return
    
                const { fields, rows } = users as TabPreview;
                setFields(fields);
                setRows(rows as IUser[]);
            } else if (curOption === 'course') {
                if (!courses) return
    
                const { fields, rows } = courses as TabPreview;
                setFields(fields);
                setRows(rows as ICourse[]);
            }
        } catch (e: any) {
            alert('Network error. Please refresh the page');
            console.error(e.message);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, rowIndex: number) => {
        const { name, value } = e.target;

        setRows(prevState => {
            const updatedInp: any = [...prevState];
            updatedInp[rowIndex] = { ...updatedInp[rowIndex], [name]: value };
            return updatedInp;
        });
    };

    useEffect(() => {
        getSomeData();
    }, [curOption]);

    return (
        <div className={style['wrapper']}>
            <div className={style['content-head']}>
                <h1>Notes</h1>

                <div className={style['icon']}>
                    <IconButton color="primary" onClick={handleOpen} aria-label="add to shopping cart" />
                    <IconButton color="primary" aria-label="add to shopping cart">
                        <AddShoppingCartIcon />
                    </IconButton>
                </div>
            </div>

            {fields.length ? (
                <TableContainer className={style['content-body']} component={Paper}>
                    <Table stickyHeader>
                        <TableHead>
                            <TableRow>
                                {fields.map((el, keyIndex) => (
                                    <TableCell className={style['table-cell']} key={keyIndex}>
                                        {el}
                                    </TableCell>
                                ))}

                                <TableCell style={{ textAlign: 'end' }} className={style['table-cell']}>
                                    Navigation
                                </TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {rows.map((item, itemIndex) => (
                                <TableRow className={style['table-row']} key={itemIndex}>
                                    {fields.map((key, keyIndex) => (
                                        <TableCell key={keyIndex} component="th" scope="row">
                                            <input
                                                onChange={e => handleInputChange(e, itemIndex)}
                                                className={style[itemIndex !== selectedRow || key === 'id' ? 'off-inp' : 'on-inp']}
                                                disabled={itemIndex !== selectedRow || key === 'id'}
                                                value={(rows[itemIndex] as any)[key]}
                                                name={key}
                                            />
                                        </TableCell>
                                    ))}

                                    <Navigation
                                        key={itemIndex}
                                        id={(item as IUser).user_id || (item as ICourse).course_id}
                                        itemIndex={itemIndex}
                                        content={curOption}
                                        setSelectedRow={setSelectedRow}
                                        selectedRow={selectedRow}
                                        rows={rows}
                                    />
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            ) : (
                <p>Network error. Please refresh the page</p>
            )}

            {/* {open ? <ModalTab keys={fields} content={curOption} open={open} handleClose={handleClose} /> : null} */}
        </div>
    )
}

export default Content