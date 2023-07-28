import { TextField } from '@mui/material';

function Input({ name, value, handleChange }) {
    return (
        <TextField value={value || ''} onChange={handleChange}  name={name} label={name} variant="outlined" />
    );
}

export default Input;