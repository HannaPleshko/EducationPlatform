import React from 'react';
import { useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import Cookies from 'cookies-ts';

import { User, Role } from '@Interfaces';

const cookies = new Cookies();

const useRedirect = () => {
  const navigate = useNavigate();

  return (isRegistration: boolean) => {
    if (isRegistration) {
      navigate('/auth');
      return;
    }

    const token = cookies.get('access_token');
    if (!token) return;

    const { role }: User = jwt_decode(token);

    switch (role) {
      case Role.ADMIN:
        navigate('/admin');
        break;

      case Role.TEACHER:
        navigate('/teacher');
        break;

      default:
        navigate('/');
        break;
    }
  };
};

export default useRedirect;
