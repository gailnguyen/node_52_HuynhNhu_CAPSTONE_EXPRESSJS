import express from "express";
import authRouter from "./auth.router.js";
import mainPageRouter from "./main-page.router.js";
import detailPageRouter from "./detail-page.router.js";
import adminRouter from "./admin.router.js";
import userRouter from "./user.router.js";

const rootRouter = express.Router();

rootRouter.use("/auth", authRouter);
rootRouter.use("/main-page", mainPageRouter);
rootRouter.use("/detail-page", detailPageRouter);
rootRouter.use("/admin", adminRouter);
rootRouter.use("/user", userRouter);

export default rootRouter;
