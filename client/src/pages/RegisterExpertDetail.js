import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import WebImage from '../componenet/WebImage';
import MenuItem from '@mui/material/MenuItem';
import validator from 'validator'
import { useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
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

 function RegisterExpertDetail() {
  const form = React.useRef()

  const handleSubmit = (event) => {
    // emailjs.sendForm('service_owv6uf2','newell_email', form.current, 'p0uNpijVQNgR4VtYC')
    //   .then(result =>{
    //     console.log(result.text);
    //   },(error) => {
    //     console.log(error.text);
    //   }
    //   )
    console.log(myJSON)

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

    <p className = {classes.text3}> 
    In order to register, please fill in the fields below. Feel free to enter N/A if a field doesn't apply. Once you hit register, a notification will be sent
    to Professor Newell that you are looking for approval. You will be able to sign-in once approved. 
    </p>

    <p className = {classes.text4}> 
    Notice: Clicking register will keep your information on the page but you will have registered. Don't hit register multiple times!
    </p>

    <div className={classes.text}>
    <TextField 
          required
          id="outlined-required"
          onChange={handleTitleChange}
          value = {title}
          helperText="Please enter your title"
        />
        <TextField
          required
          id="outlined-required"
          onChange={handleFirstNameChange}
          value = {firstName}
          helperText="Please enter your given name"
        />

        <TextField
          required
          id="outlined-required"
          onChange={handleMiddleNameChange}
          value = {middleName}
          helperText="Please enter your middle name"
        />

        <TextField
          required
          id="outlined-required"
          onChange={handleLastNameChange}
          value = {lastName}
          helperText="Please enter your family name/surname"
        />
        </div>
        <div className={classes.text}>

        <TextField
          required
          id="outlined-required"
          onChange={handleEmailChange}
          value = {email}
          helperText="Please enter your email"
        />

        <TextField
          required
          id="outlined-required"
          label = "Password"
          onChange={handlePasswordChange}
          value = {password}
          helperText= {errorMessage === '' ? null :
          <span style={{
            fontWeight: 'bold',
            color: 'red',
          }}>{errorMessage}</span>}
                
          //onChange={(e) => validate(e.target.value)}
        />
      </div>

      <div className={classes.text}>
        
        <TextField
          required
          id="outlined-required"
          onChange={handleInstitutionChange}
          value = {institution}
          helperText="Please enter your institutional affiliation"
        />

        <TextField
          required
          id="outlined-required"
          onChange={handleCityChange}
          value = {city}
          helperText="Please enter your city"
        />

        <TextField
          required
          id="outlined-required"
          onChange={handleStateChange}
          value = {state}
          helperText="Please enter your state/province"
        />
         <TextField
          onChange={handleCountryChange}
          value = {country}
          required
          id="outlined-required"
          helperText="Please enter your country"
        />
      </div>

      <div className={classes.text}>
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
  
      </div>

      <div className={classes.text}>
        
        <TextField
          onChange={handleSocialMediaChange}
          value = {socialMedia}
          required
          id="outlined-required"
          helperText="Please enter your social media handles"
        />

        <TextField
        onChange={handleWebsiteChange}
        value = {website}
        required
        id="outlined-required"
        helperText="Please enter your website url"
        />

        <TextField
          id="outlined-select-location"
          select
          value={media}
          onChange={handleMediaChange}
          helperText="Please select your media avaliability"
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
          helperText="Please select your highest degree related to your work in Mormon Studies"
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
          helperText="Please write a brief description of yourself and your work to help those looking for experts. 
          Feel free to include citations of relevant scholarly work, description of your research interests and current projects, and so on."
        />
      </div>
      <ReCAPTCHA
            sitekey="6LfI9hEjAAAAABd2TUPXCRH2YDPDGvy5w0rBgR8S"
            />

      <Button
              onClick={handleSubmit}
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2 ,color: 'white', width: 200, marginLeft: '40%', bgcolor: "green"}}
            >
              Register
            </Button>
    </Box>

    </ThemeProvider>
  );
}

export default RegisterExpertDetail;
