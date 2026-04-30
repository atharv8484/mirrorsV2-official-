import jwt from 'jsonwebtoken'

export function createJWT(payload){
    const token = jwt.sign(payload , process.env.JWT_SECRET)

    return token
}

export function decodeJWT(token){
    const decode = jwt.verify(token ,  process.env.JWT_SECRET)
    return decode
}

