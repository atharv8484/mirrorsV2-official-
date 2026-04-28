import jwt from 'jsonwebtoken'

export function createJWT(payload){
    const obj  = {}
    Object.keys(payload).forEach(key=>{
        const token = jwt.sign(payload[key] , process.env.JWT_SECRET)
        obj[key] =  token
    })

    return obj
}