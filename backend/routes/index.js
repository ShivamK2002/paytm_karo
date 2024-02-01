const express = require("express");
const userRouter = require("./user");
const indexRouter = express.Router();

indexRouter.use("/user", userRouter);

module.exports = indexRouter;
