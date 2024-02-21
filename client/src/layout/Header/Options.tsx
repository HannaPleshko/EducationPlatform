import React from 'react';
import { AdminNavigation, LandingNavigation } from '@interface';
import { Button } from '@mui/material';

interface HeaderProps {
  option: AdminNavigation | LandingNavigation;
  setCurOption: (param: string) => void;
}

const Options: React.FC<HeaderProps> = ({ option, setCurOption }) => {
  return (
    <a onClick={() => setCurOption(option)} href={`/#${option}`}>
      <Button>{option}</Button>
    </a>
  );
};

export default Options;
