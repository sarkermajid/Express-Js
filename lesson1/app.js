const express = require('express');
const app = express();
const userRouter = require('./routes/users.route');

app.use('/api/user/',userRouter);

app.use('/register',(req,res)=>{
    res.statusCode = 200;
    res.sendFile(__dirname+'/views/register.html');
    // res.redirect('/login');
});

app.use('/login',(req,res)=>{
    res.cookie('name','sarker majid');
    res.cookie('age','25');
    res.append('id','183039');
    res.json({
        name : 'sarker majid',
        profession : 'Software engineer',
        statusCode : 200,
    })
    // res.clearCookie('name');
    res.end();
})
app.use('/',(req,res)=>{
    res.statusCode = 200;
    res.sendFile(__dirname+'/views/index.html');
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