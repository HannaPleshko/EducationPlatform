import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
        <div className={style.sign}>Sign Out</div>
      </div>
    );
  }

  return (
    <div className={style.btns}>
      <Link to="/auth">
        <div className={style.login}>Login →</div>
      </Link>

      <Link to="/reg">
        <div className={style.sign}>Sign Up</div>
      </Link>
    </div>
  );
};

export default AuthButton;
