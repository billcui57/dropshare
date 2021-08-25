import { PinModel } from "@/models";
import { PinValidator } from "@/validators";

const list = async () => {
  return await PinModel.find({ deleted: false }).lean();
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

export default {
  list,
  create,
  remove,
};
