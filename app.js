const express = require('express');
const studentRoute = require('./api/routes/students');
const userRoute = require('./api/routes/user');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.connect('mongodb+srv://sbs:reza@sbs.l1fh8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
mongoose.connection.on('error',err=>{
    console.log('connection failed');
});

mongoose.connection.on('connected',connected=>{
    console.log('connected with database ');
});



app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/students',studentRoute);
app.use('/user',userRoute);

app.use((req,res,next)=>{
    res.status(404).json({
        error:'BAD REQUEST'
    })
})

module.exports = app;