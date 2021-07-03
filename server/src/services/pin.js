import { PinModel } from "@/models";

const list = async () => {
  const pins = await PinModel.find({}).lean();

  const pinDTOArr = pins.map((pin) => {
    return {
      title: pin.title,
      longitude: pin.location.coordinates[0],
      latitude: pin.location.coordinates[1],
    };
  });

  return pinDTOArr;
};

const create = async ({ longitude, latitude, title }) => {
  await PinModel.create({
    title: title,
    location: {
      type: "Point",
      coordinates: [longitude, latitude],
    },
  });
};

export default {
  list,
  create,
};
