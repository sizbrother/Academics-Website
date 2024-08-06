import React from "react";

import { Button } from "@mui/material";
import classes from './Home.module.css'
import WebImage from "../componenet/WebImage";
import Stack from '@mui/material/Stack';
import { useNavigate } from "react-router-dom";




export default function Home(){
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
    let path = "../search"; 
    navigate(path);
    }
    return(
 
            <div className={classes.parent}>
                <h1 id="home_page"></h1>
                <div className={classes.child}>
                    <WebImage alt="a decorative tree"/>
                </div>
                
                <p className = {classes.text} id="our mission">Our mission is to promote the work of women 
                in Mormon Studies, a diverse group of experts that includes women of all racial/ethnic 
                identities, countries of origin and residence, sexual orientations, gender identities 
                and expressions, religious identities, academic backgrounds, and institutional contexts. 
                We connect scholars, researchers, and journalists with women Mormon Studies experts to 
                cite in articles and include in syllabi, events, and projects. We also provide resources 
                to help women in Mormon Studies amplify their voices in academic contexts as well as 
                traditional and new media venues.
                <Stack direction="column" spacing={2}>

                <Button sx={{ color: '#008000', fontSize: 20, fontWeight: 'bold', marginTop: 10, marginLeft: 25, border: 2, borderColor: '#000000', width: '300px' }}
                 onClick={routeChange}
                > 
                FIND AN EXPERT! </Button>

                <p className = {classes.text2}> 
                Visitors are encouraged to register as Experts or Users. Registering as an Expert will allow a user to have their information displayed in the "Find an Expert" section. 
                Users will be able to save their preferred searches and will be notified whenever an Expert that matches their preferences registers. 
                </p>
                
                </Stack>

                </p>

           
                
            </div>
   
        
     
    )
}