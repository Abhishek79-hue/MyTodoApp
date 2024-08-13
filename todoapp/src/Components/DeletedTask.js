import axios from 'axios';
import React, { useEffect } from 'react';
import { useTodo } from '../Context/TodoContext';

function DeletedTask() {
  const { data, setData } = useTodo();

  useEffect(() => {
    const fetchData = async () => {
      try {
      
        const res = await axios.get("http://localhost:1100/api/get/task?limit=10&start=1&status=3");
        setData(prevData => ({
          ...prevData,
          DeletedTodos:res.data.todo
        }));
    
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };
    fetchData();
  }, [setData]);

  return (
    <div className='todo-container'>
    <h1>DeletedTask Tasks</h1>
    {data.DeletedTodos.map(item => (
    <div key={item._id } className='list-Wrap'>
     <div>{item.task_name}</div>
    </div>
      ))}
  </div>    
  );
}

export default DeletedTask
