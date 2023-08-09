import React from 'react';
import { AdminNavigation } from '@Interfaces';

interface HeaderProps {
  option: AdminNavigation;
  setCurOption: (param: string) => void;
}

const Options: React.FC<HeaderProps> = ({ option, setCurOption }) => {
  return <p onClick={() => setCurOption(option)}>{option}</p>;
};

export default Options;
