import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { SelectChangeEvent } from '@mui/material';
import { UserRoles } from '@constants/options';

interface SelectorProps {
  name: string;
  value: string;
  handleChange: (event: SelectChangeEvent<string>) => void;
}

const Selector: React.FC<SelectorProps> = ({ name, value, handleChange }) => {
  console.log(name);
  console.log(value);

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

export default Selector;
