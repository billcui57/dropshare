import { PinModel } from "@/models";

const list = async () => {
  return await PinModel.find({}).lean();
};

const create = async ({ lng, lat, title }) => {
  return await PinModel.create({
    title: title,
    location: {
      type: "Point",
      coordinates: [lng, lat],
    },
  });
};

export default {
  list,
  create,
};
