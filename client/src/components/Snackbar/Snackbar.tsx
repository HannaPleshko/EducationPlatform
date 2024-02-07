import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import { Alert } from '@mui/material';

interface ConsecutiveSnackbarsProps {
  message: string;
}

const ConsecutiveSnackbars: React.FC<ConsecutiveSnackbarsProps> = ({ message }) => {
  const [open, setOpen] = React.useState(true);

  return (
    <div>
      <Snackbar open={open} autoHideDuration={3000} onClose={() => setOpen(false)}>
        <Alert style={{ border: '1px solid #d32f2f', borderRadius: '3px' }} severity="error">
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default ConsecutiveSnackbars;
