// module imports
import express from "express"


// file imports
import fieldValidater from "../middlewares/fieldValidator.middleware.js"


// constant variables 
const route  =  express.Router()

// routes 
route.get("/" ,  (req , res)=>{
    return res.render("login-singup")
})

route.post("/singup" , fieldValidater() ,  (req ,  res)=>{
    return res.status(200).json({
        success:true
    })
})

export default route