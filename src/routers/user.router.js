import express from "express";
import { userController } from "../controllers/user.controller.js";
import protect from "../common/middlewares/protect.middleware.js";
import { uploadMemoryCloud } from "../common/multer/memory-cloud.multer.js";

const userRouter = express.Router();

userRouter.post(
  "/post-avatar",
  protect,
  uploadMemoryCloud.single("avatar"),
  userController.updateAvatar
);
userRouter.put("/update-info", protect, userController.updateUserInfo);

export default userRouter;
