const express = require('express');
const PORT = 3000;
const app = express();

app.get("/",(req,res)=>{
    res.send("Hello World!");
})

app.post("/",(req,res)=>{

});

app.put("/",(req,res)=>{
    
})

app.listen(port,()=>{
    console.log(`App listening on port ${port}`);
})