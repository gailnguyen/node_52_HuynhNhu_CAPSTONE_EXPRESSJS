import { responseSuccess } from "../common/helpers/function.helper.js";
import { detailPageService } from "../services/detail-page.service.js";

export const detailPageController = {
  getPicInfo: async function (req, res, next) {
    const result = await detailPageService.getPicInfo(req);
    const response = responseSuccess(result, `Get pic detail successfully`);
    res.status(response.statusCode).json(response);
  },

  getPicComment: async function (req, res, next) {
    const result = await detailPageService.getPicComment(req);
    const response = responseSuccess(result, `Get comment successfully`);
    res.status(response.statusCode).json(response);
  },

  getSaveInfo: async function (req, res, next) {
    const result = await detailPageService.getSaveInfo(req);
    const response = responseSuccess(
      result,
      `Check if you have saved pic or not successfully`
    );
    res.status(response.statusCode).json(response);
  },

  postComment: async function (req, res, next) {
    const result = await detailPageService.postComment(req);
    const response = responseSuccess(result, `Post comment successfully`);
    res.status(response.statusCode).json({ response });
  },
};
