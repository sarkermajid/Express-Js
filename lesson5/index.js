const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 8080;

app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html');
})

app.listen(PORT,()=>{
    console.log(`server is running at http://localhost:${PORT}`);
})