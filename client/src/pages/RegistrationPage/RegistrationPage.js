import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import style from './style.module.scss';
import { useCreateUserMutation } from '../../services/user';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField } from '@mui/material';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

function RegistrationPage() {
  const [createUser, { isLoading, isSuccess }] = useCreateUserMutation();
  const [value, setValue] = useState({role: 1});
  const [role, setRole] = useState(1);
  const navigate = useNavigate();

  async function sendRequest() {
    try {
      const res = await createUser(value);
      if (res.data) {
        navigate('/auth');
      }
    } catch (error) { }
  }

  function changeInputValue(event) {
    if (event.target.name === 'role') setRole(event.target.value)

    setValue({
      ...value,
      [event.target.name]: event.target.name === 'role' ? +event.target.value : event.target.value,
    });
  }

  return (
    <>
      <Header />

      <div className={style.wrapper}>
        <div className={style.loginForm}>
          <h1>Sign Up</h1>

          <div className={style.inps}>
            <TextField onChange={changeInputValue} name="name" label="Your name" variant="outlined" />
            <TextField onChange={changeInputValue} name="surname" label="Your surname" variant="outlined" />
            <TextField onChange={changeInputValue} name="email" label="Your email" variant="outlined" />
            <TextField onChange={changeInputValue} name="pwd" label="Your password" variant="outlined" />
            <FormControl>
              <InputLabel>Role</InputLabel>
              <Select
                name="role"
                value={role}
                label="Role"
                onChange={changeInputValue}
              >
                <MenuItem value={1}>Student</MenuItem>
                <MenuItem value={2}>Teacher</MenuItem>
              </Select>
            </FormControl>
          </div>

          <div onClick={sendRequest} className={style.btn}>
            Create User
          </div>
        </div>

        <div className={style.image}></div>
      </div>

      <Footer />
    </>
  );
}

export default RegistrationPage;
