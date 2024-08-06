import React, { useState } from 'react';
import Scroll from './Scroll';
import SearchList from './SearchList';
import TextField from '@mui/material/TextField';
import './Search.module.css';
import Autocomplete from '@mui/material/Autocomplete';
import background from "../pages/hero.jpeg";


function Search({ details }) {

  const [searchGeneralField, setGeneralSearchField] = useState("");
  const [searchPeriodField, setPeriodField] = useState("");
  const [searchGeographicField, setGeographicField] = useState("");

  console.log(details)

  const filteredGeneralPersons = details.filter(
    person => {
      if (typeof(person.first_name) === 'undefined' && typeof(person.last_name) === 'undefined') {
        return details
      }
      else{
      return(
        person
        .bibliography
        .toLowerCase()
        .includes(searchGeneralField.toLowerCase()) ||
        person
        .biographical_sketch
        .toLowerCase()
        .includes(searchGeneralField.toLowerCase()) ||
        person
        .broad_areas
        .toLowerCase()
        .includes(searchGeneralField.toLowerCase()) ||
        person
        .categories_of_difference
        .toLowerCase()
        .includes(searchGeneralField.toLowerCase()) ||
        person
        .city
        .toLowerCase()
        .includes(searchGeneralField.toLowerCase()) ||
        person
        .geographic_areas
        .toLowerCase()
        .includes(searchGeneralField.toLowerCase()) ||
        person
        .country
        .toLowerCase()
        .includes(searchGeneralField.toLowerCase()) ||
        person
        .date_recorded
        .toLowerCase()
        .includes(searchGeneralField.toLowerCase()) ||
        person
        .date_updated
        .toLowerCase()
        .includes(searchGeneralField.toLowerCase()) ||
        person
        .degree
        .toLowerCase()
        .includes(searchGeneralField.toLowerCase()) ||
        person
        .discipline
        .toLowerCase()
        .includes(searchGeneralField.toLowerCase()) ||
        person
        .first_name
        .toLowerCase()
        .includes(searchGeneralField.toLowerCase()) ||
        person
        .institutional_affiliation
        .toLowerCase()
        .includes(searchGeneralField.toLowerCase()) ||
        person
        .keywords
        .toLowerCase()
        .includes(searchGeneralField.toLowerCase()) ||
        person
        .last_name
        .toLowerCase()
        .includes(searchGeneralField.toLowerCase()) ||
        person
        .methods_approaches
        .toLowerCase()
        .includes(searchGeneralField.toLowerCase()) ||
        person
        .state
        .toLowerCase()
        .includes(searchGeneralField.toLowerCase())
      )
      }
    }
  );
  
  const filteredTimePeriod = filteredGeneralPersons.filter(
    person => {
      if (typeof(person.time_period) === 'undefined') {
        return filteredGeneralPersons
      }
      else{
        return (
        person
        .time_period
        .toLowerCase()
        .includes(searchPeriodField)
        )
      }
    }
  );

  const filteredGeographicAreas = filteredTimePeriod.filter(
    person => {
      if (typeof(person.geographic_areas) === 'undefined') {
        return filteredTimePeriod
      }
      else{
        return (
        person
        .geographic_areas
        .toLowerCase()
        .includes(searchGeographicField)
        )
      }
    }
  );

const handleGeneralChange = e => {
  setGeneralSearchField(e.target.value);
};

const handlePeriodChange = (event) => {
  setPeriodField(event.target.value);
  };


const handleGeographicChange2 = (event) => {
  event.target.value.toLowerCase()
  setGeographicField(event.target.value);
  };


function searchList() {
  return (
    <Scroll>
      <SearchList filteredPersons={filteredGeographicAreas} />
    </Scroll>
  );
}

const header = {
  color: "green",
  fontWeight: "bold", 
  margin: "10%",
}

const geographicareas = [
  { label: 'Australia and/or New Zealand'},
  { label: 'Asia'},
  { label: 'Pacific Islands'},
  { label: 'United States and/or Canada'},
  { label: 'Europe'},
  { label: 'Latin America and/or Caribbean'},
  { label: 'Middle East'},
];

const timeperiod = [
  { label: '19th Century'},
  { label: '20th Century'},
  { label: '21st Century'},
];

  return (
    
      <section className="garamond">
      <div className="pa2" style={{ color: 'darkgreen', left: "40%"}}>
      <h1> Search For An Expert!</h1>

      <div className="navy georgia ma0 grow">
        <h2 className="f2">General Filter</h2>
      </div>

      <div className="pa2" >
        <input 
          className="pa3 bb br3 grow b--none bg-lightest-blue ma3"
          type = "search" 
          placeholder = "Enter A Word" 
          onChange = {handleGeneralChange}
        />
      </div>

      <div className="navy georgia ma0 grow">
       <h2 className="f2">Geographic Filter</h2>
      </div>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={geographicareas}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Geographic Areas" onChange = {handleGeographicChange2}/>}
      />

      <div className="navy georgia ma0 grow">
        <h2 className="f2">Time Period Filter</h2>
      </div>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={timeperiod}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Time Period" onChange = {handlePeriodChange}/>}
      />
      </div>
 
      

    {searchList()}
    
      
  </section>


    
  );
}

export default Search;