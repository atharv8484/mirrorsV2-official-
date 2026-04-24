import mongoose from "mongoose"

const schema = mongoose.Schema({
    folderName:{type:String , required:true , unique:true},
    folderID:{type:String , required:true ,  unique:true},
    userID:{type:String ,  required:true}
})

const folderSchema = mongoose.model("folder" ,  schema)

export default folderSchema