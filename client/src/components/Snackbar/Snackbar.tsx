import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import { Alert } from '@mui/material';

export default function ConsecutiveSnackbars() {
  const [open, setOpen] = React.useState(true);

  return (
    <div>
      <Snackbar open={open} autoHideDuration={3000} onClose={() => setOpen(false)}>
        <Alert style={{ border: '1px solid #d32f2f', borderRadius: '3px' }} severity="error">
          This is an error message!
        </Alert>
      </Snackbar>
    </div>
  );
}
