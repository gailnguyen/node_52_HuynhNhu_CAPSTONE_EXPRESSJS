import express from "express";
import { detailPageController } from "../controllers/detail-page.controller.js";
import { detailPageService } from "../services/detail-page.service.js";
import protect from "../common/middlewares/protect.middleware.js";

const detailPageRouter = express.Router();

detailPageRouter.get("/:id", detailPageController.getPicInfo);
detailPageRouter.get("/:id/comments", detailPageController.getPicComment);
detailPageRouter.get(
  "/:id/is-saved",
  protect,
  detailPageController.getSaveInfo
);
detailPageRouter.post(
  "/:id/comments",
  protect,
  detailPageController.postComment
);

export default detailPageRouter;
