import express from "express";
import { PinService } from "@/services";

const toPinDTO = (pin) => {
  return {
    _id: pin._id,
    title: pin.title,
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
  const { lng, lat, title } = req.body;

  try {
    const pin = await PinService.create({
      lng: lng,
      lat: lat,
      title: title,
    });

    return res.send(toPinDTO(pin));
  } catch (err) {
    return next(err);
  }
};

const remove = async (req, res, next) => {
  const { id } = req.params;
  try {
    const pin = await PinService.remove(_id);

    return res.send(toPinDTO(pin));
  } catch (err) {
    return next(err);
  }
};

export default {
  list,
  create,
  remove,
};
