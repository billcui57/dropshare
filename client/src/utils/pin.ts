import { Rating } from "src/types/rating";

const getAverageRating = (ratings: Rating[]) => {
  const ratingSum = ratings.reduce((accum, currRating: Rating) => {
    return accum + currRating.score;
  }, 0);

  return Number.parseFloat((ratingSum / ratings.length).toFixed(1));
};

export default { getAverageRating };
