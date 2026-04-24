// module imports
import express from "express"


// constant variables 
const route  =  express.Router()

// routes 
route.get("/" ,  (req , res)=>{
    return res.render("login-singup")
})
route.get("/login" ,  (req , res)=>{
    return res.json({
        route:"auth/login",
        satus:"running"
    })
})

export default route