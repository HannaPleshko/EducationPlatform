import React from 'react';
import { Button } from '@mui/material';

interface HeaderProps {
  option: any;
  setCurOption: (param: string) => void;
}

const Options: React.FC<HeaderProps> = ({ option, setCurOption }) => {
  return (
    <a onClick={() => setCurOption(option.label)} href={option.url}>
      <Button>{option.label}</Button>
    </a>
  );
};

export default Options;
