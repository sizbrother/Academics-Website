import * as React from 'react';

import { DataGrid} from '@mui/x-data-grid';
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useSearchParams } from 'react-router-dom';
import emailjs from '@emailjs/browser'


export default function Admin({details, detailsOfUnconfirmed, users}){


    for (let i=0;i<details.length;i++){
        details[i]["id"]= i+1
    }
    for (let i=0;i<detailsOfUnconfirmed.length;i++){
      detailsOfUnconfirmed[i]["id"]= i+1
  }

    // Botton to remove experts 
    // need delete request
    let navigate = useNavigate(); 


    const show_user = (selected_user)=> {
      const id = selected_user._id
      
      let path = "../expertpage/" + id; 
      navigate(path);
    };


    const see_unconfirmed =(selected)=>{
  

    

        //alert(JSON.stringify(selected, null, 4));
          
        // New Tab Window
        var myWindow = window.open("", "_blank");
    
        // Popup Window
        //var myWindow = window.open('/', 'example', "weight=100,height=100");
    
        // Basic Information
        myWindow.document.write("Name: " + selected.first_name + " " + selected.last_name);
        myWindow.document.write("<br>Email: " + selected.email);
    
        if (selected.categories_of_difference != "") {
          myWindow.document.write("<br>Categoties of Difference: " + selected.categories_of_difference);
        }
    
        if (selected.categories_of_difference != "") {
          myWindow.document.write("<br>Geographic Areas: " + selected.geographic_areas);
        }
    
        if (selected.discipline != "") {
        myWindow.document.write("<br>Discipline: " + selected.discipline + '<br>');
        }
    
        // Location Specifications
        if (selected.city != "") {
           myWindow.document.write("<br>City: " + selected.city);
        } if (selected.state != "") {
          myWindow.document.write("<br>State: " + selected.state);
        } if (selected.country != "") {
          myWindow.document.write("<br>Country: " + selected.country);
        }
    
        // Expert Bio
        if (selected.biographical_sketch != "") {
          myWindow.document.write("<br><br>Biographical Sketch: " + selected.biographical_sketch);
        }
        if (selected.twitter_intagram_other_social_media != "") {
          myWindow.document.write("<br>Social Media: " + selected.twitter_intagram_other_social_media);
        } if (selected.media_availability != "") {
          myWindow.document.write("<br>Media Availability: " + selected.media_availability);
        }
    
        if (selected.title != "") {
          myWindow.document.write("<br>Title: " + selected.title);
        }
        if (selected.institutional_affiliation != "") {
          myWindow.document.write("<br>Institutional Affiliation: " + selected.institutional_affiliation);
        }
    
        
      
      };
    

      
  const onButtonClickDeleteExpert = (event, userObject)=>{
    const requestOptions = { 
      method:'DELETE'
    }; 
    fetch("https://womenmormonstudies-server.herokuapp.com/api/Experts/" + userObject._id, requestOptions)
    .then((response)=> {
      alert("Expert Deleted")

      return response.json();
    }).then((result) => {
      console.log(result);
    })
  }
  
    const change = (event, userObject)=>{
      onButtonClickUnconfirmedDelete(event,userObject)
     
      onButtonClickUnconfirmedAdd(event, userObject)
      alert("Expert Moved")
    }
      
    
    // Button to add unconfirmed experts -> experts 
    // need post request
    // used to remove users from db in Experts
   

    const onButtonClickUnconfirmedAdd = (event, userObject)=>{
      var deletedID = structuredClone(userObject)
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
          //notifying people with saved searches
          function containsObject(dict, expert) {
            var i;
            var locations;
            var periods;
            var methods;
            var topics;
            var extras;
            const itemsFound = []
            for (i = 0; i < expert.length; i++) {
              for(locations = 0; locations < dict["locations"].length; locations ++) {
                if (expert[i] == dict["locations"][locations]) {
                    itemsFound.push(dict["locations"][locations])
                }
              }
              for(periods = 0; periods < dict["periods"].length; periods ++) {
                if (expert[i] == dict["periods"][periods]) {
                    itemsFound.push(dict["periods"][periods])
                }
              }
              for(methods = 0; methods < dict["methods"].length; methods ++) {
                if (expert[i] == dict["methods"][methods]) {
                    itemsFound.push(dict["methods"][methods])
                }
              }
              for(topics = 0; topics < dict["topics"].length; topics ++) {
                if (expert[i] == dict["topics"][topics]) {
                    itemsFound.push(dict["topics"][topics])
                }
              }
              for(extras = 0; extras < dict["extras"].length; extras ++) {
                if (expert[i] == dict["extras"][extras]) {
                    itemsFound.push(dict["extras"][extras])
                }
              }
            }
            return itemsFound;
          }
          //putting all expert fields into an array
          function getExpertFields(expertJSON) {
            const expert = [];
            const bibliography = expertJSON["bibliography"]
            if(typeof bibliography !== "undefined") {
              const split_bibliography = bibliography.split(' ')
              var bib;
              for (bib = 0; bib < split_bibliography.length; bib ++) {
                expert.push(split_bibliography[bib])
              }
            }
            const broad_areas = expertJSON["broad_areas"]
            if(typeof broad_areas !== "undefined") {
              const split_broad_areas = broad_areas.split(' ')
              var broad;
              for (broad = 0; broad < split_broad_areas.length; broad ++) {
                expert.push(split_broad_areas[broad])
              }
            }
            expert.push(broad_areas);
            const city = expertJSON["city"];
            expert.push(city);
            const country = expertJSON["country"];
            expert.push(country)
            const discipline = expertJSON["discipline"]
            if(typeof discipline !== "undefined") {
              const split_discipline = discipline.split(' ')
              var disc;
              for (disc = 0; disc < split_discipline.length; disc ++) {
                expert.push(split_discipline[disc])
              }
            }
            expert.push(discipline)
            const institutional_affiliation = expertJSON["institutional_affiliation"];
            expert.push(institutional_affiliation);
            const keywords = expertJSON["keywords"]
            if(typeof keywords !== "undefined") {
              const split_keywords = keywords.split(' ')
              var key;
              for (key = 0; key < split_keywords.length; key ++) {
                expert.push(split_keywords[key])
              }
            }
            expert.push(keywords);
            const state = expertJSON["state"];
            expert.push(state);
            //these are lists
            const geographic_areas = expertJSON["geographic_areas"];
            if(typeof geographic_areas !== "undefined") {
              var area;
              for (area = 0; area < geographic_areas.length; area ++) {
                expert.push(geographic_areas[area])
              }
            }
            const categories_of_difference = expertJSON["categories_of_difference"];
            if(typeof categories_of_difference !== "undefined") {
              var cat;
              for (cat = 0; cat < categories_of_difference.length; cat ++) {
                const split_cats = categories_of_difference[cat].split(' ');
                var split_cat;
                for (split_cat = 0; split_cat < split_cats.length; split_cat ++) {
                  expert.push(split_cats[split_cat])
                }
              }
            }
            const methods_approaches = expertJSON["broad_areas"];
            if(typeof methods_approaches !== "undefined") {
              var meth;
              for (meth = 0; meth < methods_approaches.length; meth ++) {
                expert.push(methods_approaches[meth])
              }
            }
            const time_period = expertJSON["time_period"];
            if(typeof time_period !== "undefined") {
              var time;
              for (time = 0; time < time_period.length; time ++) {
                expert.push(time_period[time])
              }
            }
            return expert
          }
          Object.keys(users).forEach(function(user) {
                  //console.log(searchList)
                  var savedSearches = {}
                  const savedLocations = []
                  //for (i = 0; i < users[user].searches.location.length; i++){
                  users[user].searches.location.forEach(function(curLocation) {
                    savedLocations.push(curLocation)
                  })
                  savedSearches["locations"] = savedLocations
                  const savedPeriods = []
                  users[user].searches.time.forEach(function(periods) {
                    savedPeriods.push(periods)
                  })
                  savedSearches['periods'] = savedPeriods
                  const savedMethods =[]
                  users[user].searches.method.forEach(function(methods) {
                    savedMethods.push(methods)
                  })
                  savedSearches['methods'] = savedMethods
                  const savedTopics = []
                  users[user].searches.topic.forEach(function(topics) {
                    savedTopics.push(topics)
                  })
                  savedSearches['topics'] = savedTopics
                  var savedExtras = []
                  savedExtras = users[user].searches.extra.split(", ")
                  savedSearches['extras'] = savedExtras
                  const expertFields = getExpertFields(deletedID)
                  const sharedInterests = containsObject(savedSearches, expertFields)
                  if (sharedInterests.length > 0) {
                    var i;
                    var sharedInterestsStr = " ";
                    for (i = 0; i < sharedInterests.length; i ++) {
                      sharedInterestsStr = sharedInterestsStr + " " + sharedInterests[i]
                    }
                    const expert_name = deletedID['first_name'] + " " + deletedID['last_name']
                    const email_name = users[user].email
                    let myJSON = {"email": email_name,"shared_interests": sharedInterestsStr, "expert": expert_name}
                    emailjs.send('service_0vgsvuo','template_zabqelj', myJSON, 'jdhmjHsn2vBjeCzSG')
                      .then(result =>{
                        console.log(result.text);
                      },(error) => {
                        console.log(error.text);
                      }
                    )
                  }
            })
      }
    // Button to remove experts 
    // need delete request
    // row is the object of the user 
    const onButtonClickUnconfirmedDelete = (event, userObject)=>{
      alert("Denied!")
      const requestOptions = { 
        method:'DELETE'
      }; 
      fetch("https://womenmormonstudies-server.herokuapp.com/api/UnconfirmedExperts/" + userObject._id, requestOptions)
      .then((response)=> {
        
        return response.json();
      }).then((result) => {
        console.log(result);
      })
    }
    
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'first_name',
          headerName: 'First name',
          width: 150,
          editable: true,
        },
        {
          field: 'last_name',
          headerName: 'Last name',
          width: 150,
          editable: true,
        },
        {
          field: 'email',
          headerName: 'email',
          type: 'Email',
          width: 110,
          editable: true,
        },
        {
          field: 'remove?',
          headerName: 'remove',
          renderCell: (params)=>{
            return (
            <Button
            type = 'submit'

              onClick={(e) => onButtonClickDeleteExpert(e, params.row)}
              variant="contained"
            >
              Delete
            </Button>)
            }
        },
        {
          field: 'View?',
          headerName: 'View',
          renderCell: (params)=>{
            return (
            <Button

              onClick={(e) => show_user(params.row)}
              variant="contained"
            >
              View
            </Button>)
            }
        },
        
      ];
      const columns2 = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'first_name',
          headerName: 'First name',
          width: 150,
          editable: true,
        },
        {
          field: 'last_name',
          headerName: 'Last name',
          width: 150,
          editable: true,
        },
        {
          field: 'email',
          headerName: 'email',
          type: 'Email',
          width: 110,
          editable: true,
        },
        {
          field: 'Add?',
          headerName: 'Edit',
          renderCell: (params)=>{
            return (
            <Button
            type = 'submit'

              onClick={(e) => change(e, params.row)}
              variant="contained"
              
            >
              
              Add
            </Button>)
            }
        },
        {
          field: 'Deny?',
          headerName: 'Deny',
          renderCell: (params)=>{
            return (
            <Button
            type = 'submit'
              onClick={(e) => onButtonClickUnconfirmedDelete(e, params.row)}
              variant="contained"
            >
              Deny
            </Button>)
            }
        },
        
        {
          field: 'View?',
          headerName: 'View',
          renderCell: (params)=>{
            return (
            <Button
            onClick={(e) => see_unconfirmed(params.row)}
            variant="contained"
            >
              View
            </Button>)
            }
        },
        
      ];
    
    return (
      <div style={{ height: 650, width: '100%',  }}>
          <div style={{ height: 500, width: '40%', float:'left', display:'inline', marginLeft:'30px'  }}>
            <p>Current Experts</p>
          {(typeof(details) === 'undefined') ?
      (
        <div>Loading...</div>
      ):
      (
            <DataGrid 
            rows={details}
            columns={columns}
            rowsPerPageOptions={[5,10,25,50,100]}
            checkboxSelection = {false}
            disableSelectionOnClick

            ></DataGrid>
      )}
        </div>
        <div style={{ height: 500, width: '50%', float:'left', display:'inline', marginLeft: '30px' }}>
        <p>Experts looking to Register</p>

          {(typeof(details) === 'undefined') ?
      (
        <p>Loading...</p>
      ):
      (
            <DataGrid 
            rows={detailsOfUnconfirmed}
            columns={columns2}
            rowsPerPageOptions={[5,10,25,50,100]}
            checkboxSelection = {false}
            disableSelectionOnClick
            
            ></DataGrid>
      )}
        </div>
        </div>
    )
}
