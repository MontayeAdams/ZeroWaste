import express from "express";
const router = express.Router();
import userController from "../controllers/userController"; // Import the user registration controller

router.post("/signup", userController.signup); // Define the user registration route

export default router;