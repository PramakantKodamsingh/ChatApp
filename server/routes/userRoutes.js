import { Router } from "express";
import {
  loginController,
  registerController,
  authController,
} from "../controllers/userController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = Router();

router.route("/login").post(loginController); //these routes provide req.body

router.post("/register", registerController);

router.route("/getUserData").post(authMiddleware, authController); //after next() in authMiddler authController will run

export default router;
