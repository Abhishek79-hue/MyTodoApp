import axios from 'axios';
import React, { useEffect } from 'react';
import { useTodo } from '../Context/TodoContext';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar,faPlus,faEdit,faTrash, faCheck} from '@fortawesome/free-solid-svg-icons';
import "./TodoList.css"
function TodoList() {
  const { data,setData} = useTodo();
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:1100/api/get/task?limit=10&start=1&status=1");
        setData(prevData => ({
          ...prevData,
          inProgressTodo: res.data.todo
        }));
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };
    fetchData();
  }, [setData]);
  
  const handleEdit=async(_id)=>{
    try {
      let res=await axios.get(`http://localhost:1100/api/task/${_id}`)
    setData(prevData => ({
      ...prevData,
      editId:_id,
      task_name:res.data.todo.task_name,
      date:res.data.todo.date
    }));
    } catch (error) {
      console.log("error")
    }
  }
  const handleDelete=async(_id)=>{
    try {
     await axios.put("http://localhost:1100/api/task/delete",{id:_id,status:3})
     setData((prevData) => ({
      ...prevData,
      inProgressTodo: prevData.inProgressTodo.filter(task => task._id !== _id)
    }));
    } catch (error) {
      console.log("error")
    }
  }
  const handleComplete=async(_id)=>{
    try {
      await axios.post("http://localhost:1100/api/task/status",{id:_id,status:2})
      setData((prevData) => ({
        ...prevData,
        inProgressTodo:prevData.inProgressTodo.filter(task => task._id !== _id)
      }));
    } catch (error) {
      console.log("error")
    }}
  return (  
    <div>
    <div className='todo-container'>
      <h1>In-Progress Tasks</h1>
      {data.inProgressTodo.map(task => (
      <div key={task._id } className='list-Wrap'>
       <div>{task.task_name}</div>
       <div><FontAwesomeIcon icon={faCalendar} style={{color:'orange'}}/>{task.date}</div>
       <div className='btn'>
       <button onClick={()=>handleEdit(task._id)}><Link to="/edit"><FontAwesomeIcon icon={faEdit}/></Link></button>
       <button onClick={()=>handleDelete(task._id)}><FontAwesomeIcon icon={faTrash}/></button>
       <button onClick={()=>handleComplete(task._id)}><FontAwesomeIcon icon={faCheck}/></button>
       </div>
      </div>
        ))}
    </div>  
    <button className="submit-button"><Link to="/add"><FontAwesomeIcon icon={faPlus}/></Link></button>
  </div>
  );
}

export default TodoList;
