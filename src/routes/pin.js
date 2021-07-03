import express from "express";
import { PinController } from "@/controllers";

const router = express.Router({ mergeParams: true });

router.get("/", PinController.list);

router.post("/", PinController.create);

export default router;
