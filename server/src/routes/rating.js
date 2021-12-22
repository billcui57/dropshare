import express from "express";
import { RatingController } from "@/controllers";

const router = express.Router({ mergeParams: true });

router.post("/", RatingController.create);

router.get("/", RatingController.list);

export default router;
