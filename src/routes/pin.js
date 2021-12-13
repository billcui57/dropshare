import express from "express";
import { PinController } from "@/controllers";

const router = express.Router({ mergeParams: true });

router.get("/", PinController.list);

router.post("/", PinController.create);

router.delete("/:id", PinController.remove);

router.put("/:id", PinController.edit);

router.get("/nearby", PinController.listNearby);

router.get("/:id", PinController.get);

export default router;
