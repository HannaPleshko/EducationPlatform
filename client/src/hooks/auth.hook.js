import { useState, useCallback, useEffect } from 'react';
import Cookies from 'js-cookie';

export const useAuth = () => {
  const [token, setToken] = useState(null);

  const logout = useCallback(() => {
    Cookies.remove('access_token');
    setToken(null);
  }, []);

  const login = useCallback(() => {
    const token = Cookies.get('access_token');
    setToken(token);
  }, []);

  useEffect(() => {
    login();
  }, []);

  return { login, logout, token };
};
