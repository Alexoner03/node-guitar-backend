const express = require('express')
const cors = require('cors')
const app = express()
const routes = require('./controllers')
const port = 8080
const mongoose = require('mongoose');

app.use(cors())
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/api',routes)


app.listen(port, () => {
    console.log(`Guitar Backend UP on ${port}`)
    mongoose.connect('mongodb://localhost:27017/guitarUser').then(r => console.log("Database Connected"));
})
