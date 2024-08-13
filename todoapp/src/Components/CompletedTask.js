import axios from 'axios';
import React, { useEffect } from 'react';
import { useTodo } from '../Context/TodoContext';

function CompletedTask() {
  const { data, setData } = useTodo();
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:1100/api/get/task?limit=10&start=1&status=2");
        setData(prevData => ({
          ...prevData,
          completedTodos: res.data.todo
        }));
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };
    fetchData();
  }, [setData]);

  return (
    <div className='todo-container'>
      <h1>Completed Tasks</h1>
      {data.completedTodos.map(item => (
      <div key={item._id } className='list-Wrap'>
       <div>{item.task_name}</div>
       </div>
        ))}
    </div>
  );
}

export default CompletedTask
