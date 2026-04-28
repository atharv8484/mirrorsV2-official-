import { generateId } from "../utils/uiqueString.util.js";
import userSchema from "../models/user.model.js";
import { serviceIdicator } from "../utils/Idicator.utils.js";
import AppeError from "../utils/appError.util.js";

export async function createUserService(data) {

    serviceIdicator("Create user service");

    const checkUser = await userSchema.findOne({ email: data.email });
    if (checkUser) {
        let error = new AppeError("Email  already has been used.", 400);
        throw error;
    }

    const uniqueID = generateId();
    console.log("Unqiue ID", uniqueID);
    const user = {
        fullname: data.fullName,
        email: data.email,
        password: data.password,
        userID: uniqueID,
    };
    await userSchema.create(user);

    return user;
}
