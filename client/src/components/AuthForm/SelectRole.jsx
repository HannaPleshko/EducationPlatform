import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

function SelectRole({ name, value, onChange }) {

    const roles = [
        { value: 1, label: 'Student' },
        { value: 2, label: 'Teacher' },
    ];

    return (
        <FormControl>
            <InputLabel>Role</InputLabel>
            <Select name={name} value={value} label={name} onChange={onChange}>
                {roles.map(({ value, label }) => (
                    <MenuItem key={value} value={value}>{label}</MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}

export default SelectRole;