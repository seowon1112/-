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

export default function Main() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // 엔터 키를 눌렀을 때 Dialog를 여는 함수 추가
const handleKeyDown = (event) => {
  if (event.key === 'Enter') {
    event.preventDefault(); // 기본 동작 취소
    handleClickOpen();
  }
};


  // 처음 컴포넌트가 렌더링 될 때 keydown 이벤트를 추가하고 컴포넌트가 사라질 때 이벤트를 제거하는 useEffect 추가
  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div>
     
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
  );
}
