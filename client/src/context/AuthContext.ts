import React, { createContext } from "react";

interface IAuthContext {
  token: null | string;
  login: () => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const defaultValue: IAuthContext = {
  token: null,
  login: () => {},
  logout: () => {},
  isAuthenticated: false,
};

export const AuthContext = createContext<IAuthContext>(defaultValue);
