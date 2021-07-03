import express from "express";
import ratingRoutes from "./rating";
import pinRoutes from "./pin";

const initPrivateRoutes = () => {
  const router = express.Router({ mergeParams: true });
  router.use("/ratings", ratingRoutes);
  router.use("/pins", pinRoutes);
  return router;
};

export default {
  initPrivateRoutes,
};
