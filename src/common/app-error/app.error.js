import jwt from "jsonwebtoken";
import { responseError } from "../helpers/function.helper.js";
import { statusCodes } from "../helpers/status-code.helper.js";

export const appError = (err, req, res, next) => {
  console.log("Lỗi đặc biệt", err);

  if (err instanceof jwt.JsonWebTokenError) {
    err.code = statusCodes.UNAUTHORIZED;
  }

  if (err instanceof jwt.TokenExpiredError) {
    err.code = statusCodes.FORBIDDEN;
  }
  const responseErr = responseError(err.message, err.code, err.stack);

  res.status(responseErr.statusCode).json(responseErr);
};
