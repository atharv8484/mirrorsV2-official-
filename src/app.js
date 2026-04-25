//  module imports 
import express from "express"
import "dotenv/config"
import path from "path"

// file imports 
import authRoute from './routes/auth.route.js'
import connectMongoDB from "./config/mongoDB.config.js"
import globalErrorHandler from "./middlewares/globalErrorHandler.middleware.js"
import AppError from "./utils/appError.util.js"



// constant variables
const PORT  = process.env.PORT 
const app =   express()

const _public =  path.resolve("public")
const _views =  path.resolve("src" , "views")


app.use(express.json())

//ejs 
app.set("view engine" ,  "ejs")
app.set("views" , _views)

// public
app.use("/public" ,  express.static(_public))

// middlewares
app.use(
    "/auth" , 
    authRoute
)

// route
app.get("/" ,  (req  ,  res ,  next)=>{     
    return res.render("main")
})

// globalErrorHandler
app.use(globalErrorHandler)

// db connections
// await connectMongoDB()

app.listen(PORT ,  ()=>{
    console.log(`http://127.0.0.1:${PORT}`)
})
