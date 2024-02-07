import React from 'react';
import { AdminNavigation } from '@interface';
import { Button } from '@mui/material';

interface HeaderProps {
  option: AdminNavigation;
  setCurOption: (param: string) => void;
}

const Options: React.FC<HeaderProps> = ({ option, setCurOption }) => {
  return <Button onClick={() => setCurOption(option)}>{option}</Button>;
};

export default Options;
