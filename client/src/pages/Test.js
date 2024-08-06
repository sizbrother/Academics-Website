import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import WebImage from '../componenet/WebImage';
import CatagoryBox from '../componenet/CatagoryBox';
import CatagoryBox2 from '../componenet/CategoryBox2';
import CatagoryBox3 from '../componenet/CategoryBox3';
import CatagoryBox4 from '../componenet/CategoryBox4';
import { useNavigate } from "react-router-dom";
import MenuItem from '@mui/material/MenuItem';


const theme = createTheme({palette:
    {
        primary:{main:"#008000"},
        // secondary:{main:"yellow"}
    },
});

const locations = [
  {
    value: 'Africa',
    label: 'Africa',
  },
  {
    value: 'Asia',
    label: 'Asia',
  },
  {
    value: 'Australia and/or New Zealand',
    label: 'Australia and/or New Zealand',
  },
  {
    value: 'Pacific Islands',
    label: 'Pacific Islands',
  },
  {
    value: 'Europe',
    label: 'Europe',
  },
  {
    value: 'United States and/or Canada',
    label: 'United States and/or Canada',
  },
  {
    value: 'Latin America and/or Caribbean',
    label: 'Latin America and/or Caribbean',
  },
  {
    value: 'Middle East',
    label: 'Middle East',
  },
  {
    value: 'N/A',
    label: 'N/A',
  },
];

