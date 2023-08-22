import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

import { AuthContext } from '@context/AuthContext';
import style from './style.module.scss';

const AuthButton = () => {
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useContext(AuthContext);

  if (isAuthenticated) {
    return (
      <div
        onClick={() => {
          logout();
          navigate('/');
        }}
      >
        <Button className={style.sign} variant="outlined">
          Sign Out
        </Button>
      </div>
    );
  }

  return (
    <div className={style.btns}>
      <Link to="/auth">
        <Button className={style.login} variant="text">
          Login →
        </Button>
      </Link>

      <Link to="/reg">
        <Button className={style.sign} variant="outlined">
          Sign Up
        </Button>
      </Link>
    </div>
  );
};

export default AuthButton;
