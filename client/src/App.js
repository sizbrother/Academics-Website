import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import React, {useEffect, useState, Fragment} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams
} from "react-router-dom";
import MainNavigation from "./componenet/MainNav.js";
import Search from "./componenet/Search.js";
import Home from "./pages/Home";
import Register from "./pages/Register.js";
import Signin from "./pages/Signin.js";
import Admin from "./pages/Admin.js";
import Expert from "./pages/RegisterExpertDetail";
import User from "./pages/RegisterUserDetail";
import ExpEdit from "./pages/ExpertEdit";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import Box from '@mui/material/Box';
import EmailIcon from '@mui/icons-material/Email';
import PersonSharpIcon from '@mui/icons-material/PersonSharp';
import ExpertPage from "./pages/ExpertPage.js";


function App() {
  // Stores backend data in backen var
  const [backend, setBackendData] = useState([{}])

  useEffect (() => {
    // Fetches the data as an array of bytes and converts to strea
    fetch("https://womenmormonstudies-server.herokuapp.com/api/Experts").then((response) => {
      const body = response.body
      const reader = body.getReader();
      
      return new ReadableStream({
        start(controller) {
          // The following function handles each data chunk
          async function push() {
            // "done" is a Boolean and value a "Uint8Array"
            reader.read().then(({ done, value }) => {
              // If there is no more data to read
              if (done) {
                controller.close();
                return;
              }
              // Get the data and send it to the browser via the controller
              controller.enqueue(value);
              push();
            });
          }
  
          push();
        },
      })
      
    }).then((stream) => {
      // Converts stream into string
      return new Response(stream, { headers: { 'Content-Type': 'text/html' } }).text()
    }).then((result) => {
      // Parses string and conversts to data map object
      const dataMap = JSON.parse(result);
      setBackendData(dataMap)
    })
  }, [])


  const [backendForUnconfirmed, setBackendDataForUnconfirmed] = useState([{}])


  useEffect (() => {
    // Fetches the data as an array of bytes and converts to strea
    fetch("https://womenmormonstudies-server.herokuapp.com/api/UnconfirmedExperts").then((response) => {
      const body = response.body
      const reader = body.getReader();
      
      return new ReadableStream({
        start(controller) {
          // The following function handles each data chunk
          async function push() {
            // "done" is a Boolean and value a "Uint8Array"
            reader.read().then(({ done, value }) => {
              // If there is no more data to read
              if (done) {
                controller.close();
                return;
              }
              // Get the data and send it to the browser via the controller
              controller.enqueue(value);
              push();
            });
          }
  
          push();
        },
      })
      
    }).then((stream) => {
      // Converts stream into string
      return new Response(stream, { headers: { 'Content-Type': 'text/html' } }).text()
    }).then((result) => {
      // Parses string and conversts to data map object
      const dataMap = JSON.parse(result);
      setBackendDataForUnconfirmed(dataMap)
    })
  }, [])

  const [userbackend, setuserBackendData] = useState([{}])

  useEffect (() => {
    // Fetches the data as an array of bytes and converts to strea
    fetch("https://womenmormonstudies-server.herokuapp.com/api/Users").then((response) => {
      const body = response.body
      const reader = body.getReader();

      return new ReadableStream({
        start(controller) {
          // The following function handles each data chunk
          async function push() {
            // "done" is a Boolean and value a "Uint8Array"
            reader.read().then(({ done, value }) => {
              // If there is no more data to read
              if (done) {
                controller.close();
                return;
              }
              // Get the data and send it to the browser via the controller
              controller.enqueue(value);
              push();
            });
          }

          push();
        },
      })

    }).then((stream) => {
      // Converts stream into string
      return new Response(stream, { headers: { 'Content-Type': 'text/html' } }).text()
    }).then((result) => {
      // Parses string and conversts to data map object
      const dataMap = JSON.parse(result);
      setuserBackendData(dataMap)
    })
  }, [])

  console.log(userbackend)
  return (

    <Box sx ={{height:1,width:1}}>
      


      {(typeof(backend) === 'undefined') ?
      (
        <p>Loading...</p>
      ):
      (
        <Router>
        <Fragment>
          <MainNavigation/>
          <Routes>
            <Route exact path='/' element={<Home/>}>
              {/* <Route exact path='/' element={<Home/>}/> */}
            </Route>
            <Route exact path='/search' element={<Search details={backend}/>}/>
            {/* <Route exact path='/login' element={<Login/>}/> */}
            <Route exact path='/register' element={<Register/>}/>
            <Route exact path='/signin' element={<Signin/>}/>
            <Route exact path='/admin/newell/742000/12252000' element={<Admin details = {backend} detailsOfUnconfirmed = {backendForUnconfirmed} users = {userbackend}/>}/>
            <Route exact path='/registerexpertdetail' element={<Expert/>}/>
            <Route exact path='/expertedit' element={<ExpEdit/>}/>
            <Route exact path='/registeruserdetail' element={<User/>}/>
            <Route exact path='/expertpage/:id' element={<ExpertPage/>}/>

          
          </Routes>
        </Fragment>
      </Router>
      )}

    <Paper elevation={24}>
    
        <BottomNavigation showLabels sx={{ width: 1, height :200, bgcolor:"#194D33" }}>
          
          <BottomNavigationAction label = "womenmormonstudies@gmail.com" sx={{ color: "white" }} icon ={<EmailIcon sx={{padding: '5%'}}/>}></BottomNavigationAction>

            <BottomNavigationAction href= "https://twitter.com/WomeninMoStud" sx={{ color: "white" }} label="Our Twitter" icon = {<TwitterIcon sx={{padding: '5%'}}/>}/>
            <BottomNavigationAction href = "https://www.facebook.com/womenmormonstudies/" sx={{ color: "white" }} label="Our Facebook" icon = {<FacebookIcon sx={{padding: '5%'}}/>}/>
          </BottomNavigation>
          </Paper>
    </Box>
    
  )


}

export default App;