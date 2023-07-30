import * as React from 'react';
import Button from '@mui/material/Button'; // 버튼 디자인 기능
import TextField from '@mui/material/TextField'; // 입력하는 곳(input)기능과 디자인

import SignIn from './SignIn.js';
import Link from '@mui/material/Link'; // 링크 기능.

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function Main() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        取취약
      </Button>
      <Dialog open={open}  onClose={handleClose} PaperProps={{
        style: {
          backgroundColor: "transparent",
          boxShadow: "none"
        }
        }} >
        <SignIn />
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
