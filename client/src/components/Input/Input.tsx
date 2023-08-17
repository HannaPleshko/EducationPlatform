import React from 'react';

import { TextField } from '@mui/material';
import { motion } from 'framer-motion';

import { animation } from '@assets/motion';

interface InputProps {
  name: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ name, handleChange }) => {
  return <TextField onChange={handleChange} name={name} label={name} />;
};

export default Input;
