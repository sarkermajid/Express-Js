const express = require('express');
const app = express();
const hostname = '127.0.0.1';
const PORT = 3000;

// query parameter
// app.get('/',(req,res)=>{
//     const name = req.query.name;
//     const id = req.query.id;
//     res.send(`<h1>Student Name is : ${name} and Id is : ${id}</h1>`);
//     res.end();
// })


// route parameter
app.get('/studentName/:name/studentId/:id/studentAge/:age',(req,res)=>{
   const name = req.params.name;
   const id = req.params.id;
   const age = req.params.age;
   res.send(`<h1>Student Name is : ${name} , Id is : ${id} & Age is : ${age}</h1>`);
   res.end();
})

app.listen(PORT,()=>{
    console.log(`server is running at http://${hostname}:${PORT}`);
})