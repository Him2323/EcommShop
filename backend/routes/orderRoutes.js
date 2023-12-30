import express from "express";

import {
  getMyOrders,
  getOrderById,
  getOrders,
  updateOrderToDelivered,
  updateOrderToPaid,
  addOrderItems,
} from "../controllers/orderController.js";
import { protect, admin } from "../middlewares/authMiddleware.js";

const router = express.Router();

//User
router.route("/").post(protect, addOrderItems);
router.route("/mine").get(protect, getMyOrders);
router.route("/:id/pay").put(protect, updateOrderToPaid);
router.route("/:id").get(protect, getOrderById);

//admin
router.route("/").get(protect, admin, getOrders);
router.route("/:id/deliver").put(protect, admin, updateOrderToDelivered);

export default router;
