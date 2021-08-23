import Joi from "joi";
import {
  CATEGORIES,
  SUBCATEGORIES,
  TITLE_MIN_LENGTH,
  TITLE_MAX_LENGTH,
  DESCRIPTION_MIN_LENGTH,
  DESCRIPTION_MAX_LENGTH,
} from "@/constants/pin";

const validationSchema = Joi.object({
  title: Joi.string().min(TITLE_MIN_LENGTH).max(TITLE_MAX_LENGTH).required(),
  description: Joi.string()
    .min(DESCRIPTION_MIN_LENGTH)
    .max(DESCRIPTION_MAX_LENGTH)
    .required(),
  remainingCount: Joi.number().min(0),
  category: Joi.string().valid(...CATEGORIES),
  subcategory: Joi.string().valid(...SUBCATEGORIES),
}).unknown(true);

export default validationSchema;
