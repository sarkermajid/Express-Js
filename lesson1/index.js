const app = require('./app');
const PORT = 3000;

app.get('/',(req,res)=>{
    res.send('I am a get method at home route');
});
app.post('/',(req,res)=>{
    res.send('I am a post method at home route');
});
app.put('/',(req,res)=>{
    res.send('I am a put method at home route');
});
app.delete('/',(req,res)=>{
    res.send('I am a delete method at home route');
});
app.listen(PORT,()=>{
    console.log(`server is running at http://localhost:${PORT}`);
})