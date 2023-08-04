import { createContext } from "react";

function noop() {}

interface IAuthContext {
  token: null | string;
  login: () => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const defaultValue: IAuthContext = {
  token: null,
  login: noop,
  logout: noop,
  isAuthenticated: false,
};

export const AuthContext = createContext<IAuthContext>(defaultValue);
