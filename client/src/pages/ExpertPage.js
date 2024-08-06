import * as React from 'react';
import {Box, Button,List, Link, ListItem, Paper} from '@mui/material';
import { json, useParams } from 'react-router-dom';



export default function ExpertPage(){
    let {id} = useParams();

    let [current_user, handleuser] = React.useState(id);


    let user;
        let found = false;

        const requestOptions = { 
          method:'GET',
          
        }; 
        fetch("https://womenmormonstudies-server.herokuapp.com/api/Experts/", requestOptions)
        .then((response)=> {
          return response.json();
        }).then((result) => {
          Object.keys(result).forEach(function(key) {
            if (result[key]._id == id)
            {
                let new_object = result[key];
                found = true
                user = JSON.stringify(new_object)
                handleuser(user)
            }
          })
        })
        let myJSON;
        if (current_user != id){
             myJSON = JSON.parse(current_user)

        }

    return(
        <div >
            {(!myJSON) ?
      (
        <div>Loading...</div>
      ):
        <Box  sx ={{width:1, height:700, bgcolor: "#9EB0A7",display: 'flex'}}>
                <List sx={{margin: 2, width: 1/2, maxWidth: 500, height: 1/2, maxHeight: 200}}>
                <Paper elevation={6}>
                    <ListItem sx= {{ fontWeight: 'bold' }}> About Me </ListItem>

                    <ListItem>Personal: {myJSON.first_name} {myJSON.middle_initial} {myJSON.last_name} </ListItem>
                    <ListItem>Email: {myJSON.email} </ListItem>
                    <ListItem>{myJSON.degree} </ListItem>

                    <ListItem>Media Availability: {myJSON.media_availability}</ListItem>
                    <ListItem> {myJSON.city} {myJSON.satte} {myJSON.country}</ListItem>

                    {(myJSON.website)? (
                      
                    // <ListItem> <Button sx = {{outline_width: "1px", outline_color: "black"}} href = {myJSON.website}> {myJSON.website}</Button> </ListItem>
                    <ListItem>{myJSON.website}</ListItem>

                        ):
                        <p></p>
                        }


                    </Paper>
                </List> 

            <List sx={{margin: 2, width: 1/2, maxWidth: 500, height: 1/2, maxHeight: 200}}>
                <Paper elevation={6}>
                    <ListItem sx= {{ fontWeight: 'bold' }}> Areas of Expertise </ListItem>
                    <ListItem>{myJSON.discipline} </ListItem>
                    <ListItem>{myJSON.time_period} </ListItem>
                    <ListItem>{myJSON.geographic_areas} </ListItem>
                    <ListItem>Methods: {myJSON.methods_approaches} </ListItem>

                    <ListItem>{myJSON.institutional_affiliation} </ListItem>

                    <ListItem>Keywords: {myJSON.keywords} </ListItem>

                    </Paper>
                </List>            
            <List sx={{margin: 2, width: 1/2, maxWidth: 500, height: 1/2, maxHeight: 200}}>
                <Paper elevation={6}>
                <ListItem sx= {{ fontWeight: 'bold' }}>Biography: </ListItem>

                <ListItem>{myJSON.biographical_sketch}</ListItem>


                    </Paper>
                </List>   
                 
        <Button href = "/expertedit"sx ={{color: "green",fontWeight: "bold", height: 1/2, width:1/2, maxHeight: 100, maxWidth: 200, bgcolor:"white", border:2, border_color: "black", mt: "30%"}}>Edit my Page</Button>
        </Box>
            
        }
        </div>
    )

}