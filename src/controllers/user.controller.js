import { responseSuccess } from "../common/helpers/function.helper.js";
import { userService } from "../services/user.service.js";

export const userController = {
  updateAvatar: async function (req, res, next) {
    const result = await userService.updateAvatar(req);
    const response = responseSuccess(result, `Update avatar successfully`);
    res.status(response.statusCode).json(response);
  },

  updateUserInfo: async function (req, res, next) {
    const result = await userService.updateUserInfo(req);
    const response = responseSuccess(result, `Update info successfully`);
    res.status(response.statusCode).json(response);
  },
};
