import { useState, useCallback } from 'react';
import Cookies from 'js-cookie';

export const useAuth = () => {
  const [token, setToken] = useState(null);

  const login = useCallback(() => {
    const token = Cookies.get('access_token');
    console.log(token);
    setToken(token);
  }, []);

  const logout = useCallback(() => {
    Cookies.remove('access_token');
    setToken(null);
  }, []);

  return { login, logout, token };
};
