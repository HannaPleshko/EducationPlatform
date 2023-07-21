import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import style from './style.module.scss';
import { useGetUserMutation } from '../../services/user';

function AuthPage() {
  const navigate = useNavigate();
  const [getUser] = useGetUserMutation();
  const [value, setValue] = useState({ email: '', pwd: '' });
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  function sendRequest() {
    getUser(value)
      .then(() => {
        // Успешная авторизация
        setIsAuthenticated(true);
        navigate('/course');
      })
      .catch((error) => {
        // Обработка ошибки авторизации
        setIsAuthenticated(false);
      });
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
          <div>
            <input name="email" onChange={changeInputValue} placeholder="Placeholder email" />
          </div>
          <div>
            <input name="pwd" type="password" onChange={changeInputValue} placeholder="Placeholder pwd" />
          </div>
          <div onClick={sendRequest} className={style.btn}>Login</div>
        </div>
        <div className={style.image}></div>
      </div>
      <Footer />
    </>
  );
}

export default AuthPage;
