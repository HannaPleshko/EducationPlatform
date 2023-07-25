import { useState, useCallback, useEffect } from 'react';
import Cookies from 'js-cookie';

const storageName = 'userData';
export const useAuth = () => {
  const [token, setToken] = useState(null);

  const login = useCallback(() => {
    setToken(Cookies.get('access_token'));
  }, []);

  const logout = useCallback(() => {
    Cookies.remove('access_token');
    setToken(null);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const data = JSON.parse(localStorage.getItem(storageName));
      if (data && data.token) {
        login(data.token);
      }
    };
    fetchData();
  }, [login]);

  return { login, logout, token };
};
