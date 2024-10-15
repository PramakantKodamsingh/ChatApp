import { Router } from "express";
import Messages from "../models/Messages.js";
// import authMiddleware from "../middleware/authMiddleware.js";

const router = Router();

router.post("/", async (req, res) => {
  const newMessage = new Messages(req.body);
  try {
    const savedMessage = await newMessage.save();
    res.status(200).json(savedMessage);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/:conversationId", async (req, res) => {
  try {
    const messages = await Messages.find({
      conversationId: req.params.conversationId,
    });

    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json(error);
  }
});

export default router;
