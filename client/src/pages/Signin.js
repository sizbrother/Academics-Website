import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import WebImage from '../componenet/WebImage';
import { useNavigate } from "react-router-dom";
import emailjs from '@emailjs/browser';

const theme = createTheme({palette:
    {
        primary:{main:"#008000"},
        // secondary:{main:"yellow"}
    },
});

export default function Signin() {
  const form = React.useRef()

  let navigate = useNavigate(); 

  const show_user = (id)=> {
    
    let path = "../expertpage/" + id; 
    navigate(path);
  };
  let request = 0;
  const date = new Date;
    // supposed to send get to move based on email
    

  const handleSubmit = (e)=>{
    let email = form.current.email.value;
    let password = form.current.password.value;
    
    const requestOptions = { 
      method:'GET',
      
    }; 
    fetch("https://womenmormonstudies-server.herokuapp.com/api/Experts/", requestOptions)
    .then((response)=> {
      return response.json();
    }).then((result) => {
      let found = false;

      Object.keys(result).forEach(function(key) {
        if (result[key].email == email && result[key].password == password){
          found = true
          if (result[key].email == "qnewell@hamilton.edu"){
            let path = "../admin/newell/742000/12252000"; 
            navigate(path);
          }
          else{
          let id = result[key]._id
          show_user(id)
        }}
      })
      if (!found){
        alert("Email and password not found, try again")
      }
    })
  }
  
  const handleForgotPassword= (e) =>{
 
    const requestOptions = { 
      method:'GET',
      
    }; 
    fetch("https://womenmormonstudies-server.herokuapp.com/api/Experts/", requestOptions)
    .then((response)=> {
      return response.json();
    }).then((result) => {

      const email = form.current.email.value;
      var found = false;
      var password;
      let myJSON = {"email": form.current.email.value, "password": null}


      Object.keys(result).forEach(function(key) {
        if (result[key].email == email)
        {
          found = true
          password = result[key].password
          myJSON["password"] = password
        }
        
      })
      if (!found){
        alert("Couldn't find your email. Input your email, fix the typo, or register as an expert!")
      }
      else
      {
        emailjs.send('service_owv6uf2','password_remember', myJSON, 'p0uNpijVQNgR4VtYC')
        
        alert("Your password was sent to your email")
      }
    })
  }
  
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
          <WebImage alt="a decorative tree"/>
          </Typography>
          <Box component="form" ref = {form} onSubmit = {handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
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
            />
            <Button
                onClick={handleSubmit}
              // type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 ,color: 'white'}}
            >
              Sign In
            </Button>

            <Button
                onClick={handleForgotPassword}
              // type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 ,color: 'white'}}
            >
              Forgot My Password
            </Button>
            
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}