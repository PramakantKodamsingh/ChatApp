import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import chalk from "chalk";
import userRoutes from "./routes/userRoutes.js";
import connectDB from "./config/db.js";
import conversationRoutes from "./routes/conversationRoutes.js";
import messagesRoutes from "./routes/messagesRoutes.js";

dotenv.config();
// mongodb connect
connectDB();

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173", // Allow requests from this origin
    credentials: true, // If you want to allow cookies and credentials
  })
);
app.use(express.json());

app.use("/api/v1/users", userRoutes);
app.use("/api/v1/conversations", conversationRoutes);
app.use("/api/v1/messages", messagesRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(chalk.bgYellow(`Server is running in http://localhost:${port}`));
});
