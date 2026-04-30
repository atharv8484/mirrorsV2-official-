import AppeError from "../utils/appError.util.js";
import { controllerIndicator } from "../utils/Idicator.utils.js";
import { decodeJWT } from "../utils/jwt.util.js";

export async function authValidator(req ,  res ,  next){
    try {

        controllerIndicator("Auth Validator 'Middleware'")

        let token = req.cookies.token
        if(!token){
            return res.redirect('/auth')
        }

        console.log("token Cookie: "  , token)
        let payload =  decodeJWT(token)
        console.log("jwt decoded token: " , payload)

        req.User = {
            email:payload["email"],
            UserID:payload["UserID"]
        }
        next()
    } catch (error) {
        return next(error)
    }
}


