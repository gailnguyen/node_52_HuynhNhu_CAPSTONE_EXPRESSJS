import { responseSuccess } from "../common/helpers/function.helper.js";
import { authService } from "../services/auth.service.js";

export const authController = {
  register: async function (req, res, next) {
    const result = await authService.register(req);
    const response = responseSuccess(
      result,
      `Register new account successfully`
    );
    res.status(response.statusCode).json(response);
  },

  login: async function (req, res, next) {
    const result = await authService.login(req);
    const response = responseSuccess(result, `Login account successfully`);
    res.status(response.statusCode).json(response);
  },

  refreshToken: async function (req, res, next) {
    const result = await authService.refreshToken(req);
    const response = responseSuccess(
      result,
      `Create refresh token successfully`
    );
    res.status(response.statusCode).json(response);
  },
};