const periods = [
  {
    value: '19th Century',
    label: '19th Century',
  },
  {
    value: '20th Century',
    label: '20th Century',
  },
  {
    value: '21st Century',
    label: '21st Century',
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
  {
    value: 'Anthropology',
    label: 'Anthropology',
  },
  {
    value: 'Area Studies',
    label: 'Area Studies',
  },
  {
    value: 'Art History',
    label: 'Art History',
  },
  {
    value: 'Creative Writing',
    label: 'Creative Writing',
  },
  {
    value: 'Disability Studies',
    label: 'Disability Studies',
  },
  {
    value: 'Economics',
    label: 'Economics',
  },
  {
    value: 'Ethnography',
    label: 'Ethnography',
  },
  {
    value: 'Ethnohistory',
    label: 'Ethnohistory',
  },
  {
    value: 'Gender Studies',
    label: 'Gender Studies',
  },
  {
    value: 'Genealogy',
    label: 'Genealogy',
  },
  {
    value: 'Geography',
    label: 'Geography',
  },
  {
    value: 'History',
    label: 'History',
  },
  {
    value: 'Linguistics',
    label: 'Linguistics',
  },
  {
    value: 'Literary Criticism',
    label: 'Literary Criticism',
  },
  {
    value: 'Oral History',
    label: 'Oral History',
  },
  {
    value: 'Performance Studies',
    label: 'Performance Studies',
  },
  {
    value: 'Philosophy',
    label: 'Philosophy',
  },
  {
    value: 'Political Science',
    label: 'Political Science',
  },
  {
    value: 'Psychology',
    label: 'Psychology',
  },
  {
    value: 'Public History',
    label: 'Public History',
  },
  {
    value: 'Religious Studies',
    label: 'Religious Studies',
  },
  {
    value: 'Rhetoric/Communication',
    label: 'Rhetoric/Communication',
  },
  {
    value: 'Sociology',
    label: 'Sociology',
  },
  {
    value: 'Statistics',
    label: 'Statistics',
  },
  { 
    value: 'Theology',
    label: 'Theology',
  },

];

const topics = [
  {
    value: 'Aesthetics',
    label: 'Aesthetics',
  },
  {
    value: 'Anti-Mormonism',
    label: 'Anti-Mormonism',
  },
  {
    value: 'Biography',
    label: 'Biography',
  },
  {
    value: 'Childhood/Youth',
    label: 'Childhood/Youth',
  },
  {
    value: 'Church Membership',
    label: 'Church Membership',
  },
  {
    value: 'Church of Jesus Christ of Latter-day Saints',
    label: 'Church of Jesus Christ of Latter-day Saints',
  },
  {
    value: 'Colonialism/imperialism',
    label: 'Colonialism/imperialism',
  },
  {
    value: 'Community of Christ (formerly Reorganized Church of Jesus Christ of Latter Day Saints)',
    label: 'Community of Christ (formerly Reorganized Church of Jesus Christ of Latter Day Saints)',
  },
  {
    value: 'Critical Race Studies',
    label: 'Critical Race Studies',
  },
  {
    value: 'Creative Writing (Fiction/Nonfiction/Poetry/etc.)',
    label: 'Creative Writing (Fiction/Nonfiction/Poetry/etc.)',
  },
  {
    value: 'Cultural History',
    label: 'Cultural History',
  },
  {
    value: 'Demography',
    label: 'Demography',
  },
  {
    value: 'Disability Studies',
    label: 'Disability Studies',
  },
  {
    value: 'Drama',
    label: 'Drama',
  },
  {
    value: 'Ecclesiology',
    label: 'Ecclesiology',
  },
  {
    value: 'Economics',
    label: 'Economics',
  },
  {
    value: 'Ethics',
    label: 'Ethics',
  },
  {
    value: 'Family structure',
    label: 'Family structure',
  },
  {
    value: 'Film',
    label: 'Film',
  },
  {
    value: 'Folklore/Storytelling',
    label: 'Folklore/Storytelling',
  },
  {
    value: 'Food',
    label: 'Food',
  },
  {
    value: 'Gender/Femininity/Masculinity/Sexuality',
    label: 'Gender/Femininity/Masculinity/Sexuality',
  },
  {
    value: 'Globalization',
    label: 'Globalizatio',
  },
  {
    value: 'Healing',
    label: 'Healing',
  },
  { 
    value: 'Interfaith/Interreligious Relations/Dialogue',
    label: 'Interfaith/Interreligious Relations/Dialogue',
  },
  { 
    value: 'Literature',
    label: 'Literature',
  },
  { 
    value: 'Material Culture',
    label: 'Material Culture',
  },
  { 
    value: 'Missions/Missiology',
    label: 'Missions/Missiology',
  },
  { 
    value: 'Motherhood',
    label: 'Motherhood',
  },
  { 
    value: 'Music',
    label: 'Music',
  },
  { 
    value: 'Other Mormon Traditions (AUB/Bickertonite/FLDS/Strangite/etc.)',
    label: 'Other Mormon Traditions (AUB/Bickertonite/FLDS/Strangite/etc.)',
  },
  { 
    value: 'Performance',
    label: 'Performance',
  },
  { 
    value: 'Philosophy',
    label: 'Philosophy',
  },
  { 
    value: 'Psychology',
    label: 'Psychology',
  },
  { 
    value: 'Politics/Political Issues/Political Engagement',
    label: 'Politics/Political Issues/Political Engagement',
  },
  { 
    value: 'Popular Culture',
    label: 'Popular Culture',
  },
  { 
    value: 'Race/Ethnicity',
    label: 'Race/Ethnicity',
  },
  { 
    value: 'Ritual Studies',
    label: 'Ritual Studies',
  },
  { 
    value: 'Sacred Space',
    label: 'Sacred Space',
  },
  { 
    value: 'Scripture',
    label: 'Scripture',
  },
  { 
    value: 'Social History',
    label: 'Social History',
  },
  { 
    value: 'Social Justice',
    label: 'Social Justice',
  },
  { 
    value: 'Sociology of Religion',
    label: 'Sociology of Religion',
  },
  { 
    value: 'Technical Communication',
    label: 'Technical Communication',
  },
  { 
    value: 'Temples',
    label: 'Temples',
  },
  { 
    value: 'Theology',
    label: 'Theology',
  },
  { 
    value: 'Translation',
    label: 'Translation',
  },
  { 
    value: 'Visual Culture',
    label: 'Visual Culture',
  },
  { 
    value: 'Womens History',
    label: 'Womens History',
  },
];

 function RegisterExpertDetail() {

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

    const [password, setPassword] = React.useState();

    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
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

    const [state, setState] = React.useState();

    const handleStateChange = (event) => {
      setState(event.target.value);
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

    const [bibliography, setBibliography] = React.useState();

    const handleBibliographyChange = (event) => {
      setBibliography(event.target.value);
    };

    const [degree, setDegree] = React.useState();

    const handleDegreeChange = (event) => {
      setDegree(event.target.value);
    };

    const [categoriesOfDifference, setCategoriesOfDifference] = React.useState();

    const handleCategoriesOfDifferenceChange = (event) => {
      setCategoriesOfDifference(event.target.value);
    };

    const [broadAreas, setBroadAreas] = React.useState();

    const handleBroadAreasChange = (event) => {
      setBroadAreas(event.target.value);
    };

    const [keywords, setKeywords] = React.useState();

    const handleKeywordsChange = (event) => {
      setKeywords(event.target.value);
    };

    const [biography, setBiography] = React.useState();

    const handleBiographyChange = (event) => {
      setBiography(event.target.value);
    };


    const [location, setLocation] = React.useState();

    const handleLocationChange = (event) => {
      setLocation(event.target.value);
    };

    const [method, setMethod] = React.useState();
    const handleMethodChange = (event) => {
      setMethod(event.target.value);
    };

    const [discipline, setDiscipline] = React.useState();
    const handleDisciplineChange = (event) => {
      setDiscipline(event.target.value);
    };

    const [topic, setTopic] = React.useState();

    const handleTopicChange = (event) => {
      setTopic(event.target.value);
    };

    const [period, setPeriod] = React.useState();

    const handlePeriodChange = (event) => {
      setPeriod(event.target.value);
    };

    const [media, setMedia] = React.useState();

    const handleMediaChange = (event) => {
      setMedia(event.target.value);
    };

    var myJSON = {"approved": "No", "bibliography": bibliography, "biographical_sketch": biography, "broad_areas": broadAreas, "categories_of_difference": categoriesOfDifference,
    "city": city, "country": country, "date_recorded": "11/28/22", "date_updated": "11/28/22", "degree": degree, "discipline": discipline, "email": email, "first_name": firstName,
    "geographic_areas": location, "id": "N/A", "institutional_affiliation": institution, "keywords": keywords, "last_accessed": "11/28/22", "last_name": lastName, "last_update_user": "",
    "media_availability": media, "methods_approaches": method, "middle_name_middle_initial": middleName, "state": state, "time_period": period, "title": title, 
    "twitter_instagram_other_social_media": socialMedia, "website": website}
    console.log(myJSON)

  return (
    <ThemeProvider theme={theme}>

     
      <Typography component="h1" variant="h5">
          <WebImage alt="a decorative tree"/>
          </Typography>
         
          <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >

    <div>
        
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="First Name"
          onChange={handleFirstNameChange}
          value = {firstName}
        />

        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Middle Name"
          onChange={handleMiddleNameChange}
          value = {middleName}
        />

        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Last Name"
          onChange={handleLastNameChange}
          value = {lastName}
        />

        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Email"
          onChange={handleEmailChange}
          value = {email}
        />

        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Password"
          onChange={handlePasswordChange}
          value = {password}
        />

      </div>

      <div>
        
        <TextField
          defaultValue="Title"
          onChange={handleTitleChange}
          value = {title}
        />

        <TextField
          defaultValue="Institutional Affifilation"
          onChange={handleInstitutionChange}
          value = {institution}
        />
        <TextField
          defaultValue="City"
          onChange={handleCityChange}
          value = {city}
        />
        <TextField
          defaultValue="State"
          onChange={handleStateChange}
          value = {state}
        />
         <TextField
          defaultValue="Country"
          onChange={handleCountryChange}
          value = {country}
        />
      </div>

      <div>

        <TextField
          id="outlined-select-location"
          select
          label="Select"
          value={location}
          onChange={handleLocationChange}
          helperText="Please select your location"
        >
          {locations.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          id="outlined-select-location"
          select
          label="Select"
          value={discipline}
          onChange={handleMethodChange}
          helperText="Please select your method/discipline"
        >
          {methods.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          id="outlined-select-location"
          select
          label="Select"
          value={period}
          onChange={handlePeriodChange}
          helperText="Please select your time period"
        >
          {periods.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          id="outlined-select-location"
          select
          label="Select"
          value={topic}
          onChange={handleTopicChange}
          helperText="Please select your topic"
        >
          {topics.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          id="outlined-select-location"
          select
          label="Select"
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
  
      </div>

      <div>
        
        <TextField
          defaultValue="Social Media"
          onChange={handleSocialMediaChange}
          value = {socialMedia}
        />

        <TextField
        onChange={handleWebsiteChange}
        value = {website}
        />

        <TextField
          defaultValue="Bibliography"
          onChange={handleBibliographyChange}
          value = {bibliography}
        />

        <TextField
          defaultValue="Degree"
          onChange={handleDegreeChange}
          value = {degree}
        />

        <TextField
          defaultValue="Categories of Difference"
          onChange={handleCategoriesOfDifferenceChange}
          value = {categoriesOfDifference}
        />
      </div>

      <div>
        
        <TextField
          defaultValue="Broad Areas"
          onChange={handleBroadAreasChange}
          value = {broadAreas}
        />

          <TextField
          defaultValue="Discipline"
          onChange={handleDisciplineChange}
          value = {discipline}
        />

        <TextField
          defaultValue="Keywords"
          onChange={handleKeywordsChange}
          value = {keywords}
        />
      </div>

      
      
      <div>
      <TextField
          id="outlined-multiline-static"
          label="Biography"
          multiline
          rows={10}
          defaultValue="Your Biography Here"
          onChange={handleBiographyChange}
          value = {biography}
        />
      </div>

      <Button
              onClick={handleSubmit}

              type="submit"
              
              variant="contained"
              sx={{ mt: 3, mb: 2 ,color: 'white', width: 200, marginLeft: '45%'}}
            >
              Register
            </Button>
    </Box>

    </ThemeProvider>
  );
}

export default RegisterExpertDetail;
