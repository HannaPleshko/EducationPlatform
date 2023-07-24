import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import style from './style.module.scss';
import { useGetUserMutation } from '../../services/user';

function AuthPage() {
  const navigate = useNavigate();
  const auth = useContext(AuthContext);
  const [getUser, { data, isLoading, isSuccess, isError }] = useGetUserMutation();
  const [value, setValue] = useState({ });

  if (isSuccess) {
    auth.login(data.token);
  }

  async function sendRequest() {
    try {
      const res = await getUser(value);
      console.log(data);
      if (res.data) {
        navigate('/');
      }

    } catch (err) {

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
          <div>
            <input name="email" onChange={changeInputValue} placeholder="Placeholder email" />
          </div>
          <div>
            <input
              name="pwd"
              type="password"
              onChange={changeInputValue}
              placeholder="Placeholder pwd"
            />
          </div>
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
