import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import style from './style.module.scss';
import { useGetUserMutation } from '../../services/user';
import { TextField } from '@mui/material';

function AuthPage() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [getUser, { isSuccess }] = useGetUserMutation();
  const [value, setValue] = useState({});

  useEffect(() => {
    if (isSuccess) {
      login();
      navigate('/');
    }
  }, [isSuccess, login, navigate]);

  async function sendRequest() {
    try {
      await getUser(value);
    } catch (err) {
      console.error(err);
    }
  }

  function changeInputValue(event) {
    setValue({ ...value, [event.target.name]: event.target.value });
  }

  return (
    <>
      <Header />

      <div className={style.wrapper}>
        <div className={style.loginForm}>
          <h1>Login</h1>
          <TextField onChange={changeInputValue} name="email" label="Your email" variant="outlined" />
          <TextField onChange={changeInputValue} name="pwd" label="Your password" variant="outlined" />
          <div onClick={sendRequest} className={style.btn}>
            Login
          </div>
        </div>

        <div className={style.image}></div>
      </div>

      <Footer />
    </>
  );
}

export default AuthPage;
