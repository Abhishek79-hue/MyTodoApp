import React from 'react';
import "./NavBar.css"
import { Link } from 'react-router-dom';
function NavBar() {
  return (
    <div className='nav-Container'>
             <h1 className='Todo'>Todo-App</h1>
             <p>Hello Jerry</p>
            
       <ul className='nav-bar'>
       <li><Link to="/">In-Progress</Link></li>
       <li><Link to="/complete">Completed-Task</Link></li>
       <li><Link to="/delete">Deleted-Task</Link></li>
      </ul>
      
    </div>
  );
}

export default NavBar;
