const express = require('express');
const app = express();
const hostname = '127.0.0.1';
const PORT = 3000;

app.get('/',(req,res)=>{
    const name = req.query.name;
    const id = req.query.id;
    res.send(`<h1>Student Name is : ${name} and Id is : ${id}</h1>`);
    res.end();
})

app.listen(PORT,()=>{
    console.log(`server is running at http://${hostname}:${PORT}`);
})