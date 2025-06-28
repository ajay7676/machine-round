import React, { useEffect, useState } from 'react'

const TodosComponent = () => {
     const [todoText, setTodoText] = useState({
       id: 1,
       text: ""
     });
     const [todos, setTodos] = useState([])

     // for add empty array if we don't have array in local storage

      useEffect(() => {
      localStorage.setItem("todo-list" , JSON.stringify(todos) || [])
      }, [])
      

     const AddTodoTask = () => {
         setTodos([...todos , todoText]);
         localStorage.setItem("todo-list" , JSON.stringify([...todos , todoText]))
         setTodoText("")

     }
        const hanldleDelete = (index) =>{
           console.log("hnandle Deleted")
            const  deleteTodos = todos.filter((todo, currIndex) =>
                 currIndex !== index
                 
             )
              setTodos(deleteTodos)
               
        }
  return (
    <div className='w-full h-screen flex justify-center items-center'>
         <div className="card flex  flex-col justify-center items-center  bg-white text-slate-700  w-[500px] min-h-[450px] rounded-2xl p-5">
          <label  className='text-2xl py-5 text-left'>Write your todos here</label>
            <input  type='text'
             value={todoText.text} 
             onChange={(e) => setTodoText(e.target.value)}
             placeholder='Enter the todo '
             id='number' className='border-1 px-4 text-sm bg-[#f2f2f2] border-gray-300 h-12 w-full text-black placeholder:text-black'/>
             <div className='my-5'>
                 <button onClick={() => AddTodoTask()} className='bg-green-500 my-5 mt-5'>Click Me</button>
             </div>
             {/* <h2 className='py-9 text-3xl'>Counter : {counter}</h2> */}
             <ul className=' w-full'>
                {
                    todos && todos.map((todo , index) => (
                         <li  key={index} className='py-2 bg-[#eaeaea] px-3 my-3 border-1 border-gray-300 flex items-center justify-between'>
                            <input type='checkbox' className='bg-white border-1 border-gray-400 w-5 h-5'></input>
                            {todo.text}
                           <div className='flex items-center'>
                              <button className='bg-blue-600 text-white'>View</button>
                               <button className='bg-green-600 text-white'>Edit</button>
                               <button  onClick={() => hanldleDelete(index)} className='bg-red-600 text-white'>Delete</button>
                           </div>
                         </li>
                    ))
                }
             </ul>
         </div>
    </div>
  )
}

export default TodosComponent