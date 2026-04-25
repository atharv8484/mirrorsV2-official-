// module imports
import express from "express"


// constant variables 
const route  =  express.Router()

// routes 
route.get("/" ,  (req , res)=>{
    return res.render("login-singup")
})

export default route