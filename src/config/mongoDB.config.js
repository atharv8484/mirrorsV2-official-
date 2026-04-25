import mongoose from "mongoose";

// const variables
const MongoDB_STRING = process.env.MONGODB_STRING

async function connectMongoDB() {
    try {
        await mongoose.connect(MongoDB_STRING)
        console.log("Database connected")

    } catch (error) {
        console.log(error.message)
        process.exit(1)        
    }
}

export default connectMongoDB