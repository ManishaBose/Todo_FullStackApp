import { useState } from "react";

export function CreateTodo(){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    return <div>
        <input type="text" placeholder="Title" onChange={function(e){
            setTitle(e.target.value);
        }}></input> <br/> <br/>
        <input type="text" placeholder="Description" onChange={function(e){
            setDescription(e.target.value);
        }}></input> <br/> <br/>
        <button onClick={()=>{
            fetch("https://todo-fullstackapp-backend.onrender.com",
            {
                method: "POST",
                body: JSON.stringify({
                    title: title,
                    description: description
                }),
                headers: {
                    "Content-type": "application/json"
                }
            })
                .then(async function(res){
                    const json = await res.json();
                    alert("Todo added!")
                })
        }}>Add Todo</button> <br/>
        <hr/>
    </div>
}

// module.exports = {
//     CreateTodo
// }