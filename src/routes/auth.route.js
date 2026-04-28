// module imports
import express from "express"


// file imports
import fieldValidater from "../middlewares/fieldValidator.middleware.js"
import { createUserController } from "../controllers/createUser.controller.js"


// constant variables 
const route  =  express.Router()

// routes 
route.get("/" ,  (req , res)=>{
    return res.render("login-singup")
})

route.post("/singup" , fieldValidater() ,  createUserController)

export default route