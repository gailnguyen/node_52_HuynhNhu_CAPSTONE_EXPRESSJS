import express from "express";
import { adminController } from "../controllers/admin.controller.js";

const adminRouter = express.Router();

adminRouter.get("/users", adminController.getAllUsers);
adminRouter.get(
  "/users/:id/save-pictures",
  adminController.getSavedPicByUserId
);
adminRouter.get("/users/:id/pictures", adminController.getPicByCreateId);
adminRouter.delete("/pictures/delete/:id", adminController.delete);

export default adminRouter;
