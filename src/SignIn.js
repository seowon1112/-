import * as React from 'react';
import Avatar from '@mui/material/Avatar'; //쉐입을 원형으로 만드는 기능
import Button from '@mui/material/Button'; // 버튼 디자인 기능
import CssBaseline from '@mui/material/CssBaseline'; // 박스 사이즈, 폰트 사이즈 등 기본 구조 세팅.
import TextField from '@mui/material/TextField'; // 입력하는 곳(input)기능과 디자인
import FormControlLabel from '@mui/material/FormControlLabel'; //checkbox, radio group, switch 폼 기능과 디자인
import Checkbox from '@mui/material/Checkbox'; // 체크박스
import Link from '@mui/material/Link'; // 링크 기능.
import Box from '@mui/material/Box'; //박스 만들기. sx 사이즈 등 기본 규격이 있음.
import Grid from '@mui/material/Grid'; // div 배치 간편하게 하는 기능.
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'; //아이콘들 가져오기.
import Typography from '@mui/material/Typography'; // 모르면 바보 ㅋ
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles'; //테마 관련.
import { inputLabelClasses } from "@mui/material/InputLabel";
import { useStyles } from './UseStyle';
import LockIcon from '@mui/icons-material/Lock';
import { Icon, IconButton } from '@mui/material';
import { InputAdornment } from '@mui/material';
import { NavLink } from "react-router-dom";


const defaultTheme = createTheme();

export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };
  const [open, setOpen] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  const classes = useStyles();

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs" >
        <CssBaseline />
        <Box
              component="form"
              noValidate
              autoComplete="off"
          sx={{
         
            marginTop: 30,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
         
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" color="white">
             Login
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >     
              
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="user"
                  label="User"
                  name="user"
                  autoFocus
                  className={classes.customTextField}
                 
              
                  
                    InputLabelProps={{
                    sx: {
                      // set the color of the label when not shrinked
                      color: "white",
                      [`&.${inputLabelClasses.shrink}`]: {
                        // set the color of the label when shrinked (usually when the TextField is focused)
                        color: "white"
                      }
                    }
                    }}
                    
                    sx={{
                      ' .MuiOutlinedInput-root': {
                      color: 'white',
                      },
                    }}
                />
             
          
             
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    className={classes.customTextField}
                    sx={{
                        '& label': {
                            color: 'white', // 레이블 색상 설정
                        },
                        '& label.Mui-focused': {
                            color: 'white', // 포커스된 상태에서 레이블 색상 설정
                        },
                        '& .MuiOutlinedInput-root': {
                            color: 'white', // 입력 텍스트 색상 설정
                        },
                    }}
                    // InputProps={{
                    //     startAdornment: (
                    //         <InputAdornment position="start">
                    //             <IconButton sx={{ color: 'primary.main' }}>
                    //                 <LockIcon></LockIcon>
                    //             </IconButton>
                    //         </InputAdornment>
                    //     ),
                    // }}
                />





                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    mt: 3, 
                    mb: 2,
                    bgcolor: 'secondary.main', // 버튼의 배경색
                    color: 'white', // 버튼의 폰트 색상
                    '&:hover': {
                      bgcolor: 'secondary.dark', // 버튼 호버 시 배경색
                    },
                  }}
                >
                  Sign In
                </Button>
                <Grid container alignItems="center" justifyContent="space-between">
                  <Grid item>
                    <FormControlLabel
                      control={
                        <Checkbox
                          value="remember"
                          style={{
                            color: '#ffffff',
                            '&$checked': {
                              color: '#ffffff',
                            },
                          }}
                        />
                      }
                      label={
                        <Typography style={{ color: '#ffffff' }} variant="body2">
                          Administration Login
                        </Typography>
                      }
                    />
                  </Grid>

                  <Grid item>
                    <Typography align="right" style={{ color: '#ffffff' }}>
                    <NavLink to="/register" style={{ textDecoration: "none", color: "#ffffff" }}>
                      Registration
                    </NavLink>
                    </Typography>
                  </Grid>
                </Grid>

                                              
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
  );
}
