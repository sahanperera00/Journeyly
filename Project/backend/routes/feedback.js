import express from "express";
import { getAllFeedback, getFeedback, createFeedback, updateFeedback, deleteFeedback } from "../controllers/feedback.js";

const router = express.Router();

router.get("/", getAllFeedback);
router.get("/:id", getFeedback);
router.post("/create", createFeedback);
router.put("/update/:id", updateFeedback);
router.delete("/delete/:id", deleteFeedback);

export default router;