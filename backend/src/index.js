import express from "express"
import userRoutes from './routes/userRoutes.js'


const app=express()

app.get('/',(req,res)=>{
    res.send("Backend is running ")
})
app.use('/api/users',userRoutes);

app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})