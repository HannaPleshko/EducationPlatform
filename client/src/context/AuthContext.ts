import React, { createContext } from 'react';
import { IAuthContext } from '@Interfaces';

const defaultValue: IAuthContext = {
  token: null,
  login: () => {},
  logout: () => {},
  isAuthenticated: false,
};

export const AuthContext = createContext<IAuthContext>(defaultValue);
