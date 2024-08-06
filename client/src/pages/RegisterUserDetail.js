import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import WebImage from '../componenet/WebImage';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import validator from 'validator'
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import classes from './RegisterUserDetail.module.css'



const theme = createTheme({palette:
    {
        primary:{main:"#008000"},
        // secondary:{main:"yellow"}
    },
});

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

export default function RegisterUserDetail() {

  const handleSubmit = (event) => {
    const requestOptions = { 
      method:'POST',
      body: JSON.stringify(myJSON),
      headers: {
        'Content-Type': 'application/json'
    },
    }; 
    fetch("https://womenmormonstudies-server.herokuapp.com/api/Users/", requestOptions)
    .then((response)=> {
      return response.json();
    }).then((result) => {
      console.log(result);
    })
  };

  const [firstName, setFirstName] = React.useState();

  const handleFirstNameChange = (event) => {
      setFirstName(event.target.value);
  };

  const [lastName, setLastName] = React.useState();

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const [email, setEmail] = React.useState();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };


  const [state, setState] = React.useState({
    yes: false,
    no: false ,
  });

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

  const [password, setPassword] = React.useState();

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    validate(event.target.value)
  };

  const handleChange2 = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
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

  const [biography, setBiography] = React.useState();

  const handleBiographyChange = (event) => {
    setBiography(event.target.value);
  };

  var myJSON = {"email": email, "first_name": firstName,"last_name": lastName, "password": password, "searches": {"location": location, "time": period, "method": method, "topic": topic, "extra": biography}}
  console.log(myJSON)


  return (
    <ThemeProvider theme={theme}>

     
      <Typography component="h1" variant="h5" sx={{ mt: 3, mb: 2 ,color: 'black', width: 200, marginLeft: '40%'}}>
          <WebImage alt="a decorative tree"/>
          </Typography>

          <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
    >
          <div className = {classes.text}>

        <p className = {classes.text3}> 
        In order to register, please fill in the fields below. Feel free to enter N/A if a field doesn't apply. You will be able to sign-in after. 
        </p>
        <TextField
       
          required
          id="outlined-required"
          label="Required"
          onChange={handleFirstNameChange}
          value = {firstName}
          helperText="Please enter your first name"
        />

        <TextField
          required
          id="outlined-required"
          label="Required"
          onChange={handleLastNameChange}
          value = {lastName}
          helperText="Please enter your last name"
        />

        <TextField
          required
          id="outlined-required"
          label="Required"
          onChange={handleEmailChange}
          value = {email}
          helperText="Please enter your email"
        />

        <TextField
          required
          id="outlined-required"
          label="Password (Required)"
          onChange={handlePasswordChange}
          value = {password}
          helperText= {errorMessage === '' ? null :
          <span style={{
            fontWeight: 'bold',
            color: 'red',
          }}>{errorMessage}</span>}
          // onChange={(e) => validate(e.target.value)}
        />
      </div>

      <p className = {classes.text} id="our mission">Selecting the boxes will allow you to generate an email to notify you if a new expert 
      registers who fits your search criteria. You can uncheck these boxes at any time simply by signing in and editing your user profile.
      </p>

        <div className = {classes.text}>
        <FormControl sx={{ m: 1, width: 250 }}>
          <InputLabel id="demo-multiple-chip-label">Select Desired Locations</InputLabel>
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
          <InputLabel id="demo-multiple-chip-label">Select Time Period</InputLabel>
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
          <InputLabel id="demo-multiple-chip-label">Select Your Method/Discipline</InputLabel>
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
          <InputLabel id="demo-multiple-chip-label">Select Your Topic</InputLabel>
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
        
        <TextField
          id="outlined-multiline-static"
          multiline
          rows={5}
          onChange={handleBiographyChange}
          value = {biography}
          required
          helperText="Type in any additional topics that you are interested separated by commas in here"
        />
      </div>

    </Box>
      <Button
              onClick={handleSubmit}
              type="submit"
              
              variant="contained"
              sx={{ mt: 3, mb: 2 ,color: 'white', width: 200, marginLeft: '42%'}}
            >
              Register
            </Button>

    </ThemeProvider>
  );
}
