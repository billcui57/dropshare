import { RatingModel, PinModel } from "@/models";
import { PinService } from "@/services";

const create = async (ratingInfo) => {
  // const { error } = PinValidator.validate(pinInfo);

  // if (error) {
  //   throw new Error(error);
  // }

  // console.log(ratingInfo);

  const createdRating = await RatingModel.create({
    score: ratingInfo.score,
    pin: ratingInfo.pin,
    numTaken: ratingInfo.numTaken,
  });

  const oldPin = await PinModel.findById(ratingInfo.pin).lean();

  const newPin = await PinService.edit(oldPin._id, {
    ...oldPin,
    lng: oldPin.location.coordinates[0], //TODO: do not do this, use DTO
    lat: oldPin.location.coordinates[1],
    ratings: [...oldPin.ratings, createdRating._id],
    remainingCount: oldPin.remainingCount - createdRating.numTaken,
  });

  if (newPin.remainingCount <= 0) {
    await PinService.remove(newPin._id);
  }

  return createdRating.toObject();
};

const list = async (pinId) => {
  return await RatingModel.find({
    pin: pinId,
  }).lean();
};

export default {
  create,
  list,
};
