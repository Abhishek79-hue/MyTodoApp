import { createContext, useContext, useState } from "react";

const TodoContext = createContext();

export const TodoContextProvider = ({ children }) => {
  const [data, setData] = useState({
    inProgressTodo: [],
    completedTodos: [],
    DeletedTodos: [],
    task_name:"",
    date:"",
    editId:""
  });

  return (
    <TodoContext.Provider value={{data,setData}}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => useContext(TodoContext);
