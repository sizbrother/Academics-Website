import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import WebImage from '../componenet/WebImage';
import { useNavigate } from "react-router-dom";
import { Email } from '@mui/icons-material';



const theme = createTheme({palette:
    {
        primary:{main:"#008000"},
        // secondary:{main:"yellow"}
    },
});

export default function Register() {

    let navigate = useNavigate(); 
    const routeExpertChange = () =>{ 
    let path = "../registerexpertdetail"; 
    navigate(path);
    }

    const routeUserChange = () =>{ 
      let path = "../registeruserdetail"; 
      navigate(path);
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
            height: 650
          }}
        >
          
          <Typography component="h1" variant="h5">
          <WebImage alt="a decorative tree"/>
          </Typography>

          <Box component="form" noValidate sx={{ mt: 1 }}>


            <Button
              //if (userType == )
              onClick={routeExpertChange}
              //onClick={routeExpertChange}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 ,color: 'white', marginTop: "25%"}}
            >
              Register As An Expert
            </Button>

            <Button
              //if (userType == )
              onClick={routeUserChange}
              
              //onClick={routeExpertChange}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 ,color: 'white'}}
            >
              Register As A User
            </Button>
            

            
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
