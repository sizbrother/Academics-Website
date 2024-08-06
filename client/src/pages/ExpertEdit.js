import * as React from 'react';

import { DataGrid} from '@mui/x-data-grid';
import { Button } from '@mui/material';
import { confirmAlert } from 'react-confirm-alert'; // Import
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import WebImage from '../componenet/WebImage';
import CatagoryBox from '../componenet/CatagoryBox';
import validator from 'validator'
import CatagoryBox2 from '../componenet/CategoryBox2';
import CatagoryBox3 from '../componenet/CategoryBox3';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Expert from "../pages/RegisterExpertDetail";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import  {Fragment} from "react";
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { Theme, useTheme } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import classes from './RegisterExpertDetail.module.css'
import emailjs from '@emailjs/browser'


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const categories_of_differences = [
  'I am a person of color',
  'I am LGBTQ+',
  'I am a person with a disability',
  'I am a neurodiverse person',
  'I am a military veteran',
  'I am a first-generation college student/graduate',
  'Other (please specify)',
];

function getStyles(category, personCategory, theme) {
  return {
    fontWeight:
      personCategory.indexOf(category) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

function getStyles2(location, personLocation, theme) {
  return {
    fontWeight:
      personLocation.indexOf(location) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

function getStyles3(time, personTimePeriod, theme) {
  return {
    fontWeight:
      personTimePeriod.indexOf(time) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

function getStyles4(time, personTimePeriod, theme) {
  return {
    fontWeight:
      personTimePeriod.indexOf(time) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}


const locations = [
  'Asia',
  'Australia and/or New Zealand',
  'Pacific Islands',
  'Europe',
  'United States and/or Canada',
  'Latin America and/or Caribbean',
  'Middle East',
  'N/A',
];

const periods = [
  '19th Century',
  '20th Century',
  '21st Century',
  'N/A',
];

const medias = [
  {
    value: 'Yes',
    label: 'Yes',
  },
  {
    value: 'No',
    label: 'No',
  },
 
];
const degrees = [
  {
    value: 'No advanced degree related to Mormon Studies',
    label: 'No advanced degree related to Mormon Studies',
  },
  {
    value: 'BA',
    label: 'BA',
  },
  {
    value: 'BS',
    label: 'BS',
  },
  {
    value: 'MA',
    label: 'MA',
  },
  {
    value: 'MTS',
    label: 'MTS',
  },
  {
    value: 'MDiv',
    label: 'MDiv',
  },
  {
    value: 'MEd',
    label: 'MEd',
  },
  {
    value: 'MSW',
    label: 'MSW',
  },
  {
    value: 'JD',
    label: 'JD',
  },
  {
    value: 'ABD',
    label: 'ABD',
  },
  {
    value: 'PhD',
    label: 'PhD',
  },
  {
    value: 'ThD',
    label: 'ThD',
  },
  {
    value: 'EdD',
    label: 'EdD',
  },
];

const methods = [
  'Anthropology',
  'Area Studies',
  'Art History',
  'Creative Writing',
  'Disability Studies',
  'Economics',
  'Ethnography',
  'Ethnohistory',
  'Gender Studies',
  'Genealogy',
  'Geography',
  'History',
  'Linguistics',
  'Literary Criticism',
  'Oral History',
  'Performance Studies',
  'Philosophy',
  'Political Science',
  'Psychology',
  'Public History',
  'Religious Studies',
  'Rhetoric/Communication',
  'Sociology',
  'Statistics',
  'Theology',
  'N/A',
];

const topics = [
    'Aesthetics',
  'Anti-Mormonism',
  'Biography',
  'Childhood/Youth',
  'Church Membership',
  'Church of Jesus Christ of Latter-day Saints',
  'Colonialism/imperialism',
  'Community of Christ (formerly Reorganized Church of Jesus Christ of Latter Day Saints)',
  'Critical Race Studies',
  'Creative Writing (Fiction/Nonfiction/Poetry/etc.)',
  'Cultural History',
  'Demography',
  'Disability Studies',
  'Drama',
  'Ecclesiology',
  'Economics',
  'Ethics',
  'Family structure',
  'Film',
  'Folklore/Storytelling',
  'Food',
  'Gender/Femininity/Masculinity/Sexuality',
  'Globalization',
  'Healing',
  'Interfaith/Interreligious Relations/Dialogue',
  'Literature',
  'Material Culture',
  'Missions/Missiology',
  'Motherhood',
  'Music',
  'Other Mormon Traditions (AUB/Bickertonite/FLDS/Strangite/etc.)',
  'Performance',
  'Philosophy',
  'Psychology',
  'Politics/Political Issues/Political Engagement',
  'Popular Culture',
  'Race/Ethnicity',
  'Ritual Studies',
  'Sacred Space',
  'Scripture',
  'Social History',
  'Social Justice',
  'Sociology of Religion',
  'Technical Communication',
  'Temples',
  'Theology',
  'Translation',
  'Visual Culture',
  'Womens History',
  'N/A',
];

function ExpertEdit() {

  const handleSubmit = (event) => {
    const requestOptions = { 
      method:'POST',
      body: JSON.stringify(myJSON),
      headers: {
        'Content-Type': 'application/json'
    },
    };

    fetch("https://womenmormonstudies-server.herokuapp.com/api/UnconfirmedExperts/", requestOptions)
    .then((response)=> {
      return response.json();
    }).then((result) => {
      //console.log(result);
    })
  };


  const onButtonClickUnconfirmedAdd = (event, userObject)=>{
      var deletedID = JSON.parse(JSON.stringify(userObject))
      delete deletedID._id

      const requestOptions = { 
        method:'POST',
        body: JSON.stringify(deletedID),
        headers: {
          'Content-Type': 'application/json'
      },
      }; 
      fetch("https://womenmormonstudies-server.herokuapp.com/api/Experts/", requestOptions)
      .then((response)=> {
        alert("User added to Experts")
        return response.json();
      }).then((result) => {
        console.log(result);
      })
    }

  const DeleteExpert = (event, userObject)=>{
    const requestOptions = { 
      method:'DELETE'
    }; 
    //console.log(userObject._id)
    fetch("https://womenmormonstudies-server.herokuapp.com/api/Experts/"+userObject._id, requestOptions)
    .then((response)=> {
      alert("Expert Deleted")

      return response.json();
    }).then((result) => {
      console.log(result);
    })
  }


  const updateExpert = (event,userObject,user_id)=>{
    const requestOptions = { 
        method:'PUT',
        body: JSON.stringify(myJSON),
        headers: {
          'Content-Type': 'application/json'
        }
      }; 

      fetch("https://womenmormonstudies-server.herokuapp.com/api/Experts/"+user_id, requestOptions)
      .then((response)=> {
        alert("Expert Updated")
      return response.json();
      }).then((result) => {
      console.log(result);
      })
    }



  const lookThrough= (e, event) =>{
 
    const requestOptions = { 
      method:'GET',
      
    }; 
    fetch("https://womenmormonstudies-server.herokuapp.com/api/Experts/", requestOptions)
    .then((response)=> {
      return response.json();
    }).then((result) => {
      console.log(result)

      var email = e.email;
      var password = e.password;

      var found_email = false;
      var found_pass = false;

      Object.keys(result).forEach(function(key) {
        if (result[key].email == email)
        {
          found_email = true;
        }
        if(result[key].password == password)
        {
          found_pass = true;
        }
      
        if(found_pass == true){
          if(found_email == true){
            var user_id = result[key]._id
            alert("We found it")
            updateExpert(event, myJSON, user_id)
            found_pass = false
            found_email = false
          }
        }
      })

    })
  }

  const change = (event)=>{

      lookThrough(myJSON, event);

      //updateExpert(event, myJSON);
    }

    const [firstName, setFirstName] = React.useState();

    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
    };

    const [middleName, setMiddleName] = React.useState();

    const handleMiddleNameChange = (event) => {
      setMiddleName(event.target.value);
    };

    const [lastName, setLastName] = React.useState();

    const handleLastNameChange = (event) => {
      setLastName(event.target.value);
    };

    const [email, setEmail] = React.useState();

    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };

    const [title, setTitle] = React.useState();

    const handleTitleChange = (event) => {
      setTitle(event.target.value);
    };

    const [institution, setInstitution] = React.useState();

    const handleInstitutionChange = (event) => {
      setInstitution(event.target.value);
    };

    const [city, setCity] = React.useState();

    const handleCityChange = (event) => {
      setCity(event.target.value);
    };

    const [country, setCountry] = React.useState();

    const handleCountryChange = (event) => {
      setCountry(event.target.value);
    };

    const [socialMedia, setSocialMedia] = React.useState();

    const handleSocialMediaChange = (event) => {
      setSocialMedia(event.target.value);
    };

    const [website, setWebsite] = React.useState();

    const handleWebsiteChange = (event) => {
      setWebsite(event.target.value);
    };

    const [degree, setDegree] = React.useState();

    const handleDegreeChange = (event) => {
      setDegree(event.target.value);
    };

    const [categoriesOfDifference, setCategoriesOfDifference] = React.useState();

    const theme = useTheme();
    const [personCategory, setPersonName] = React.useState([]);
  
    const handleCategoriesOfDifferenceChange = (event) => {
      const {
        target: { value },
      } = event;
      setPersonName(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
      );
      setCategoriesOfDifference(event.target.value);
    };

    const [biography, setBiography] = React.useState();

    const handleBiographyChange = (event) => {
      setBiography(event.target.value);
    };

    const [location, setLocation] = React.useState();
    const [personLocation, setPersonLocation] = React.useState([]);
  
    const handleLocationChange = (event) => {
      const {
        target: { value },
      } = event;
      setPersonLocation(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
      );
      setLocation(event.target.value);
    }; 

    const [method, setMethod] = React.useState();
    const [personMethod, setPersonMethod] = React.useState([]);

    const handleMethodChange = (event) => {
      const {
        target: { value },
      } = event;
      setPersonMethod(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
      );
      setMethod(event.target.value);
        };

    const [discipline, setDiscipline] = React.useState();


    const [topic, setTopic] = React.useState();
    const [personTopic, setPersonTopic] = React.useState([]);

    const handleTopicChange = (event) => {
      const {
        target: { value },
      } = event;
      setPersonTopic(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
      );
      setTopic(event.target.value);
    };

    const [period, setPeriod] = React.useState();
    const [personTimePeriod, setPersonTimePeriod] = React.useState([]);

    const handlePeriodChange = (event) => {
      const {
        target: { value },
      } = event;
      setPersonTimePeriod(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
      );
      setPeriod(event.target.value);
    };

    const [media, setMedia] = React.useState();

    const handleMediaChange = (event) => {
      setMedia(event.target.value);
    };

    const [errorMessage, setErrorMessage] = useState('')
 
    const validate = (value) => {
      if (validator.isStrongPassword(value, {
        minLength: 8, minLowercase: 1,
        minUppercase: 1, minNumbers: 1, minSymbols: 1
      })) {
        setErrorMessage('This is a strong password')
      } else {
        setErrorMessage('This is not a strong password')
      }
    }

    const [state, setState] = React.useState();

    const handleStateChange = (event) => {
      setState(event.target.value);
    };

    const [password, setPassword] = React.useState();
    const handlePasswordChange = (event) => {
      console.log(password)
      setPassword(event.target.value);
      validate(event.target.value)
    };

    





    var myJSON = {"approved": "No", "first_name": firstName,"bibliography": "N/A", "biographical_sketch": biography, "broad_areas": 'N/A', "categories_of_difference": categoriesOfDifference,
    "city": city, "country": country, "date_recorded": "N/A", "date_updated": "N/A", "degree": degree, "discipline": "N/A", "email": email, 
    "geographic_areas": location, "id": "N/A", "institutional_affiliation": institution, "keywords": "N/A", "last_accessed": "N/A", "last_name": lastName, "last_update_user": "",
    "media_availability": media, "methods_approaches": method, "middle_name_middle_initial": middleName, "state": state, "time_period": period, "title": title, 
    "twitter_instagram_other_social_media": socialMedia, "website": website, "password": password}
    console.log(myJSON)

    return (
    <ThemeProvider theme={theme}>

     
      <Typography component="h1" variant="h5" sx={{
          marginTop: '10px', marginLeft: '38%'
        }}>
          <WebImage alt="a decorative tree"/>

          </Typography>

         
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
    >

    <div className={classes.text}>

        <div
        style={{
          display: 'flex',
          alignItems:'left',
          justifyContent: 'left',
          height: '10vh',
        }}
        >
        <h1> How do I Edit my Profile?</h1>
        </div>



        <div
        style={{
          display: 'flex',
          alignItems:'left',
          justifyContent: 'left',
          height: '7vh',
        }}
        >
        <p>Enter your Email and Password Below: </p>
        </div>

        <TextField
          required
          id="outlined-required"
          onChange={handleEmailChange}
          value = {email}
          helperText="Enter Email *REQUIRED*"
        />

        <TextField
          required
          id="outlined-required"
          onChange={handlePasswordChange}
          value = {password}
          helperText="Enter Password *REQUIRED*"
        />
      </div>


    <div className={classes.text}>

        <div
        style={{
          display: 'flex',
          alignItems:'left',
          justifyContent: 'left',
          height: '5vh',
        }}
        >
        </div>

        <div
        style={{
          display: 'flex',
          alignItems:'left',
          justifyContent: 'left',
          height: '7vh',
        }}
        >
        <p>Edit the field of choice through the corresponding text box:</p>
        </div>

    <TextField 
          required
          id="outlined-required"
          onChange={handleTitleChange}
          value = {title}
          helperText="Edit Title"
        />
        <TextField
          required
          id="outlined-required"
          onChange={handleFirstNameChange}
          value = {firstName}
          helperText="Edit First Name"
        />

        <TextField
          required
          id="outlined-required"
          onChange={handleMiddleNameChange}
          value = {middleName}
          helperText="Edit Middle Name"
        />

        <TextField
          required
          id="outlined-required"
          onChange={handleLastNameChange}
          value = {lastName}
          helperText="Edit Family Name/Surname"
        />
        </div>

      <div className={classes.text}>
    
        <TextField
          required
          id="outlined-required"
          onChange={handleInstitutionChange}
          value = {institution}
          helperText="Edit Institutional Affiliation"
        />

        <TextField
          required
          id="outlined-required"
          onChange={handleCityChange}
          value = {city}
          helperText="Edit City"
        />

        <TextField
          required
          id="outlined-required"
          onChange={handleStateChange}
          value = {state}
          helperText="Edit State/Province"
        />
         <TextField
          onChange={handleCountryChange}
          value = {country}
          required
          id="outlined-required"
          helperText="Edit Country"
        />
      </div>

      <div className={classes.text}>
        <FormControl sx={{ m: 1, width: 250 }}>
          <InputLabel id="demo-multiple-chip-label">Edit Desired Locations</InputLabel>
          <Select
            labelId="demo-multiple-chip-label"
            id="demo-multiple-chip"
            multiple
            value={personLocation}
            onChange={handleLocationChange}
            input={<OutlinedInput id="select-multiple-chip" label= "Chip" />}
            renderValue={(selected) => (
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
            MenuProps={MenuProps}
          >
            {locations.map((location) => (
              <MenuItem
                key={location}
                value={location}
                style={getStyles2(location, personLocation, theme)}
              >
                {location}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl sx={{ m: 1, width: 250 }}>
          <InputLabel id="demo-multiple-chip-label">Edit Time Period</InputLabel>
          <Select
            labelId="demo-multiple-chip-label"
            id="demo-multiple-chip"
            multiple
            value={personTimePeriod}
            onChange={handlePeriodChange}
            input={<OutlinedInput id="select-multiple-chip" label= "Chip" />}
            renderValue={(selected) => (
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
            MenuProps={MenuProps}
          >
            {periods.map((time) => (
              <MenuItem
                key={time}
                value={time}
                style={getStyles3(time, personTimePeriod, theme)}
              >
                {time}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl sx={{ m: 1, width: 250 }}>
          <InputLabel id="demo-multiple-chip-label">Edit Method/Discipline</InputLabel>
          <Select
            labelId="demo-multiple-chip-label"
            id="demo-multiple-chip"
            multiple
            value={personMethod}
            onChange={handleMethodChange}
            input={<OutlinedInput id="select-multiple-chip" label= "Chip" />}
            renderValue={(selected) => (
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
            MenuProps={MenuProps}
          >
            {methods.map((method) => (
              <MenuItem
                key={method}
                value={method}
                style={getStyles4(method, personMethod, theme)}
              >
                {method}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl sx={{ m: 1, width: 250 }}>
          <InputLabel id="demo-multiple-chip-label">Edit Topic</InputLabel>
          <Select
            labelId="demo-multiple-chip-label"
            id="demo-multiple-chip"
            multiple
            value={personTopic}
            onChange={handleTopicChange}
            input={<OutlinedInput id="select-multiple-chip" label= "Chip" />}
            renderValue={(selected) => (
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
            MenuProps={MenuProps}
          >
            {topics.map((topic) => (
              <MenuItem
                key={topic}
                value={topic}
                style={getStyles4(topic, personTopic, theme)}
              >
                {topic}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
  
      </div>

      <div className={classes.text}>
        
        <TextField
          onChange={handleSocialMediaChange}
          value = {socialMedia}
          required
          id="outlined-required"
          helperText="Edit Social Media Handles"
        />

        <TextField
        onChange={handleWebsiteChange}
        value = {website}
        required
        id="outlined-required"
        helperText="Edit Website URL"
        />

        <TextField
          id="outlined-select-location"
          select
          value={media}
          onChange={handleMediaChange}
          helperText="Edit Media Avaliability"
        >
          {medias.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          id="outlined-select-location"
          select
          value={discipline}
          required
          onChange={handleDegreeChange}
          helperText="Edit highest degree related to your work in Mormon Studies"
        >
          {degrees.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <FormControl sx={{ m: 1, width: 250 }}>
          <InputLabel id="demo-multiple-chip-label">Select Categories of Difference</InputLabel>
          <Select
            labelId="demo-multiple-chip-label"
            id="demo-multiple-chip"
            multiple
            value={personCategory}
            onChange={handleCategoriesOfDifferenceChange}
            input={<OutlinedInput id="select-multiple-chip" label= "Chip" />}
            renderValue={(selected) => (
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
            MenuProps={MenuProps}
          >
            {categories_of_differences.map((category) => (
              <MenuItem
                key={category}
                value={category}
                style={getStyles(category, personCategory, theme)}
              >
                {category}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

      </div>

 
      <div className={classes.text2}>
      <TextField
          id="outlined-multiline-static"
          multiline
          rows={5}
          onChange={handleBiographyChange}
          value = {biography}
          required
          helperText="Edit Biography. Include citations of relevant scholarly work, description of your research interests and current projects, and so on."
        />
      </div>

      <Button
              onClick={change}
              variant="contained"
              sx={{ mt: 3, mb: 2 ,bgcolor:'green', color: 'white', width: 200, marginLeft: '40%'}}
            >
              Apply Changes
            </Button>
    </Box>

    </ThemeProvider>
  );
}


export default ExpertEdit;