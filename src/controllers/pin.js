import express from "express";
import { PinService } from "@/services";

const list = async (req, res, next) => {
  const pins = await PinService.list();
  res.send(pins);
};

const create = async (req, res, next) => {
  const { lng, lat, title } = req.body;

  try {
    PinService.create({
      longitude: lng,
      latitude: lat,
      title: title,
    });
  } catch (err) {
    return next(err);
  }

  return res.sendStatus(200);
};

export default {
  list,
  create,
};
