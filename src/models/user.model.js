import mongoose from "mongoose";

const schema  = new  mongoose.Schema({
    username:{required:true , type:String},
    email:{required:true , type:String ,  unique:true},
    password:{required:true ,  type:String},
    userID:{required:true ,  type:String ,  unique:true}
})

const userSchema =  mongoose.model("User" ,  schema)

export default userSchema