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
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
const defaultTheme = createTheme();
import { useStyles } from './UseStyle';
import { inputLabelClasses } from "@mui/material/InputLabel";
import { useHistory } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { useState }from 'react';

ss


  
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

  
  const classes = useStyles();


  const handleClose = () => {
    setOpen(false);
    window.location.replace("/");
  };
  

  return (
    <div>
       {/* "취약" 제목 추가 */}
       <Typography variant="h4" component="h1" align="center" gutterBottom style={{ marginTop: 150 }} fontSize="89.4pt" color="white">
          取취약
        </Typography>
        {/* "백신" 부제 추가 */}
        <Typography variant="h5" component="h2" align="center" fontSize="35pt" color="white">
          백신을 취하다.
        </Typography>

     
      <Dialog open={open} onClose={handleClose} PaperProps={{
      style: {
        backgroundColor: "transparent",
        boxShadow: "none"
      }
      }}>
         
            <ThemeProvider theme={defaultTheme}>
              <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                  sx={{
                    marginTop: 35,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                   
                  }}
                >
                  <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                  </Avatar>
                  <Typography component="h1" variant="h5" color="white">
                   Registeration
                  </Typography>
                  <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3,}}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6} >
                      <TextField
                          required
                          fullWidth
                          id="serial"
                          label="군번"
                          name="serial"    
                          value={serial}   
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
                            onChange={(event)=> {
                              setSerial(event.target.value);
                            }}
                          />
                      
                      </Grid>
                      <Grid item xs={12} sm={6}>
                       
                            <TextField
                          name="name"
                          required
                          fullWidth
                          id="name"
                          label="성명"
                          value={name}
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
                            onChange={(event)=> {
                              setName(event.target.value);
                            }}
                           />

                      </Grid>
                      <Grid item xs={12} sm={6} >
                      <TextField
                          required
                          fullWidth
                          id="rank"
                          label="계급"
                          name="rank"       
                          
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
                      
                      </Grid>
                      <Grid item xs={12} sm={6}>
                       
                            <TextField
                          name="권한"
                          required
                          fullWidth
                          id="권한"
                          label="권한"
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

                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          required
                          fullWidth
                          id="User ID"
                          label="User ID"
                          name="User ID"
                          value={userid}
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
                            onChange={(event)=> {
                              setUserId(event.target.value);
                            }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          required
                          fullWidth
                          name="password"
                          label="Password"
                          type="password"
                          id="password"
                          value = {password}
                          autoComplete="new-password"
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
                            onChange={(event)=> {
                              setPassword(event.target.value);
                            }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          required
                          fullWidth
                          id="소속 부대"
                          label="소속 부대"
                          name="소속 부대"
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
                      </Grid>
                    </Grid>
                    
                      <Grid container spacing={2}>
                        <Grid item xs={6}>
                          <Button
                            fullWidth
                            variant="contained"
                            component={Link}
                            href="/" // 이 부분에 경로를 설정해주세요.
                            sx={{
                              mt: 3,
                              mb: 2,
                              bgcolor: 'secondary.main',
                              color: 'white',
                              '&:hover': {
                                bgcolor: 'secondary.dark',
                              },
                            }}
                          >
                            Login
                          </Button>
                        </Grid>
                        <Grid item xs={6}>
                          <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{
                              mt: 3,
                              mb: 2,
                              bgcolor: 'secondary.main',
                              color: 'white',
                              '&:hover': {
                                bgcolor: 'secondary.dark',
                              },
                            }}
                          >
                            Register
                          </Button>
                        </Grid>
                      </Grid>



                   
                  </Box>
                </Box>
              </Container>
            </ThemeProvider>
        
      </Dialog>
    </div>
  );
}