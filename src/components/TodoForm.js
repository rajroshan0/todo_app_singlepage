import { useState } from "react"
import React from 'react'



const TodoForm = ({addTodo}) => {

    const[value, setValue] =  useState("")

    const handleSubmit = (event) =>{
        event.preventDefault();
        addTodo(value);
        setValue("")
    }

    return (
      <form className='TodoForm' onSubmit={handleSubmit}> 
      <input type="text" className='todo-input'
      value={value}
       placeholder="what is the task today" 
      onChange={(event)=> setValue(event.target.value)} />
      <button type='submit' className='todo-btn' >Add task</button>
       </form>
    )
}

export default TodoForm
