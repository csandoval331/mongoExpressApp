require('dotenv').config()
const routes = require('./routes/routes')
const express = require('express')
const mongoose = require('mongoose')
const mongoString = process.env.DATABASE_URL

console.log(process.env)
// connecting to the database
mongoose.connect( mongoString)
const database = mongoose.connection

database.on('error', (error) => {
    console.log(error)
})
database.once('connected', () => {
    console.log('Database Connected')
})


const app = express()

// - express.json() and express.urlencoded() are middlewares (methods/functions/operation) that are called
//   between processing the request and sending a response in your app
// - express.json() is a middleware that acts on post/put request. It processes the req.body of post/put request
//      > it will parse req.body as json object
// - express.urlencoded() will parse req.body as ascii chararcter
// # project idea - parse req.body manually and build your own body parser
app.use(express.json() )

app.use('/api', routes)

app.get('/', (req, res) => {
    res.send("Hello world")
})


app.listen(3000, () => {
    console.log(`Server starter on port ${3000}`)
})
