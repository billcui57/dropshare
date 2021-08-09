import { PinModel } from "@/models";

const list = async () => {
  return await PinModel.find({ deleted: false }).lean();
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

export default {
  list,
  create,
  remove,
};
