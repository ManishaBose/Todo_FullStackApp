import { useState,useEffect } from 'react'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {
  const [todos, setTodos] = useState([]);

  //not the right way to do this. useEffect() hook should be used instead
  fetch("https://todo-fullstackapp-backend.onrender.com").then(async function(res){
    const json = await res.json();
    setTodos(json.todos);
  })
  return (
      <div>
        <CreateTodo/>
        <Todos todos={todos}/>
      </div>
  )

}


export default App
