const express = require("express");
const userRouter = express.Router();
const zod = require("zod");
const jwt = require("jsonwebtoken");
const { User } = require("../db/db");
const mongoose = require("mongoose");
const JWT_SECRET = require("../config");
const authMiddleware = require("../middleware");
const signupSchema = zod.object({
  username: zod.string().email(),
  firstname: zod.string(),
  lastname: zod.string(),
  password: zod.string(),
});
const singinSchema = zod.object({
  username: zod.string().email(),
  password: zod.string(),
});
const updateBody = zod.object({
  password: zod.string().optional(),
  firstname: zod.string().optional(),
  lastname: zod.string().optional(),
});

userRouter.post("/signup", async (req, res) => {
  const username = req.body.username;
  const response = signupSchema.safeParse(req.body);
  if (!response.success)
    res.status(411).json({
      message: "Incorrect inputs",
    });
  else {
    const isExists = await User.findOne({ username: username });
    if (isExists)
      res.status(411).json({
        message: "Email exists",
      });
    else {
      await User.create(req.body);
      const token = jwt.sign({ username: username }, JWT_SECRET);

      res.status(200).json({
        message: "User created successfully",
        token: token,
      });
    }
  }
});

userRouter.post("/signin", async (req, res) => {
  const username = req.body.username;
  const response = singinSchema.safeParse(req.body);
  if (!response.success) {
    res.status(411).json({
      message: "Error while logging in",
    });
  } else {
    const isExists = await User.findOne({ username: username });
    if (!isExists)
      res.status(411).json({
        message: "Error while logging in",
      });
    else {
      const token = jwt.sign({ username: username }, JWT_SECRET);

      res.status(200).json({
        token: token,
      });
    }
  }
});

userRouter.put("/", authMiddleware, async (req, res) => {
  const response = updateBody.safeParse(req.body);
  if (!response.success) {
    res.status(411).json({
      message: "Incorrect details",
    });
  } else {
    const result = await User.updateOne(
      { username: req.userId },
      { $set: req.body }
    );

    if (result.acknowledged) {
      res.status(200).json({
        message: "User updated successfully",
      });
    } else {
      res.status(500).json({
        message: "Failed to update user",
      });
    }
  }
});
userRouter.get("/bulk", async (req, res) => {
  const filter = req.query.filter || "";
  try {
    const users = await User.find({
      $or: [
        {
          firstname: {
            $regex: filter,
            $options: "i", // case-insensitive
          },
        },
        {
          lastname: {
            $regex: filter,
            $options: "i", // case-insensitive
          },
        },
      ],
    });
    res.status(200).json({
      users: users.map((user) => ({
        username: user.username,
        firstname: user.firstname,
        lastname: user.lastname,
        id: user.id,
      })),
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to retrieve users",
      error: error.message,
    });
  }
});
module.exports = userRouter;
