const express = require('express');
const route = express.Router();

route.get('/register',(req,res)=>{
    res.send('I am a get request at register route');
    res.end();
});

route.get('/login', (req,res)=>{
    res.send('I am a get request at login route');
    res.end();
});


module.exports = route;