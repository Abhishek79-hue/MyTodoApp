const mongoose=require("mongoose")

const todoSchema=new mongoose.Schema({
    task_name:{type:String,required:true},
    date:{type:String,required:true},
    status:{type:Number,default:1}
},{timestamps:true})

const Todo=mongoose.model("Todo",todoSchema)


module.exports=Todo;