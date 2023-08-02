import { useState, useContext, useEffect } from 'react';

import { useCreateUserMutation, useGetUserMutation } from '../../services/user';
import { AuthContext } from '../../context/AuthContext';
import useRedirect from '../../hooks/useRedirect';

import Input from '../Input/Input';
import SelectRole from './SelectRole';

import style from './style.module.scss';

function AuthForm({ isRegistration }) {
  const [form, setForm] = useState({
    email: '',
    pwd: '',
    name: '',
    surname: '',
    role: 1,
  });

  const redirect = useRedirect();

  const { login } = useContext(AuthContext);

  const [createUser, { isSuccess: isRegistered }] = useCreateUserMutation();
  const [getUser, { isSuccess: isLoggedIn }] = useGetUserMutation();

  const sendRequest = async () => {
    try {
      (await isRegistration) ? await createUser(form) : await getUser(form);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setForm((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  useEffect(() => {
    if (isRegistered || isLoggedIn) {
      login();
      redirect(isRegistration);
    }
  }, [isRegistered, isLoggedIn]);

  return (
    <div className={style.wrapper}>
      <div className={style.loginForm}>
        {isRegistration ? <h1>Sign Up</h1> : <h1>Login</h1>}

        <div className={style.inps}>
          {['email', 'pwd'].map((el, index) => (
            <Input key={index} name={el} value={form[el]} handleChange={handleChange} />
          ))}

          {isRegistration && (
            <>
              {['name', 'surname'].map((el, index) => (
                <Input key={index} name={el} value={form[el]} handleChange={handleChange} />
              ))}

              <SelectRole name="role" value={form.role} onChange={handleChange} />
            </>
          )}
        </div>

        <div onClick={sendRequest} className={style.btn}>
          {isRegistration ? 'Create User' : 'Login'}
        </div>
      </div>

      <div className={style.image}></div>
    </div>
  );
}

export default AuthForm;
