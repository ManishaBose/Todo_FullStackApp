import { useState } from 'react'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {
  const todoTemp = [{
      "_id": {
        "$oid": "677f61dd2c4c6219dc2f697b"
      },
      "title": "Finish building Todo App",
      "description": "Use React for frontend, node for backend, and mongodb for database",
      "completed": true,
      "__v": 0
  },{
    "_id": {
      "$oid": "6780151eda945e2fd33efd04"
    },
    "title": "LeetCode Daily Problem",
    "description": "A question on string matching",
    "completed": false,
    "__v": 0
  }]
  return (
      <div>
        <CreateTodo/>
        <Todos todos={todoTemp}/>
      </div>
  )
}

export default App
