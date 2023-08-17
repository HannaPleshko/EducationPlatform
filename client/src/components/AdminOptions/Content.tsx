import React, { useEffect, useState } from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';

import { useGetUsersQuery, useGetCoursesQuery } from '@services';
import Navigation from './Navigation';
import ModalTab from '@Components/ModalTab/ModalTab';
import { User, Course, UserGridApiResponse, AdminNavigationContent } from '@Interfaces';
import { ExceptionType } from '@constants/message';

import style from './style.module.scss';

interface ContentProps {
  curOption: string;
}

const Content: React.FC<ContentProps> = ({ curOption }) => {
  const { data: users } = useGetUsersQuery<UserGridApiResponse>({});
  const { data: courses } = useGetCoursesQuery<UserGridApiResponse>({});

  const [fields, setFields] = useState<string[]>([]);
  const [rows, setRows] = useState<Course[] | User[]>([]);
  const [selectedRow, setSelectedRow] = useState<number | null>(null);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const getSomeData = async () => {
    try {
      if (curOption === AdminNavigationContent.USERS) {
        if (!users) return;

        const { fields, rows } = users;
        setFields(fields);
        setRows(rows);
      } else if (curOption === AdminNavigationContent.COURSES) {
        if (!courses) return;

        const { fields, rows } = courses;
        setFields(fields);
        setRows(rows);
      }
    } catch (e: any) {
      alert(ExceptionType.DB_CONNECT_NOT_CONNECTED);
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
  }, [curOption, users, courses]);

  return (
    <div className={style['wrapper']}>
      <div className={style['content-head']}>
        <h3>Administration</h3>

        <div className={style['icon']}>
          <IconButton color="primary" onClick={handleOpen} aria-label="add to shopping cart">
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
                    id={(item as User).user_id || (item as Course).course_id}
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
      ) : null}

      {open ? <ModalTab fields={fields} content={curOption} open={open} handleClose={handleClose} /> : null}
    </div>
  );
};

export default Content;
