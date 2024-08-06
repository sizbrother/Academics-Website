const express = require('express')
var cors = require('cors')
const MongoClient = require('mongodb').MongoClient
const app = express()

app.use(express.json())
app.use(cors())
var database

app.get('/', (req, resp) => {
    resp.send('Welcome to mongodb api')
})

// To access mormon users
app.get('/api/Experts', (req, resp) => {
    database.collection('Experts').find({}).toArray((err, result) => {
        if (err) throw err
        resp.send(result)
    })
})
const uri = "mongodb+srv://ronnaksaxena:Federer132001%21@testing.0coh3qi.mongodb.net/?retryWrites=true&w=majority";

app.listen(8080, () => {
    MongoClient.connect( uri, {useNewURLParser: true}, (error, result) => {
        if (error) throw error
        database = result.db('Mormon')
        console.log('Connection sucessful')
    })
})


