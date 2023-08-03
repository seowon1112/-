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
import { useNavigate } from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';


import { NavLink } from "react-router-dom";
import { useState, useEffect } from 'react';

import axios from 'axios';



export default function Register(){
  const navigate = useNavigate();
  const [ranks, setRanks] = useState([]);
  const [units, setUnits] = useState([]);
  const [permissions, setPermissions] = useState([]);
  const [selectedPermission, setSelectedPermission] = useState('');
  const [selectedRanks, setSelectedRanks] = useState('');
  const [selectedUnits, setSelectedUnits] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response_ranks = await axios.get('http://34.134.152.107:8000/api/ranks/getallranks');
        const response_units = await axios.get('http://34.134.152.107:8000/api/units/getallunits');
        const response_permissions = await axios.get('http://34.134.152.107:8000/api/levels/getalllevels');

        if (response_ranks.data && response_units.data && response_permissions.data) {
          setRanks(response_ranks.data.result);
          setUnits(response_units.data.result);
          setPermissions(response_permissions.data.result); // 올바른 변수명을 사용합니다.
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    
    // FormData로 부터 값을 가져옵니다.
    const registerData = {
      id: data.get('serial'),
      name: data.get('name'),
      password: data.get('password'),
      rank_code: data.get('rank'),
      auth_level: data.get('권한'),
      unit_code: data.get('소속 부대'),
    };
    
    // Axios를 사용하여 API 호출을 합니다.
    try {
      console.log(registerData)
      // 서버 URL을 바꾸어야 할 수도 있습니다. 이 부분을 확인해주세요.
      const response = await axios.post('http://34.134.152.107:8000/api/users/register', registerData);
      console.log(response);
  
      if (response.status === 200) {
        // 응답이 성공인 경우, 추가 작업을 수행하세요.
        // 예: 페이지를 변경하거나 상태를 업데이트합니다.
        navigate('/');

        // or
        // history.push('/');
      } else {
        // 응답이 성공이 아닌 경우, 오류 처리를 수행하세요.
        console.error('Error during registration');
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };
  

  const [open, setOpen] = React.useState(true);

  function handleChange3(event) {
    setSelectedPermission(event.target.value);
   
  }
  
  function handleChange2(event) {
  
    setSelectedUnits(event.target.value);
   
  }
  function handleChange(event) {
  
    setSelectedRanks(event.target.value);
   
  }
  
  const classes = useStyles();


  const handleClose = () => {
    setOpen(false);
   //window.location.replace("/"); 이거 돌아가는 거임. dialog 꺼지면.
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
                        //  value={serial}   
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
                          name="name"
                          required
                          fullWidth
                          id="name"
                          label="성명"
                         // value={name}
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
                    
                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          fullWidth
                          id="rank"
                          label="계급"
                          name="rank"
                          value={selectedRanks} // Add this
                          onChange={handleChange} // Add this
                          select
                          className={classes.customTextField}
                          InputLabelProps={{
                            sx: {
                          // set the color of the label when not shrinked
                              color: "white",
                              [`&.${inputLabelClasses.shrink}`]: {
                              // set the color of the label when shrinked (usually when the TextField is focused)
                                color: "white"
                              },
                            },
                          }}
                          sx={{
                            ' .MuiOutlinedInput-root': {
                              color: 'white',
                            },
                          }}>                         
                          {ranks?.map((rank) => (
                            <MenuItem key={1} value={rank.rank_code}>
                              {rank.rank_name}
                            </MenuItem>
                          ))}
                        </TextField>
                      </Grid>


                      <Grid item xs={12} sm={6}>
                       
                            <TextField
                          name="권한"
                          required
                          fullWidth
                          id="permission"
                          label="권한"
                          select
                          className={classes.customTextField}
                          value={selectedPermission} // Add this
                          onChange={handleChange3} // Add this
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
                            >
                            {permissions.map((permission) => (
                              <MenuItem key={3} value={permission.level_code}>
                                {permission.level_name}
                              </MenuItem>
                            ))}
                            </TextField>
                           

                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          required
                          fullWidth
                          id="User ID"
                          label="User ID"
                          name="User ID"
                         // value={userid}
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
                          name="password"
                          label="Password"
                          type="password"
                          id="password"
                          //value = {password}
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
                         
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          required
                          fullWidth
                          id="소속 부대"
                          label="소속 부대"
                          name="소속 부대"
                          select
                          value={selectedUnits} // Add this
                          onChange={handleChange2} // Add this
                          className={classes.customTextField}
                          InputLabelProps={{
                            sx: {
                              // set the color of the label when not shrinked
                              color: "white",
                              [`&.${inputLabelClasses.shrink}`]: {
                                // set the color of the label when shrinked (usually when the TextField is focused)
                                color: "white"
                              },
                            },
                          }}
                          sx={{
                            ' .MuiOutlinedInput-root': {
                              color: 'white',
                            },
                          }}
                        >
                          <MenuItem value="부대1">부대1</MenuItem>
                          <MenuItem value="부대2">부대2</MenuItem>
                          <MenuItem value="부대3">부대3</MenuItem>
                          {units &&units.map((unit) => (
                            <MenuItem key={2} value={unit.unit_code}>
                              {unit.unit_name}
                            </MenuItem>
                          ))}
                          {/* 나머지 부대 항목 추가 */}
                        </TextField>
                      </Grid>

                    </Grid>
                    
                   <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <NavLink
                          to="/"
                          style={{
                            textDecoration: "none",
                            display: "block",
                            width: "100%"
                          }}
                        >
                          <Button
                            fullWidth
                            variant="contained"
                            sx={{
                              mt: 3,
                              mb: 2,
                              bgcolor: "secondary.main",
                              color: "white",
                              "&:hover": {
                                bgcolor: "secondary.dark",
                              },
                            }}
                          >
                            Login
                          </Button>
                        </NavLink>
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