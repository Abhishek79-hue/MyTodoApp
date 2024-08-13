import React from 'react';

import { TodoContextProvider } from './Context/TodoContext';
import NavBar from './Components/NavBar';
import Routing from './Components/Routing';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <TodoContextProvider>
      <BrowserRouter>
      <NavBar/>
      <Routing/>
      </BrowserRouter>
    </TodoContextProvider>
  );
}

export default App;
