import mongoose from 'mongoose'



export const ConnectDb = async()=>{
    try{
        const conn =await mongoose.connect(process.env.MONGO_URI)
        console.log(`connected to MONGODB ${conn.connection.host}`)

    }
    catch(err){
        console.log("Failed to connect to the mongodb ");
        console.log(err);
        process.exit(1);

    }
}