import AppeError from "../utils/appError.util.js";
import { controllerIndicator } from "../utils/Idicator.utils.js";

function validateEmail(email) {
  return;
}

function fieldValidater(allowedFields = []) {
  return (req, res, next) => {
    try {
      controllerIndicator("field Validater 'Middleware' ");

      const obj = req.body;
      console.log(obj);

      Object.keys(obj).forEach((key) => {;
        if (!obj[key] || obj[key].trim().length === 0) {
          if (
            !allowedFields.some((field) => {
              if (field === key) {
                return true;
              }
            })
          ) {
            let error = new AppeError(`${key} is required`, 400);
            return next(error);
          }
        }
      });
      return next();
    } catch (error) {
      return next(error);
    }
  };
}

export default fieldValidater;
