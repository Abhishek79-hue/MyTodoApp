import axios from 'axios'
import "./AddTask.css"
import { useTodo } from '../Context/TodoContext'
import { useNavigate } from 'react-router-dom'
function AddTask() {
const{data,setData}=useTodo()
const{editId}=data;
const navigate=useNavigate()

const handleChange=(e)=>{
const{name,value}=e.target;
setData((prevData)=>({
  ...prevData,
  [name]:value,
}))
}
const handleSubmit=async(e)=>{
  e.preventDefault()
try {
  await axios.post("http://localhost:1100/api/task",{task_name:data.task_name,date:data.date})
 setData((prevData)=>({
 ...prevData,
 task_name:"",
date:""
 }))
  alert("Task Sucessfully Added")
  navigate("/")
} catch (error) {
  console.log(error)
}}
const handleUpdate=async(e)=>{
  e.preventDefault()
  try {
    await axios.put("http://localhost:1100/api/task",{id:editId,task_name:data.task_name,date:data.date})
    setData(prevData => ({
      ...prevData,
      editId: '',
      task_name:"",
      date:""
    }));
   
    alert("Task sucessfully Updated")
   navigate("/")
  } catch (error) {
    console.log("error")
  }
}
  return (
    <div className='container'>
       <form>
        <fieldset>
      <h2>Add Task</h2>
     <label for="taskName">Task Name</label><br/>
        <input type="text" id="taskName" placeholder="Add task" name="task_name" onChange={handleChange} value={data.task_name}/><br/>
       <label for="taskDate">Date of Task</label><br/>
        <input type="date" min={new Date().toISOString().split('T')[0]}id="taskDate" name="date" onChange={handleChange} value={data.date}/>
        {!editId ?
            <button type="submit" onClick={handleSubmit}>Add Task</button> :
            <button type="submit" onClick={handleUpdate}>Update Task</button>}
    </fieldset>
</form>    
    </div>
  )
}

export default AddTask