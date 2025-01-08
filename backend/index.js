const express = require('express');
const PORT = 3000;
const app = express();

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Hello World!");
})

app.post("/",(req,res)=>{

});

app.put("/",(req,res)=>{

})

app.listen(PORT,()=>{
    console.log(`App listening on port ${PORT}`);
})