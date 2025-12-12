import { responseSuccess } from "../common/helpers/function.helper.js";
import { adminService } from "../services/admin.service.js";

export const adminController = {
  getAllUsers: async function (req, res, next) {
    const result = await adminService.getAllUsers(req);
    const response = responseSuccess(result, `Get all users successfully`);
    res.status(response.statusCode).json(response);
  },

  getSavedPicByUserId: async function (req, res, next) {
    const result = await adminService.getSavedPicByUserId(req);
    const response = responseSuccess(result, `Get saved pictures by user id`);
    res.status(response.statusCode).json(response);
  },

  getPicByCreateId: async function (req, res, next) {
    const result = await adminService.getPicByCreateId(req);
    const response = responseSuccess(
      result,
      `Get all pictures created by user id`
    );
    res.status(response.statusCode).json(response);
  },

  delete: async function (req, res, next) {
    const result = await adminService.delete(req);
    const response = responseSuccess(
      result,
      `Remove id picture #${req.params.id} successfully`
    );
    res.status(response.statusCode).json(response);
  },
};
