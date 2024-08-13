import React from 'react';
import {Routes,Route} from 'react-router-dom';
import TodoList from './TodoList';
import CompletedTask from './CompletedTask';
import DeletedTask from './DeletedTask';
import AddTask from './AddTask';


function Routing() {
  return (
    
    <Routes>
         <Route path="/" element={<TodoList/>}/>
          <Route path="/complete" element={<CompletedTask />} />
          <Route path="/delete" element={<DeletedTask />} />
          <Route path="/add" element={<AddTask/>}/>
          <Route path="/edit" element={<AddTask/>}/>
        </Routes>

  );
}

export default Routing;
