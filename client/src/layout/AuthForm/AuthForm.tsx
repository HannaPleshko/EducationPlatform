import React, { useState, useContext, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AuthContext } from '@context/AuthContext';
import useRedirect from '@hooks/useRedirect';
import Input from '@components/Input/Input';
import SelectRole from './SelectRole';
import { User } from '@Interfaces';
import { useCreateUserMutation, useAuthenticateMutation } from '@services';
import { animation } from '@assets/motion';

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

  const [createUser, { isSuccess: isRegistered }] = useCreateUserMutation();
  const [getUser, { isSuccess: isLoggedIn }] = useAuthenticateMutation();

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
  }, [isRegistered, isLoggedIn]);

  return (
    <motion.div initial="hiddenHorizontal" whileInView="visibleHorizontal" viewport={{ once: true }} className={style.wrapper}>
      <div className={style.loginForm}>
        <motion.h1 custom={1} variants={animation}>
          {' '}
          {isRegistration ? 'Sign Up' : 'Login'}
        </motion.h1>

        <div className={style.inps}>
          {['email', 'pwd'].map((el, index) => (
            <Input key={index} name={el} handleChange={handleChange} />
          ))}

          {isRegistration && (
            <>
              {['name', 'surname'].map((el, index) => (
                <Input key={index} name={el} handleChange={handleChange} />
              ))}

              <SelectRole name="role" value={String(form['role'])} handleChange={handleChange} />
            </>
          )}
        </div>

        <div>
          <Button onClick={sendRequest} className={style.btn} variant="outlined">
            {' '}
            {isRegistration ? 'Create User' : 'Login'}
          </Button>
        </div>
      </div>

      <div className={style.image}></div>
    </motion.div>
  );
};

export default AuthForm;
