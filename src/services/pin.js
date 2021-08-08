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
  return await PinModel.updateOne(
    {
      _id: pinId,
    },
    {
      $set: {
        deleted: true,
      },
    }
  );
};

export default {
  list,
  create,
  remove,
};
