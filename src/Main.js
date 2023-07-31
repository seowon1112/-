import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import SignIn from './SignIn.js';
import Link from '@mui/material/Link';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';

export default function Main() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // 기본 동작 취소
      handleClickOpen();
    }
  };

  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
  
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', height: '100vh' }}>
      <div>
        {/* "취약" 제목 추가 */}
        <Typography variant="h4" component="h1" align="center" gutterBottom style={{ marginTop: 150 }} fontSize="89.4pt" color="white">
          取취약
        </Typography>
        {/* "백신" 부제 추가 */}
        <Typography variant="h5" component="h2" align="center" fontSize="35pt" color="white">
          백신을 취하다.
        </Typography>

        <Dialog
          open={open}
          onClose={handleClose}
          PaperProps={{
            style: {
              backgroundColor: 'transparent',
              boxShadow: 'none',
            },
          }}
        >
          <SignIn />
        </Dialog>
      </div>
    </div>
  );
}
