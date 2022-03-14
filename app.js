const express = require('express');
const app = express();

const studentRoute = require('./api/routes/students');

app.use('/students',studentRoute);

app.use((req,res,next)=>{
    res.status(404).json({
        error:'BAD REQUEST'
    })
})

module.exports = app;