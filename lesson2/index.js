const express = require('express');
const app = express();
const hostname = '127.0.0.1';
const PORT = 3000;

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.post('/user',(req,res)=>{
    const name = req.body.name;
    const age = req.body.age;
    res.send(`Welcome ${name} and You are ${age}`);
});


app.get('/register',(req,res)=>{
    res.sendFile(__dirname + '/register.html');
})

app.post('/register',(req,res)=>{
    const email = req.body.email;
    const password = req.body.password;
    res.send(`<h2>User Email : ${email} and Password : ${password}</h2>`);
    res.end();
})

// query parameter
// app.get('/',(req,res)=>{
//     const name = req.query.name;
//     const id = req.query.id;
//     res.send(`<h1>Student Name is : ${name} and Id is : ${id}</h1>`);
//     res.end();
// })


// route parameter
// app.get('/studentName/:name/studentId/:id/studentAge/:age',(req,res)=>{
//    const name = req.params.name;
//    const id = req.params.id;
//    const age = req.params.age;
//    res.send(`<h1>Student Name is : ${name} , Id is : ${id} & Age is : ${age}</h1>`);
//    res.end();
// })

app.listen(PORT,()=>{
    console.log(`server is running at http://${hostname}:${PORT}`);
})