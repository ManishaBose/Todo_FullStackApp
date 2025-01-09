const express = require('express');
const { createTodoSchema, updateTodoSchema } = require('./types');
const { Todo } = require('./db');
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

app.get("/",async (req,res)=>{
    const todos = await Todo.find({});
    res.status(200).json({
        todos
    })
})

app.post("/",async (req,res)=>{
    const validation = validatePostInput(req.body);
    if(!validation.success){
        return res.status(400).json({
            message: "Invalid input. Try again"
        })
    }
    //validation.data
    const {title, description} = validation.data;
    try{
        await Todo.create({
            title,
            description,
            completed: false
        });
        return res.status(200).json({
            message: "Todo added."
        })
    } catch(e){
        console.error(e);
        res.status(500).json({
            message: "Todo couldn't be created."
        })
    }
});

app.put("/",async (req,res)=>{
    const validation = validatePutInput(req.body);
    if(!validation.success){
        return res.status(400).json({
            message: "Invalid input. Try again"
        })
    }
    const id = validation.data.id;
    try{
        const result = await Todo.updateOne({_id : id}, {$set: {
            completed: true
        }});
        if(result.matchedCount === 0){
            return res.status(404).json({
                message: "Todo not found"
            })
        }
        return res.status(200).json({
            message: "Todo completed."
        })
    } catch(e){
        console.error(e);
        return res.status(500).json({
            message: "Internal server error"
        })
    }
})

app.listen(PORT,()=>{
    console.log(`App listening on port ${PORT}`);
})