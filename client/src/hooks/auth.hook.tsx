import { useState, useCallback, useEffect } from "react";
import Cookies from "cookies-ts";

const cookies = new Cookies();

export const useAuth = () => {
  const [token, setToken] = useState<string | null>(null);

  const logout = useCallback(() => {
    cookies.remove("access_token");
    setToken(null);
  }, []);

  const login = useCallback(() => {
    const token = cookies.get("access_token");
    setToken(token);
  }, []);

  useEffect(() => {
    login();
  }, []);

  return { login, logout, token };
};
