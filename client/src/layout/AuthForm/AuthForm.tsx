import React, { useState, useContext, useEffect } from 'react';

import { AuthContext } from '@context/AuthContext';
import useRedirect from '@hooks/useRedirect';
import Input from '@components/Input/Input';
import Selector from '@components/Selector/Selector';
import { User } from '@interface';
import { useCreateUserMutation, useAuthenticateMutation } from '@services';
import Snackbar from '@components/Snackbar/Snackbar';

import style from './style.module.scss';
import { Button } from '@mui/material';

interface AuthFormProps {
  isRegistration: boolean;
}

const AuthForm: React.FC<AuthFormProps> = ({ isRegistration }) => {
  const [form, setForm] = useState<User>({
    email: '',
    pwd: '',
    name: '',
    surname: '',
    role: 1,
  });

  const redirect = useRedirect();

  const { login } = useContext(AuthContext);

  const [createUser, { isSuccess: isRegistered, isError: isErrorRegistered }] = useCreateUserMutation();
  const [getUser, { isSuccess: isLoggedIn, isError: isErrorLoggedIn }] = useAuthenticateMutation();

  const sendRequest = async () => {
    try {
      isRegistration ? await createUser(form) : await getUser(form);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e: any) => {
    setForm(prev => {
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
  }, [isRegistered, isLoggedIn, login, redirect, isRegistration]);

  return (
    <>
      <div className={style.wrapper}>
        <div className={style.loginForm}>
          <h1>{isRegistration ? 'Sign Up' : 'Login'}</h1>

          <div className={style.inps}>
            {['email', 'pwd'].map((el, index) => (
              <Input key={index} name={el} handleChange={handleChange} />
            ))}

            {isRegistration && (
              <>
                {['name', 'surname'].map((el, index) => (
                  <Input key={index} name={el} handleChange={handleChange} />
                ))}

                <Selector name="role" value={String(form['role'])} handleChange={handleChange} />
              </>
            )}
          </div>

          <div>
            <Button onClick={sendRequest} className={style.btn} variant="outlined">
              {isRegistration ? 'Create User' : 'Login'}
            </Button>
          </div>
        </div>

        <div className={style.image}></div>
      </div>
      {isErrorRegistered || isErrorLoggedIn ? <Snackbar message={'Something went wrong...'} /> : null}
    </>
  );
};

export default AuthForm;
