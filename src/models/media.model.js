import mongoose from "mongoose";

const schema =  mongoose.model({
    mideaFilename:{type:string , required:String , unique:true},
    mideaType:{
        type:String,
        enum:["image" ,  "pdf"],
    },
    mediaID:{required:true ,  unique:true , type:String},
    folderID:{type:String , required:true}

})

const mediaSchema =  mongoose.model("media" ,  schema)

export default schema