import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import style from './style.module.scss';
import { useCreateUserMutation } from '../../services/user';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function RegistrationPage() {
  const [createUser, { data, isLoading, isSuccess }] = useCreateUserMutation();
  const [value, setValue] = useState({});
  const navigate = useNavigate();


  async function sendRequest() {
    try {
      const res=await createUser(value)
      console.log(res);
      if (res.data) {
        navigate('/auth');
      }

    } catch (error) {

    }
  }

  function changeInputValue(event) {
    setValue({ ...value, [event.target.name]: event.target.name === 'role' ? +event.target.value : event.target.value });
  }

  return (
    <>
      <Header />
      <div className={style.wrapper}>
        <div className={style.loginForm}>
          <h1>Sign Up</h1>
          <div>
            <input name="name" onChange={changeInputValue} placeholder="Placeholder name" />
          </div>

          <div>
            <input name="surname" onChange={changeInputValue} placeholder="Placeholder surname" />
          </div>

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

          <div>
            <input name="role" onChange={changeInputValue} placeholder="Placeholder role" />
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

export default RegistrationPage;
