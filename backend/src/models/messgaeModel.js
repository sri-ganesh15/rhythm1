import mongoose from "mongoose";

const messageSchema=new mongoose.Schema({
    senderId:{type:String,required:true},//these will be the clerk ids 
    reciverId:{type:String,required:true},
    messgae:{type:String,required:true}
},{timestamps:true})

export const Message=mongoose.model("Messgae",messageSchema)