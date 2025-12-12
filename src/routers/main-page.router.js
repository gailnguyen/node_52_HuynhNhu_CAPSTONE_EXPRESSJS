import express from "express";
import { mainPageController } from "../controllers/main-page.controller.js";

const mainPageRouter = express.Router();

mainPageRouter.get("/", mainPageController.getAllPictures);
mainPageRouter.get("/search", mainPageController.getPictureByName);

export default mainPageRouter;
