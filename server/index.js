require("dotenv").config();
import express from "express";
import cors from "cors";
import mongoose from "mongoose";


import authRoutes from "./routes/auth";
import userRoutes from "./routes/userRoutes"; // Import user registration routes

const morgan = require("morgan");

const app = express();

//const uri = "mongodb://localhost:27017/ZeroWaste";
const atlasUri = "mongodb+srv://ZeroWaste:Hacc2023@zerowaste.yzx5dla.mongodb.net/?retryWrites=true&w=majority";

// db connection
mongoose.set("strictQuery", false); // required for version 6
mongoose
  .connect(atlasUri)
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB CONNECTION ERROR: ", err));

// middlewares
app.use(express.json({ limit: "4mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));

// route middlewares
app.use("/api", authRoutes);
app.use("/api", userRoutes); // Use the user registration routes

app.listen(8000, () => console.log("Server running on port 8000"));
