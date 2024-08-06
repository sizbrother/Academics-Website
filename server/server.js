const { application } = require("express")
const express = require("express")
const cors = require('cors')
const app = express()

const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
}
app.use(cors(corsOptions))
const initialDetails = [
{
    id: 1,
    imgPath: "/assets/Doodle Avatar-01.png",
    name: "Jane Doe",
    email: "janedoe@gmail.com",
    address: "New Delhi, India",
    interest: "Tennis",
    
},
{
    id: 2,
    imgPath: "/assets/Doodle Avatar-02.png",
    name: "Mary Rosamund",
    email: "agra@rosie.com",
    address: "Tbilisi, India",
    interest: "Soccer",
},
{
    id: 3,
    imgPath: "/assets/Doodle Avatar-03.png",
    name: "Sherlock Watson",
    email: "irene@johnlock.com",
    address: "Baker Street, India",
    interest: "Basketball",
},
{
    id: 4,
    imgPath: "/assets/Doodle Avatar-04.png",
    name: "John Holmes",
    email: "mary@johnlock.com",
    address: "Baker Street, India",
    interest: "Football",
},
{
    id: 5,
    imgPath: "/assets/Doodle Avatar-05.png",
    name: "Mycroft Lestrade",
    email: "britishgovt@gmail.com",
    address: "London, India",
    interest: "Squash",
},
];

app.get("/api", (req, res) =>  {
    res.json({"users" : initialDetails})
})

app.listen(3000, () => { console.log("Server started on 3000")})