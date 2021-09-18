import express from "express";
import { PinController } from "@/controllers";

const router = express.Router({ mergeParams: true });

router.get("/", PinController.list);

router.post("/", PinController.create);

router.delete("/:id", PinController.remove);

router.put("/:id", PinController.edit);

export default router;
