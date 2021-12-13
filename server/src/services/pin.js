import { PinModel } from "@/models";
import { PinValidator } from "@/validators";

const list = async () => {
  return await PinModel.find({ deleted: false }).lean();
};

const get = async (id) => {
  console.log(id);
  return await PinModel.findById(id).lean();
};

const create = async (pinInfo) => {
  const { error } = PinValidator.validate(pinInfo);

  if (error) {
    throw new Error(error);
  }

  const createdPin = await PinModel.create({
    title: pinInfo.title,
    description: pinInfo.description,
    remainingCount: pinInfo.remainingCount,
    category: pinInfo.category,
    subcategory: pinInfo.subcategory,
    location: {
      type: "Point",
      coordinates: [pinInfo.lng, pinInfo.lat],
    },
    image: pinInfo.image,
  });

  return createdPin.toObject();
};

const remove = async (pinId) => {
  await PinModel.updateOne(
    {
      _id: pinId,
    },
    {
      deleted: true,
    }
  );
};

const edit = async (pinId, newPinInfo) => {
  const oldPin = await PinModel.findById(pinId);

  if (!oldPin) {
    throw new Error("Pin not found");
  }

  const { error } = PinValidator.validate(newPinInfo);

  if (error) {
    throw new Error(error);
  }

  const newPin = oldPin;

  newPin.title = newPinInfo.title;
  newPin.description = newPinInfo.description;
  newPin.remainingCount = newPinInfo.remainingCount;
  newPin.category = newPinInfo.category;
  newPin.subcategory = newPinInfo.subcategory;
  newPin.image = newPinInfo.image;
  newPin.location.coordinates = [newPinInfo.lng, newPinInfo.lat];
  await newPin.save();

  return newPin.toObject();
};

const listNearby = async (lng, lat, maxDistance) => {
  return await PinModel.find({
    location: {
      $nearSphere: {
        $geometry: {
          type: "Point",
          coordinates: [lng, lat],
        },
        $maxDistance: maxDistance,
      },
    },
    deleted: false,
  }).lean();
};

export default {
  list,
  create,
  remove,
  edit,
  listNearby,
  get,
};
