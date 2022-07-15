const express = require('express');
const app = express();
const userRouter = require('./routes/users.route');

app.use('/api/user/',userRouter);

app.get('/',(req,res)=>{
    res.send('I am a get method at home route');
    res.end();
});
app.use((req,res)=>{
    res.send('404 ! Not a valid url');
    res.end();
});
// app.post('/',(req,res)=>{
//     res.send('I am a post method at home route');
//     res.end();
// });
// app.put('/',(req,res)=>{
//     res.send('I am a put method at home route');
//     res.end();
// });
// app.delete('/',(req,res)=>{
//     res.send('I am a delete method at home route');
//     res.end();
// });

module.exports = app;