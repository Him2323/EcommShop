import express from "express";

import {
  loginUser,
  logoutUser,
  registerUser,
  deleteUser,
  getUserByID,
  getUserProfile,
  getUsers,
  updateUser,
  updateUserProfile,
} from "../controllers/userController.js";
import { protect, admin } from "../middlewares/authMiddleware.js";

const router = express.Router();

//Users Routes
//login
router.route("/login").post(loginUser);
//register
router.route("/register").post(registerUser);
//logout
router.route("/logout").post(logoutUser);
//get profile
router.route("/profile").get(protect, getUserProfile);
//update profile
router.route("/profile").put(protect, updateUserProfile);

//Admin Routes
//get all users
router.route("/").get(protect, admin, getUsers);
//get user by id
router.route("/:id").get(protect, admin, getUserByID);
//delete user
router.route("/:id").delete(protect, admin, deleteUser);
//update user by id
router.route("/:id").put(protect, admin, updateUser);

export default router;
