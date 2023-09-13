import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { SelectChangeEvent } from '@mui/material';
import { UserRoles } from '@constants/options';

interface SelectRoleProps {
  name: string;
  value: string;
  handleChange: (event: SelectChangeEvent<string>) => void;
}

const SelectRole: React.FC<SelectRoleProps> = ({ name, value, handleChange }) => {
  return (
    <FormControl>
      <InputLabel>Role</InputLabel>
      <Select name={name} value={value} label={name} onChange={handleChange}>
        {UserRoles.map(({ value, label }) => (
          <MenuItem key={value} value={value}>
            {label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectRole;
