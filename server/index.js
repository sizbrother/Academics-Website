const express = require('express')
const path = require('path')
var cors = require('cors')
const mongodb = require('mongodb')
const dbConnect = require('./mongodb')
const MongoClient = require('mongodb').MongoClient
const app = express()
app.use(express.json())
app.use(cors())
var database

const uri = "mongodb+srv://ronnaksaxena:Federer132001%21@testing.0coh3qi.mongodb.net/?retryWrites=true&w=majority";


app.get("/", (req, res) => {
    res.send("express is here")
})
// To access mormon users
app.get('/api/Experts', (req, resp) => {
    database.collection('Experts').find({}).toArray((err, result) => {
        if (err) throw err
        console.log("sending this to get")
        console.log(resp)
        resp.send(result)
    })
})
// To access experts that want to register
app.get('/api/UnconfirmedExperts', (req, resp) => {
    database.collection('UnconfirmedExperts').find({}).toArray((err, result) => {
        if (err) throw err
        console.log("sending this to get")
        console.log(resp)
        resp.send(result)
    })
})

// To access users that want to register
app.get('/api/Users', (req, resp) => {
    database.collection('Users').find({}).toArray((err, result) => {
        if (err) throw err
        console.log("sending this to get")
        console.log(resp)
        resp.send(result)
    })
})

// To delete experts that aren't registered yet
app.delete("/api/UnconfirmedExperts/:id", async (req, resp) => {
    console.log(req.params.id)
    const data = database.collection('UnconfirmedExperts')
    const result = await data.deleteOne({_id: new mongodb.ObjectID(req.params.id)})
    resp.send(result)
})

// To delete existing experts
app.delete("/api/Experts/:id", async (req, resp) => {
    console.log(req.params.id)
    const data = database.collection('Experts')
    const result = await data.deleteOne({_id: new mongodb.ObjectID(req.params.id)})
    resp.send(result)
})

// To delete users
app.delete("/api/Experts/:id", async (req, resp) => {
    console.log(req.params.id)
    const data = database.collection('Users')
    const result = await data.deleteOne({_id: new mongodb.ObjectID(req.params.id)})
    resp.send(result)
})

// To add unconfirmed experts to db
app.post("/api/UnconfirmedExperts", async (req, resp) => {
    const data = database.collection('UnconfirmedExperts')
    const result = await data.insert(req.body)
    resp.send(result)
})

// To modify unconfirmed experts to db
app.put("/api/UnconfirmedExperts/:id", async (req, resp) => {
    const data = database.collection('UnconfirmedExperts')
    const result = await data.findOneAndUpdate({_id: new mongodb.ObjectID(req.params.id)}, {$set: req.body})
    resp.send(result)
})

// To add experts to db
app.post("/api/Experts/:id", async (req, resp) => {
    const data = database.collection('Experts')
    const result = await data.insert(req.body)
    resp.send(result)
})
// To modify experts in db
app.put("/api/Experts/:id", async (req, resp) => {
    const data = database.collection('Experts')
    const result = await data.findOneAndUpdate({_id: new mongodb.ObjectID(req.params.id)}, {$set: req.body})
    resp.send(result)
})

// To add users to db
app.post("/api/Users", async (req, resp) => {
    const data = database.collection('Users')
    const result = await data.insert(req.body)
    resp.send(result)
})
// To modify users in db
app.put("/api/Users/:id", async (req, resp) => {
    const data = database.collection('Users')
    const result = await data.findOneAndUpdate({_id: new mongodb.ObjectID(req.params.id)}, {$set: req.body})
    resp.send(result)
})

app.listen(process.env.PORT, () => {
    MongoClient.connect(uri, {useNewURLParser: true}, (error, result) => {
        if (error) throw error
        database = result.db('Mormon')
        console.log('Connection sucessful')
        // console.log(`Server listening on ${PORT}`);
    })
});

// if (process.env.NODE_ENV == 'production') {
//     app.use(express.static("client/build"));
//     app.get("*", (req, res) => {
//         res.sendFile(path.resolve(_dirname, "client", "build", "index.html"));
//     });
// }
// to delete the unwanted experts 
// app.delete("/api/UnconfirmedExperts/:id", (req,resp)=> {
//     console.log(req)
//     db.collection('UnconfirmedExperts').remove({_id: mongodb.ObjectID( req.params.id)}, (err, result) => {
//         if (err) return console.log(err)
//         console.log(req.body)
//         res.redirect('/')
//     })
// })

// app.get("/api", (req, res) => {
//     res.json({ message: "Hello from server!" });
//   });

//   app.listen(PORT, () => {
//     console.log(`Server listening on ${PORT}`);
//   });
