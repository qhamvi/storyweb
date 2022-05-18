import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import React, { useEffect, useState } from "react";


const theme = createTheme();

export default function SignUp() {


  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     username: data.get('username'),
  //     password: data.get('password'),
  //   });
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const res = await axios.post("/users/members", {
  //     username,
  //     password
  //   });
  //   console.log(res)
  // };
  console.log(username.length)
  let er1,er2 ;
  if(username.length < 5)
  {
    er1 = 'Độ dài username phải lớn hơn 5' ;
  }
  else {
    er1 = '';
  }
  if(password.length <5 )
  {
    er2 ='Độ dài password phải lớn hơn 5' ;
  }
  else {
    er2 = '';
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("/users/members", {
        username,
        password
      });
      res.data && window.location.replace("/login")
    }
    catch(err)
    {
      setError(true);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            justifyContent:'center',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Đăng kí
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Tên tài khoản"
              name="text"
              autoComplete="current-username"
              // autoFocus
              onChange={e=> setUsername(e.target.value)}

            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Mật khẩu"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={e=> setPassword(e.target.value)}

            />
           
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            {/* {error && <span>Something went wrong!</span>} */}
           
            {error && <span style={{color: "red", justify:'center'}}> {er1} <br/> {er2}</span>}
          

          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}