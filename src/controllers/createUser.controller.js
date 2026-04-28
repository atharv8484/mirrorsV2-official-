import { createUserService } from "../services/createUser.service.js"
import { controllerIndicator } from "../utils/Idicator.utils.js"
import { createJWT } from "../utils/jwt.util.js"

export  async function createUserController(req ,  res , next) {
    try {
        controllerIndicator("Create User Controller")

        const user = await createUserService(req.body)
        console.log("user is created: " ,  user)

        const token  = createJWT({email:user.email ,  UserID:user.userID})
        console.log("token is created" ,  token)

        res.cookie('token' ,  token).status(200).json({
            message:"Your signed up successfully"
        })
    } catch (error) {
        next(error)
    }
    
}