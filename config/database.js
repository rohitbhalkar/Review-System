import mongoose from "mongoose";

const dbConnect=async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("MongoDB Connected Successfully")
    } catch (error) {
        console.log("MongoDB is Not Connected Successfully",error)
    }
}

export default dbConnect;