import express from "express";
import { PinService } from "@/services";

const toPinDTO = (pin) => {
  return {
    ...pin,
    lng: pin.location.coordinates[0],
    lat: pin.location.coordinates[1],
  };
};

const list = async (req, res, next) => {
  const pins = await PinService.list();

  const pinDTOArr = pins.map((pin) => {
    return toPinDTO(pin);
  });

  res.send(pinDTOArr);
};

const create = async (req, res, next) => {
  const pinInfo = req.body;
  try {
    const pin = await PinService.create(pinInfo);
    return res.send(toPinDTO(pin));
  } catch (err) {
    return next(err);
  }
};

const remove = async (req, res, next) => {
  const { id } = req.params;
  try {
    await PinService.remove(id);
    return res.sendStatus(200);
  } catch (err) {
    return next(err);
  }
};

export default {
  list,
  create,
  remove,
};
