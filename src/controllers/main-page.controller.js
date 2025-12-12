import { responseSuccess } from "../common/helpers/function.helper.js";
import { mainPageService } from "../services/main-page.service.js";

export const mainPageController = {
  getAllPictures: async function (req, res, next) {
    const result = await mainPageService.getAllPictures(req);
    const response = responseSuccess(result, `Get all pictures successfully`);
    res.status(response.statusCode).json(response);
  },

  getPictureByName: async function (req, res, next) {
    const result = await mainPageService.getPictureByName(req);
    const response = responseSuccess(
      result,
      `Search list pictures successfully`
    );
    res.status(response.statusCode).json(response);
  },
};
