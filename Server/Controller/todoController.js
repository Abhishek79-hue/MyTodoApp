const Todo=require("./../Model/todoModal")

const createTodo=async(req,res)=>{
    try {
        const{task_name,date}=req.body
        const todo=new Todo({
            task_name:task_name,
            date:date
        })
        await todo.save()
        return res.status(200).json({message:"task create sucessfully",todo})
    } catch (error) {
      console.log({message:"Internal Server Error"})        
    }
}

const getTodo=async(req,res)=>{
    try {
        const userId=req.params.id
        const todo=await Todo.findById({_id:userId})
        return res.status(200).send({message:"Task get Successfully",todo})
    } catch (error) {
        console.log("error")
    }
}
const updateTask=async(req,res)=>{
    try {
        const userId=req.body.id
        const todo=await Todo.findByIdAndUpdate({_id:userId},req.body,{new:true})
        return res.status(200).json({message:"task Update Sucessfully",todo})
    } catch (error) {
        console.log("error")
    }
}
const updateStatus=async(req,res)=>{
    try {
        const userId=req.body.id
        const {status}=req.body
        const todo=await Todo.findByIdAndUpdate({_id:userId},{status:status},{new:true})
        return res.status(200).json({message:"task status update Sucessfully"})
    } catch (error) {
        console.log("error")
        return res.status(500).json({message:"Internal Server Error"})
    }
}
const deleteTodo=async(req,res)=>{
    try {
        const userId=req.body.id
        const {status}=req.body
       const todo=await Todo.findByIdAndUpdate({_id:userId},{status:status},{new:true})
        return res.status(200).json({message:"task Sucessfully deleted",todo})
    } catch (error) {
    console.log({message:"Internal Server error"})
    }
}

const getInprogresstask=async(req,res)=>{
    try {

        const limit=parseInt(req.query.limit) ||10
        const start=parseInt(req.query.start) || 1
        const skip=(start-1)*limit

        const status=req.query.status?{status:{$eq:req.query.status}}:{}
        const todo=await Todo.find(status)
        .sort({createdAt:-1})
        .skip(skip)
        .limit(limit)
        return res.status(200).send({message:"Inprogress task all find Sucessfully",todo})
    } catch (error) {
        console.log({message:"Internal Server error"})
    }
}
module.exports={createTodo,deleteTodo,getTodo,updateTask,updateStatus,getInprogresstask}
