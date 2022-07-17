const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


app.get('/', (req,res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/circle',(req,res)=>{
    res.sendFile(__dirname + '/views/circle.html');
});

app.get('/triangle',(req,res)=>{
    res.sendFile(__dirname + '/views/triangle.html');
});

app.post('/triangle',(req,res)=>{
    const base = req.body.base;
    const height = req.body.height;
    const areaCalculateForTriangle = 0.5 * base * height;
    res.send(`Triangle Area is : ${areaCalculateForTriangle}`);
    res.end();
});

app.post('/circle', (req,res)=>{
    const radius = req.body.radius;
    const areaCalculateForRadius = Math.PI * radius * radius;
    res.send(`Radius Area is : ${areaCalculateForRadius}`);
    res.end();
})


 
app.listen(PORT, ()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
});