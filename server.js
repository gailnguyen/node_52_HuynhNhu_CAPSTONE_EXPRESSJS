import express from "express";
import { PORT } from "./src/common/constant/app.constant.js";
import rootRouter from "./src/routers/root.router.js";
import { appError } from "./src/common/app-error/app.error.js";

const app = express();
app.use(express.json());
app.use("/api", rootRouter);
app.use(appError);

app.listen(PORT, () => {
  console.log(`👹 Server online at http://localhost:${PORT}`);
});
