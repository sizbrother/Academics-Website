import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? 'green' : 'burgundy',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function FormRow() {
  return (
    <React.Fragment>
      <Grid item xs={4}>
        <Item>Name</Item>
      </Grid>
    </React.Fragment>
  );
}

function NestedGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid container item spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </Box>
  );
}

class Card extends React.Component {
  constructor(props) {
  super(props);
    this.person = props.person
   }

   handleClick() {

    

    //alert(JSON.stringify(this.person, null, 4));
      
    // New Tab Window
    var myWindow = window.open("", "_blank");

    // Popup Window
    //var myWindow = window.open('/', 'example', "weight=100,height=100");

    // Basic Information
    myWindow.document.write("Name: " + this.person.first_name + " " + this.person.last_name);
    myWindow.document.write("<br>Email: " + this.person.email);

    if (this.person.categories_of_difference != "") {
      myWindow.document.write("<br>Categoties of Difference: " + this.person.categories_of_difference);
    }

    if (this.person.categories_of_difference != "") {
      myWindow.document.write("<br>Geographic Areas: " + this.person.geographic_areas);
    }

    if (this.person.discipline != "") {
    myWindow.document.write("<br>Discipline: " + this.person.discipline + '<br>');
    }

    // Location Specifications
    if (this.person.city != "") {
       myWindow.document.write("<br>City: " + this.person.city);
    } if (this.person.state != "") {
      myWindow.document.write("<br>State: " + this.person.state);
    } if (this.person.country != "") {
      myWindow.document.write("<br>Country: " + this.person.country);
    }

    // Expert Bio
    if (this.person.biographical_sketch != "") {
      myWindow.document.write("<br><br>Biographical Sketch: " + this.person.biographical_sketch);
    }
    if (this.person.twitter_intagram_other_social_media != "") {
      myWindow.document.write("<br>Social Media: " + this.person.twitter_intagram_other_social_media);
    } if (this.person.media_availability != "") {
      myWindow.document.write("<br>Media Availability: " + this.person.media_availability);
    }

    if (this.person.title != "") {
      myWindow.document.write("<br>Title: " + this.person.title);
    }
    if (this.person.institutional_affiliation != "") {
      myWindow.document.write("<br>Institutional Affiliation: " + this.person.institutional_affiliation);
    }

    
  
  };

 render() {
  return(
    <Box>
    <Grid item xs={100}>
    <Item>
    <button onClick={() => this.handleClick()}>{this.person.first_name} {this.person.last_name}</button>
    </Item>
    </Grid>
    </Box>
);
  }

 }


export default Card;