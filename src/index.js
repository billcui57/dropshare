import { RatingModel } from "@/models";
import Routes from "@/routes";
import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import "./config/mongodb.config";

const app = express();
const PORT = 5000;

app.use(express.json({ limit: "10MB" }));
app.use(cors());

app.use("/api/v1", Routes.initPrivateRoutes());

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});

export default app;
