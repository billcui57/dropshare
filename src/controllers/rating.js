import express from "express";
import { RatingService } from "@/services";

const create = async (req, res, next) => {
  const ratingInfo = req.body;

  try {
    const rating = await RatingService.create(ratingInfo);
    return res.send(rating);
  } catch (err) {
    return next(err);
  }
};

const list = async (req, res, next) => {
  const { pinId } = req.query;

  try {
    const ratings = await RatingService.list(pinId);
    return res.send(ratings);
  } catch (err) {
    return next(err);
  }
};

export default {
  create,
  list,
};
