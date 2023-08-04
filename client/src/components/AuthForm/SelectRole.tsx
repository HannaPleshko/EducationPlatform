import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { SelectChangeEvent } from "@mui/material";

interface SelectRoleProps {
  name: string;
  value: string;
  handleChange: (event: SelectChangeEvent<string>) => void;
}

const SelectRole: React.FC<SelectRoleProps> = ({
  name,
  value,
  handleChange,
}) => {
  const roles = [
    { value: "1", label: "Student" },
    { value: "2", label: "Teacher" },
  ];

  return (
    <FormControl>
      <InputLabel>Role</InputLabel>
      <Select name={name} value={value} label={name} onChange={handleChange}>
        {roles.map(({ value, label }) => (
          <MenuItem key={value} value={value}>
            {label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectRole;
