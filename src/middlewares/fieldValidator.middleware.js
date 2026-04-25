import AppeError from "../utils/appError.util.js";
import { funcIndicator } from "../utils/Idicator.utils.js";

function validateEmail(email) {
  return;
}

function fieldValidater(allowedFields = ["fullName" , "email" ,  "password"]) {
  return (req, res, next) => {
    try {
      funcIndicator("field Validater");

      const obj = req.body;
      console.log(obj);

      Object.keys(obj).forEach((key) => {
        console.log(obj[key]);
        if (!obj[key] || obj[key].trim().length === 0) {
          if (
            !allowedFields.some((field) => {
              if (field === key) {
                return true;
              }
            })
          ) {
            console.log("fuckkkkk");
            let error = new AppeError(`${key} is required`, 400);
            next(error);
          }
        }
      });
      next();
    } catch (error) {
      return next(error);
    }
  };
}

export default fieldValidater;
