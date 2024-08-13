const express=require("express")
const mongoose=require("mongoose")
const bodyparser=require("body-parser")
const cors=require("cors")
require("dotenv").config()

const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())
app.use(bodyparser.json())

const todoRouter=require("./Router/todoRoutes")
const Port=process.env.Port
const DB_URL=process.env.DB_URL

app.use("/api",todoRouter)

mongoose.connect(DB_URL).then(app.listen(Port,()=>{
    console.log(`Database Sucessfully Connected\nServer listen at Port ${Port}`)
}))

