import React, { useState } from 'react'

const App = () => {
  const [todo, setTodo] = useState('');
  
  const[todoList , setTodoList]= useState([]);
 
  const addTodo = () =>{
    if (todo.trim() == '') return;
    setTodoList([...todoList,{id:Date.now(), text:todo, completed:false}])
    setTodo('');
  }
   const toggleComplete =(id)=>
    {
      setTodoList(todoList.map((item) => item.id === id? {...item,completed: !item.completed }: item))
   
    }
    const deleteTodo = (id) => {
      setTodoList (
         todoList.filter((item) => item.id !== id) //list remove when user click delete button.
      )
       
      
    }

  return (
    <div className='app-container'>
      <h1>To-do List </h1>
      <div className="input-container" >

      <input type="text" placeholder='Add a new task...' Value={todo} onChange={(e) => setTodo(e.target.value)} />  
       <button className= 'add-btn' onClick={addTodo}>Add</button>
      </div> 
      <ul className='todo-list'>
        { todoList.map((item) => (
          <li 
           key={item.id} 
           onClick={()=> toggleComplete(item.id)}
           style={
            {
              cursor:'pointer',
              textDecoration: item.completed? 'line-through':'none',
              color:item.completed? 'grey':'black'
              
            }
           }
           >
            <span>{item.text}</span> <button className='delete-btn' onClick={(e)=> {
              e.stopPropagation();
              deleteTodo(item.id);
            }
            }>Delete</button>
         </li> //item.id == Date.now stores.
        ))}
      </ul>
    </div>
  )
}

export default App
