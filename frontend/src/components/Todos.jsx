export function Todos({todos}){
    return (
        <div>
            {todos.map((todo)=>{
            return <div>
                <h1>{todo.title}</h1>
                <p>{todo.description}</p>
                <button onClick={()=>{
                    fetch("http://localhost:3000/",
                    {
                        method: "PUT",
                        body: JSON.stringify({
                            id: todo._id,
                        }),
                        headers: {
                            "Content-type": "application/json"
                        }
                    })
                        .then(async function(res){
                            const json = await res.json();
                            alert("Todo completed!")
                        })
                }}>{todo.completed==true ? "Completed":"Mark as complete"}</button>
            </div>
            })}
    </div>)
}