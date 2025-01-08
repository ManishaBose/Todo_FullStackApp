const express = require('express');
const { createTodoSchema, updateTodoSchema } = require('./types');
const PORT = 3000;
const app = express();

app.use(express.json());

function validatePostInput(obj){
    const response = createTodoSchema.safeParse(obj);
    return response;
}

function validatePutInput(obj){
    const response = updateTodoSchema.safeParse(obj);
    return response;
}

app.get("/",(req,res)=>{
    //res.send("Hello World!");
})

app.post("/",(req,res)=>{
    const validation = validatePostInput(req.body);
    if(!validation.success){
        return res.status(400).json({
            message: "Invalid input. Try again"
        })
    }
});

app.put("/",(req,res)=>{
    const validation = validatePutInput(req.body);
    if(!validation.success){
        return res.status(400).json({
            message: "Invalid input. Try again"
        })
    }
})

app.listen(PORT,()=>{
    console.log(`App listening on port ${PORT}`);
})